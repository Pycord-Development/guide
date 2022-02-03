# Safe Token practices
Your bot token is one of the most important parts of your code!
it tells discord your bot's identity, and more.

so getting yourself token grabbed wouldn't be good, here we cover some good practices to not get token grabbed.

## Using dotenv's
The [python-dotenv](https://pypi.org/project/python-dotenv/) package is a package made for recognizing `.env` files, 
this section will require you install this module via pip or your favorite package manager.

firstly you will want to import and load dotenv, like so:
```py
from dotenv import load_dotenv

load_dotenv()
```
now you will want to make a `.env` file with your token, remember **DO NOT** share this file with anyone else 
or your bot token could get into the wrong hands!
```env
token=mybottoken
```
and finally when starting your bot use the ``os`` package to get your token.
```py
import os
...
bot.run(os.getenv("token"))
```
