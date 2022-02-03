# Slash Commands
Discord implemented slash commands as a easier, faster, more efficent, and cooler way of using commands.
Pycord has implemented it into the library in a professional, efficent and easy manner of which will be showcased here.

## Basics

Shown below is a basic ping, pong slash command

```py
import discord

# discord.Bot removes the required prefix param of commands.Bot
bot = discord.Bot(debug_guilds=[...])  # since global slash commands can take up to an hour to register 
# we have to limit the guilds for testing.

@bot.command()  # makes a slash command
async def ping(ctx):
    await ctx.respond("pong!")  # respond to the slash command
```


<DiscordMessages>
    <DiscordMessage :bot="true" author="Guide Bot" avatar="red">
        <template #interactions>
            <DiscordInteraction author="Guide Man" avatar="green" :command="true">ping</DiscordInteraction>
        </template>
        pong!
</DiscordMessages>