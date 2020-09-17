# Creeper Titan Addon

Wanted to learn how to what the current state of Bedrock Addons is. This explores creating resource and behavior packs that:
- Create a custom entity
- Use client/server scripts, custom events & logging
- Use mcfunctions

This uses hardcoded paths but is what I use to copy my changes to minecraft:

```sh
./build.ps1
```

There is a javascript utility for scaling models that can be ran via node. However, it is completely useless because `minecraft:scale` component exists.

## Scripts

Client side scripts are not set to run since they will not run on consoles. To enable client side scripting add the following module to `behavior/manifest.json`:

```json
{
  "description": "Client scripts module",
  "type": "client_data",
  "uuid": "473fbb61-aa52-48f3-b638-8c1314979c33",
  "version": [0, 0, 1]
}
```

## Resources

The [Vanilla Resource Pack](https://aka.ms/resourcepacktemplate) has up to date HTML documentation, including topics that may not yet be hosted on the wiki such as Items or Feeatures.

Current Release Documentation:
- [Add-On Documentation](https://minecraft.gamepedia.com/Bedrock_Edition_add-on_documentation)
- [Animation](https://minecraft.gamepedia.com/Bedrock_Edition_animation_documentation)
- [Biomes](https://minecraft.gamepedia.com/Bedrock_Edition_biomes_documentation)
- [Blocks](https://minecraft.gamepedia.com/Bedrock_Edition_blocks_documentation)
- [Entity Components](https://minecraft.gamepedia.com/Bedrock_Edition_entity_components_documentation)
- [Entity Events](https://minecraft.gamepedia.com/Bedrock_Edition_entity_events_documentation)
- [Molang](https://minecraft.gamepedia.com/Bedrock_Edition_MoLang_documentation)
- [Particle](https://minecraft.gamepedia.com/Bedrock_Edition_particle_documentation)
- [Recipe](https://minecraft.gamepedia.com/Bedrock_Edition_recipe_documentation)
- [Schemas](https://minecraft.gamepedia.com/Bedrock_Edition_schemas_documentation)
- [Scripting](https://minecraft.gamepedia.com/Bedrock_Edition_scripting_documentation)
- [UI](https://minecraft.gamepedia.com/Bedrock_Edition_UI_documentation)


Additional Information:
- [Add-On Overview](https://minecraft.gamepedia.com/Add-on)
- [Command Block](https://minecraft.gamepedia.com/Command_Block)
- [Spawn Event](https://minecraft.gamepedia.com/Spawn_event)
- [Loot Tables](https://minecraft.gamepedia.com/Bedrock_Edition_function/loot_tables/trade_tables_documentation)
- [Data Pack](https://minecraft.gamepedia.com/Data_Pack)
- [Commands](https://minecraft.gamepedia.com/Commands)
- [Function (Bedrock Edition)](https://minecraft.gamepedia.com/Function_(Bedrock_Edition))

## License

- MIT, see [LICENSE for more info.](/LICENSE)
