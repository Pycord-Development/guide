# Sharding
Sharding in Pycord is straight forward and simplistic,

:::tip When to Shard?
It is recommended you only shard once your bot has
2000 or more servers since anything under is just gonna 
make it useless to shard
:::

just replace your `discord.Client` or `discord.Bot` or `commands.Bot` 
with `discord.AutoShardedClient` or `discord.AutoShardedBot` or `commands.AutoShardedBot`

If you want to specify a specific amount of shards to use 
just add the `shards=` and the amount of shards you want as a parameter.