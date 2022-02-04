# Receiving Voice Samples
In Pycord we try to keep recording the voice of users as minimalistic and easy as possible,
this guide provides simple and easy examples for using this feature.

For users which need examples please refer to the example on the [repository](https://github.com/Pycord-Development/pycord/blob/master/examples/audio_recording.py)

## Starting out
First thing to do would be making a cache of your voice connections, this isn't hard as it would just be `connections = {}`.

You will now want to create your command for recording.

```py
import discord

bot = discord.Bot(debug_guilds=[...])
connections = {}

@bot.command()
async def record(ctx):  # if your using commands.Bot this will also work.
    voice = ctx.author.voice

    if not voice:
        await ctx.respond("You aren't in a voice channel!")

    vc = await voice.channel.connect()  # connect to the voice channel the author is in.
    connections.update({ctx.guild.id: vc})  # updating the cache with the guild and channel.

    vc.start_recording(
        discord.WaveSink(),  # the sink type to use.
        once_done,  # what to do once done.
        ctx.channel  # the channel to disconnect from.
    )
    await ctx.respond("Started recording!")
```
Now you are done with making your command for voice receiving, you will want to:

- Make your finished callback
- Make a stop command

### Making a callback
For this you will want to define the currently undefined `once_done` function inside our command, like so:

```py
async def once_done(sink: discord.Sink, channel: discord.TextChannel, *args):  # our voice client already passes these in.
    user_recorded = [  # a list of recorded users
        f"<@{user_id}>"
        for user_id, audio in sink.audio_data.items()
    ]
    await sink.vc.disconnect()  # disconnect from the voice channel.
    files = [discord.File(audio.file, f"{user_id}.{sink.encoding}") for user_id, audio in sink.audio_data.items()]  # list down the files.
    await channel.send(f"finished recording audio for: {', '.join(recorded_users)}.", files=files)  # send a message with the accumulated files.
```
and now the final step to finishing your voice recording features is the stop command!

### Making a stop command
The final step to this guide is stopping the recording of voice.
this is befar the easiest step here,

To make it you should do the following:

```py
@bot.command()
async def stop_recording(ctx):
    if ctx.guild.id in connections:  # check if the guild is in the cache
        vc = connections[ctx.guild.id]
        vc.stop_recording()  # stop recording, and call the callback(once_done)
        del connections[ctx.guild.id]  # remove the guild from the cache
        await ctx.delete()  # and delete
    else:
        await ctx.respond("I am currently not recording here.")  # respond with this if we aren't recording.
    
bot.run("token")
```
and now you are done!
You have implemented voice receiving into your bot, congrats! most people never get here so it is quite a achivement.