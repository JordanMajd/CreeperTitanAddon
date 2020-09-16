# Creeper Titan Addon

Wanted to learn how to what the current state of Bedrock Addons is. This pack explores creating resource and behavior packs that:
- Create a custom entity 
- Use client/server scripts, custom events & logging
- Use mcfunctions

This uses hardcoded paths but is what I use to copy my changes to minecraft:

```sh
./build.ps1
```

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

## License

- MIT, see [LICENSE for more info.](/LICENSE)
