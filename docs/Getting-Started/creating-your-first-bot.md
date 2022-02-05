# Creating your first bot

Exited to create your first bot? Once you [install Pycord](installation.md), you can start right away!

## Creating the bot application

Just like how you needed to sign up to Discord to get started, we need to get your bot signed up too. To do this, 

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications) and click on <button class="blurplebutton">New Application</button>.
2. Give your bot a name, and click <button class="blurplebutton">Create</button>.
3. Now, you should see a page like this.
	![image](https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-MjdW3OQnwUhacopqSWw%2F-Mjd_-mxrJCrzmaXrAg8%2Fimage.png?alt=media&token=b8e2ae6c-2290-4d37-ad7c-eb412f3fb00e)
4. Click on <button class="greybutton">Bot</button> tab on the left side of the screen.
5. Click on <button class="blurplebutton">Add bot</button>.
6. You can give it a name, change the Avatar, etc.

## Inviting the bot
Now, lets get the bot added to some servers. Go to the <button class="greybutton">OAuth2</button> tab in the left pane, and select `bot` and `applications.commands` as the scope.

The `applications.commands` scope allows the bot to use Slash Commands, which you may want to have.

Next, we choose what permissions the bot will have. You can select them. For now, lets give your bot the Administrator permission, meaning the bot will have all the permissions.
Once you select the permissions, click on copy to get the bot invite link.

![image](https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-Mk6tNY3LfDkjd6pqdpL%2F-Mk6tkdpddEWoa2jczZk%2Fimage.png?alt=media&token=52c8a29f-a798-48f8-a8c7-4ecca2681f79)

You can use this link to invite the bot.

## Tokens
Now that we have an account for our bot, we need to login. In order to login, we need the bot's password.
All users and bots have a "token". You may think of a token as a unique password, since this is what we use to log into the bot and connect it to Discord.

Tokens are "snowflakes". Not actual snowflakes, though. Just like how no two snowflakes in real life have the same pattern, a snowflake in computers is a unique thing - no two bots have the same token - so a token is a snowflake. An ID is a snowflake.

Now, lets get our bot's token. To do this, 

1. Go back to the <button class="greybutton">Bot</button> tab. 
2. Click on the <button class="blurplebutton">Copy</button> button in the "Token" section.
	![image](https://gblobscdn.gitbook.com/assets%2F-MjPk-Yu4sOq8KGrr_yG%2F-MjdbU12JISJorAZxrKH%2F-MjdbpUsapzb5n15Po5P%2Fimage.png?alt=media&token=118e259f-940a-4f6c-b3a3-c29f3a54100d)

Now, you have your bot's token copied to your clipboard.

!!! danger

	Never leak your bot's token, and never share it with anyone. Even if you get any DMs and someone tells you to do so, perhaps claiming to be Discord Staff, do not do so. They are probably lying and are scamming you. Anyone with your token will be able to access your bot fully. They will be able to do anything they want with your bot. 

	Never push it to GitHub, or send it with the code. One way to prevent your token from getting leaked is to store it in `.env` files.

### Protecting Tokens

#### Using dotenv

You can store your tokens in `.env` files. This is a simple way to store sensitive information.

1. Create a file with the name `.env`. Just `.env`, with the dot/period at the start.
2. Define the token in the file, like,
	```env
	TOKEN = [PASTE YOUR TOKEN HERE]
	```
	for example,
	```env
	TOKEN = NzkyNzE1NDU0MTk2MDg4ODQy.X-hvzA.Ovy4MCQywSkoMRRclStW4xAYK7I
	```
3. Install [`python-dotenv`](https://pypi.org/project/python-dotenv/)
    ```bash
    python -m pip install python-dotenv
    ```
If your code is a git repository, you should create a file called `.gitignore` and add `.env` to it. This means that whenever you use `git push`, your .env file will not be pushed. It will stay secure in your local system.

## Coding the Basics

```py
import discord
import os # default module
from dotenv import load_dotenv
load_dotenv() # we load all the variables from the env file
bot = discord.Bot(debug_guilds=[881207955029110855])
@bot.event
async def on_ready():
    print(f"{bot.user} is ready and online!")
@bot.slash_command(name = "hello", description = "Say hello to the bot")
async def hello(ctx):
    await ctx.send("Hey!")
bot.run(os.getenv('TOKEN')) # run the bot with the token
```

Let's go through the code. First, the imports.

```py
import discord
import os
from dotenv import load_dotenv
```

In the first line, `import discord`, we import Pycord. Although you install Pycord with `pip install py-cord`, you import it with `import discord`.

We then import `os` and `dotenv`. `os` is a default module that we will use to get the token from the env file. `dotenv` is a module that we will use to load the env file. You installed this with `pip install python-dotenv`.

Next, we load the env file with `load_dotenv()`.

```py
bot = discord.Bot(debug_guilds=[881207955029110855])
```

We create a new instance of [`discord.Bot`](https://docs.pycord.dev/en/master/api.html#discord.Bot
). In the `debug_guilds` argument, we pass a list of guild IDs where we want to test the bot. Remember to change the list and add a server where both you and the bot are, and you (preferably) have admin permissions. Normally, you do not pass this kwarg. However, if you do not specify this, the slash commands will take up to an hour to show up in all the guilds the bot is in. When you restrict the commands to a few guilds, you can instantly see the commands. You can also choose to make lone commands restricted to a few guilds, but we will learn that later.

```py
@bot.event
async def on_ready():
    print(f"{bot.user} is ready and online!")
```

We use the [`event`](https://docs.pycord.dev/en/master/api.html#discord.Bot.event) decorator and  [`on_ready`](https://docs.pycord.dev/en/master/api.html#discord.on_ready) to define a function that will be called when the bot is ready. This is automatically called when the bot is ready to be used.

```py
@bot.slash_command(name = "hello", description = "Say hello to the bot")
async def say_hello(ctx):
    await ctx.send("Hey!")
```

Here, we use the [`slash_command`](https://docs.pycord.dev/en/master/api.html#discord.Bot.slash_command) decorator to define a slash command. We specify the `name` and `description` arguments. If not specified, the name of the Slash Command becomes the name of the function. The description will remain empty.

Finally, we run the bot using the token we specified in our `.env` file.

Now, you are done with creating your first bot. This is the basic structure of a bot. What else can you do? The sky is the limit! Pycord will not limit your imagination. The better you know Python, the more you can do.

## FAQ

### How do I make prefixed commands?

You can read [this amazing page that doesn't exist](../Extensions/Commands/index.md) and idk how it is gonna be linked but it should (hopefully) be there by the time you read this page.

<style>
    .blurplebutton{
display:inline-block;
padding:0.46em 1.6em;
margin:0 0.2em 0.2em 0;
border-radius: 3px;
	box-sizing: border-box;
	text-decoration:none;
	color:#ffffff;
	text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
	background-color:#5865F2;
	text-align:center;
	transition: all 0.15s;
	}
	.blurplebutton:hover{
	text-shadow: 0 0 2em rgba(255,255,255,1);
	color:#FFFFFF;
	border-color:#FFFFFF;
	}
	@media all and (max-width:30em){
	 .blurplebutton{
display:block;
margin:0.4em auto;
}
} 

.greybutton{
	display:inline-block;
	padding:0.46em 1.6em;
	margin:0 0.2em 0.2em 0;
	border-radius: 3%;
		box-sizing: border-box;
		text-decoration:none;
		color:#ffffff;
		text-shadow: 0 0.04em 0.04em rgba(0,0,0,0.35);
		background-color:grey;
		text-align:center;
		transition: all 0.15s;
		}
		.blurplebutton:hover{
		text-shadow: 0 0 2em rgba(255,255,255,1);
		color:#FFFFFF;
		border-color:#FFFFFF;
		}
		@media all and (max-width:30em){
		 .blurplebutton{
	display:block;
	margin:0.4em auto;
	}
	} 
</style>