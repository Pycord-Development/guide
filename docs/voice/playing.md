---
title: Playing Audio in Voice Channels
---

# About

Pycord offers multiple ways to play audio streams in a voice channel keeping it as simple
and easy as possible, so making any kind of Discord bot is easy for all audiences. This
guide provides simple and easy examples of using the multiple ways the library allows
you to play audio.

For users that want extra examples, you can find some in Pycord's
[Github repository](https://github.com/Pycord-Development/pycord/blob/master/examples/).

## Starting out

Pycord natively provides an [`discord.AudioSource`](https://docs.pycord.dev/en/stable/api/voice.html#discord.AudioSource)
object. This object defines the structure audio sources must follow in order to be accepted by
the library. For more information on this structure, check the respective documentation.

You usually do not need to manually create subclasses of this object as the library also provides you
with the most common audio source types.

### [`PCMAudio`](https://docs.pycord.dev/en/stable/api/voice.html#discord.PCMAudio)

`PCMAudio` is the base class designed to read raw, uncompressed 16-bit 48kHz stereo PCM bytes
directly from an existing byte stream or file. This essentially means that common audio formats
such as `mp3`, `wav`, or `ogg` are not valid, as they are not PCM streams (check `FFmpegPCMAudio`).

You should only use `PCMAudio` in specialized or advanced scenarios where you have raw PCM bytes
(such as live audio synthesis or reading from pre-recorded `.pcm` data) without needing external
tools.

```py title="Using PCMAudio"
import io
import discord

bot = discord.Bot()

@bot.command()
async def play(ctx: discord.ApplicationContext) -> None:
    if not ctx.voice_client:
        await ctx.author.voice.channel.connect()

    with open("raw_audio.pcm", "rb") as f:
        # we use io.BytesIO as a container for the bytes we are reading
        pcm_data = io.BytesIO(f.read())

    source = discord.PCMAudio(pcm_data)
    ctx.voice_client.play(source)
    await ctx.respond("Playing PCM audio.")
```

### [`FFmpegPCMAudio`](https://docs.pycord.dev/en/stable/api/voice.html#discord.FFmpegPCMAudio)

Unlike `PCMAudio`, `FFmpegPCMAudio` allows you to pass different audio file formats and automatically
decode it to PCM. This is done by using the `ffmpeg` (or `avconv`) executables to convert these audio
streams into manipulable PCM data in a dedicated sub-process.

This intermediate PCM step is slightly more CPU-intensive, as it has to encode the raw audio again into
Opus in order to be transmitted to Discord. However, having access to the raw PCM is necessary if you
want to manipulate or modify the audio.

```py title="Using FFmpegPCMAudio"
import discord

bot = discord.Bot()

@bot.command()
async def play(ctx: discord.ApplicationContext) -> None:
    if not ctx.voice_client:
        await ctx.author.voice.channel.connect()

    # unlike PCMAudio, you do not need to manually open and read
    # the file, the library will do it for you.
    # FFmpegPCMAudio takes a path to a valid audio file as its first parameter
    # this means that both relative and absolute paths are allowed
    source = discord.FFmpegPCMAudio("audio_file.mp3")
    ctx.voice_client.play(source)
    await ctx.respond("Playing FFmpeg PCM audio.")
```

### [`PCMVolumeTransformer`](https://docs.pycord.dev/en/stable/api/voice.html#discord.PCMVolumeTransformer)

`PCMVolumeTransformer` is an audio source that simplifies the volume changing process in PCM sources
(such as `PCMAudio` or `FFmpegPCMAudio`) by doing it for you.

This also allows you to dynamically change the volume during playback, by just setting a new value to the
`volume` property.

```py title="Using PCMVolumeTransformer"
import discord

bot = discord.Bot()

@bot.command()
async def play(ctx: discord.ApplicationContext, volume: float = 1.0) -> None:
    if not ctx.voice_client:
        await ctx.author.voice.channel.connect()

    # this can be any non-opus source (such as discord.PCMAudio or discord.FFmpegPCMAudio)
    original_source = ...

    source = discord.PCMVolumeTransformer(original_source, volume=volume)
    ctx.voice_client.play(source)
    await ctx.respond("Playing PCM volume transformed audio.")


@bot.command()
async def volume(ctx: discord.ApplicationContext, *, volume: float) -> None:
    if not ctx.voice_client or not ctx.voice_client.source:
        await ctx.respond("Connect to a voice channel and play something first!")
        return

    ctx.voice_client.source.volume = volume
    await ctx.respond(f"Changed the audio volume to {volume}")
```

### [`FFmpegOpusAudio`](https://docs.pycord.dev/en/stable/api/voice.html#discord.FFmpegOpusAudio)

This is similar to `FFmpegPCMAudio`, but, as the name suggests, this does not produce manipulable PCM
streams and directly encodes audio streams to Opus.

This is the most efficient and recommended way to play local media files or web streams directly into
a voice channel **only when no extra processing (such as changing volume) is required**.

`FFmpegOpusAudio` also uses `ffmpeg` (or `avconv`) to encode common audio formats to Opus, which is the
native audio format Discord requires for voice transmission.

Unlike other sources, this one has to be initialized by using the `FFmpegOpusAudio.from_probe` classmethod.
This analyzes the audio to obtain the codec and bitrate of the audio, so it uses the fastest and
most efficient way to encode it to Opus, this is done by using `ffprobe` (or `avprobe`).

```py title="Initializing a FFmpegOpusAudio"
source = await discord.FFmpegOpusAudio.from_probe("audio.webm")
voice_client.play(source)
```

`FFmpegOpusAudio.from_probe` also allows you to pass a custom `method`, used to determine the codec and
bitrate of the audio source. This can be a string defining whether to use the `native` probe
(`ffprobe` / `avprobe`), or `fallback`, which falls back to use `ffmpeg` / `avconv`. The latter
may be used by Windows users when none of `ffprobe` or `avprobe` is installed.

This can also take custom functions which take two parameters, the `source` and the `executable`, and
should return a tuple of `(codec, bitrate)`.

```py title="Using FFmpegOpusAudio"
import discord

bot = discord.Bot()

@bot.command()
async def play(ctx: discord.ApplicationContext) -> None:
    if not ctx.voice_client:
        await ctx.author.voice.channel.connect()

    source = await discord.FFmpegOpusAudio.from_probe("audio.wav")
    ctx.voice_client.play(source)
    await ctx.respond("Playing FFmpeg Opus audio.")
```

And... congratulations! You now know how to implement audio sources for voice channel playback into your
bot! Some audio sources may look more complex than others, but all of them keep an easy and simple design
so you can make complex bots and get even the most advanced of ideas down.

!!! info "Related Topics"

    - [Rules and Common Practices](../getting-started/rules-and-common-practices.md)
    - [Advanced Audio Playback](./advanced-playing.md)
