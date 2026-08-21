---
title: Context Menus
description: Learn all about Context Menus (User Commands & Message Commands) and how to implement them into your Discord Bot with Pycord!
---

When you right-click a message, you may see an option called "Apps". Hover over it, and you can see
commands a bot can run with that message. These are called message commands.

When you right-click a user in the user list, you can once again see an option called "Apps".
Hover over it, and you can see commands a bot can run with that message. These are called user commands.

Together, these two are called Context Menus or Context Menu Commands. These commands work very much like normal commands, except they take a member or message.

!!! note

    A bot can have up to 5 global Context Menus of each type.

## User Commands

Creating a user command is very simple.

```python
@bot.user_command(
    name="Account Creation Date", guild_ids=[...]
)  # create a user command for the supplied guilds
async def account_creation_date(
    ctx, member: discord.Member
):  # user commands return the member
    await ctx.respond(f"{member.name}'s account was created on {member.created_at}")
```

```
# link with context-menus-account-creation.json
```

## Message Commands

```python
@bot.message_command(
    name="Get Message ID"
)  # creates a global message command. use guild_ids=[] to create guild-specific commands.
async def get_message_id(
    ctx, message: discord.Message
):  # message commands return the message
    await ctx.respond(f"Message ID: `{message.id}`")
```

```
# link with context-menus-get-message-id-user-msg.json
# link with context-menus-get-message-id-response.json
```

<br />

!!! info "Related Topics"

    - [Slash Commands](slash-commands.md)
    - [Interactions Index](../index.md)
