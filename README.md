# mobilecord 2.0.1

Discord.js device status and typing utilities for Node.js, Bun, TypeScript, and JavaScript.

## Installation

```bash
bun add mobilecord

npm install mobilecord
```

## Device status

Call `status()` before logging in the Discord client.

```js
import { status } from "mobilecord";

status("vr");
```

Supported devices are `android`, `ios`, and `vr`. Android is used by default.

## Typing

The typing indicator stays active until the callback and reply finish.

```js
import { typing } from "mobilecord";

await typing(message.channel, async () => {
  const response = await generateReply();
  await message.reply(response);
});
```

## Contact

- Discord: `lucvxc`
- [June bot](https://june.rocks) uses this library.
