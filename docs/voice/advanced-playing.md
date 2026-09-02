---
title: Advanced Audio Playing
---

# About

Pycord provides built-in audio sources for common use cases, but complex bots often require greater
control over audio streams or need to handle voice playback across hundreds of servers simultaneously.
This guide covers advanced audio concepts, such as writing custom audio source implementations
and offloading voice processing to standalone audio nodes, using Lavalink.

## Starting out

In the [previous guide](./playing.md), standard audio sources that Pycord provides were covered. While
these built-in classes cover most general needs, [`discord.AudioSource`](https://docs.pycord.dev/en/stable/api/voice.html#discord.AudioSource)
can be subclassed to create custom audio pipelines, synthesizers, or memory stream handlers.

However, as a bot grows larger, handling multiple local FFmpeg processes and real-time encoding on the
same machine as your bot's running can quickly bottleneck CPU performance. To solve this, advanced
bot architectures decouple playback entirely by relying on external audio servers such as Lavalink and
interacting with them through lightweight client libraries like SonoLink.

### Custom `AudioSource`s

All audio sources covered in the previous guide derive from `discord.AudioSource`, and implement
at least a custom `read` method.

This method should return 20ms worth of audio, following the 16-bit 48kHz stereo PCM requirement.
You may override `is_opus` when the audio returned by the `read` method is already Opus encoded.

When no more audio is available, you can return an empty bytes-like object to tell the library the
audio reading is over.

You may also override `cleanup` when extra clean-up processes are needed when the reading is complete.

A common usecase for subclassing an `AudioSource` is when you want to implement an audio player that extracts audio from an online source, such as YouTube (using `youtube_dl`/`yt_dlp`).

```py title="Implementing a custom audio source"
import asyncio

import discord
import youtube_dl  # third-party library that requires installing

ytdl = youtube_dl.YoutubeDL()


# we will implement a basic YTDLSource
class YTDLSource(discord.AudioSource):
    # we will take a processed audio source, to simplify our handling
    def __init__(self, processed_source: discord.AudioSource, *, data: dict) -> None:
        self.processed_source: discord.AudioSource = processed_source
        self.data: dict = data

        self.title = data.get("title")
        self.url = data.get("url")

    # reading from this source is essentially reading from the processed source
    def read(self) -> bytes:
        return self.processed_source.read()

    def is_opus(self) -> bool:
        return self.processed_source.is_opus()

    def cleanup(self) -> None:
        self.processed_source.cleanup()

    @classmethod
    async def from_url(cls, url: str) -> YTDLSource:
        # here, we will implement our logic from obtaining the youtube audio from an url
        # we will be using asyncio.to_thread, because extracting the info is a sync operation
        # and may block our bot for the duration it takes to finish
        data = await asyncio.to_thread(ytdl.extract_info, url, download=True)

        # playlists have an "entries" key, so grab the first item
        if "entries" in data:
            data = data["entries"][0]

        filename = ytdl.prepare_filename(data)
        return cls(discord.FFmpegPCMAudio(filename), data=data)
```

For a more advanced explanation and implementation of this source, check
[the `basic_voice.py` example](https://github.com/Pycord-Development/pycord/blob/master/examples/basic_voice.py).

### Using Lavalink

Lavalink is the ultimate audio playback server tool, as it can handle both remote and local audio
playing while being easy to handle and setup, and low-usage.

First, you need to run a [Lavalink Server](https://github.com/lavalink-devs/Lavalink) to connect with.
In case you do not know how, there are multiple documentations to do so that will not be covered here,
but we recommend you the [SonoLink Lavalink Setup Guide](https://sonolink.readthedocs.io/en/latest/guides/lavalink-setup.html).

To interact with your Lavalink server you must send HTTP requests, but here we will be using
[SonoLink](https://github.com/sonolink/sonolink), an API wrapper for Lavalink.

To install it, you can simply run:

```sh title="Installing sonolink"
pip install -U sonolink
```

Now, you will need to connect to your Lavalink server using a Node:

```py title="Connecting to Lavalink"
import discord
import sonolink

bot = discord.Bot()
sl_client = sonolink.Client(bot)

sl_client.create_node(
    id="main-node",  # the unique ID for the node being created
    uri="http://0.0.0.0:443",  # HTTP(S) protocol is required when passing URI
    password="youshallnotpass"
)

@bot.listen()
async def on_connect() -> None:
    await sl_client.start()  # starts connection to the created nodes
    print("SonoLink nodes connected successfully!")
```

<br />

Now you are finished making your node! Next, you will want to:

1. Make a `play` command
2. Add connection-handling events

#### Making a `play` command

The core functionality for a music bot using SonoLink is a `play` command, as it allows users to reproduce
their own songs as they please.

To do this, you need to create a command that ensures a `sonolink.Player` instance is connected
and available to play audio.

```py title="Creating a play command"
@bot.slash_command()
async def play(ctx: discord.ApplicationContext, *, search: str) -> None:
    # Before proceeding with the logic, we must check the ctx.author is
    # connected in a voice channel
    if not ctx.author.voice or not ctx.author.voice.channel:
        await ctx.respond("You must be in a voice channel first!")
        return

    # We need to check we are connected to a voice channel AND the
    # voice client connected is a `sonolink.Player` instance.
    vc = ctx.voice_client

    # Connect to the voice channel if we are not yet
    if not vc:
        vc = await ctx.author.voice.channel.connect(
            cls=sonolink.Player,
        )
    elif not isinstance(vc, sonolink.Player):
        # And here, if there is a voice client connected, check it is
        # a sonolink.Player instance.
        # If not, reconnect with a sonolink.Player instance
        await vc.disconnect(force=True)
        vc = await ctx.author.voice.channel.connect(
            cls=sonolink.Player,
        )

    # This check is not required, but creates a better experience for final users
    # We will check that the channel the Player is connected is the same the ctx.author
    # is in.
    if ctx.author.voice.channel.id != vc.channel.id:
        await ctx.respond("You must be in the same voice channel as the bot.")
        return

    # We will now search for the song the user provided in the `search` parameter
    # We can optionally pass a `source` keyword argument to reduce the locations
    # the song will be search from.
    result = await sl_client.search_track(search)

    # SonoLink returns a SearchResult instance when searching tracks
    # so we will need to check that the result is not empty and is not an error
    if result.is_empty() or result.is_error() or not result.result:
        await ctx.respond("Song not found!")
        return

    # The fetched result can be a list of tracks, a playlist or a single track
    # so we must check against all those possibilities
    if isinstance(result.result, list):
        track = result.result[0]
    elif isinstance(result.result, sonolink.models.Playlist):
        track = result.result.tracks[0]
    else:
        track = result.result

    # And finally... we play the track we obtained
    await vc.play(track)
    await ctx.respond(f"Now playing: `{track.title}`")
```

<br />

Now that this is done, the only thing left to do is make your connect events.

#### Adding connect events

The final step of this guide is connecting to the node to your server when the bot goes online.

To make it, you will want to do the following:

```py title="Adding connect events"
@bot.event
async def on_sonolink_node_ready(event: sonolink.gateway.ReadyEvent) -> None:
    print(f"Node with ID {event.node.id!r} has connected!")
    print(f"Resumed session: {event.resumed}")

bot.run("token")
```

Congratulations! You are now able to create custom Audio Sources for advanced playback, and offloading
the playback to an external node using Lavalink and interacting with it using Sonolink! Most bots and
Discord API wrappers don't have this as a feature, so this is quite an accomplishment. Thankfully,
Pycord makes it easy to make complex bots so that you can get the most advanced of ideas down.

!!! info "Related Topics"

    - [Rules and Common Practices](../getting-started/rules-and-common-practices.md)
