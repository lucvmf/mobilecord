# mobilecord v2 (UPDATED JUL. 14th 2026)

Set Discord bot mobile status for Node.js, Bun, TypeScript, and JavaScript.

## Installation

```bash
bun add mobilecord

npm install mobilecord
```

## Example

```ts
import { status } from "mobilecord";

status();
```

Keep the typing indicator active while waiting for an async task:

```js
import { typing } from "mobilecord";

const reply = await typing(message.channel, () => generateReply());
await message.reply(reply);
```

> **Note:**  
> You can choose the device type.  
>
> - `status("ios")` sets the status to iOS  
> - `status("android")` sets the status to Android  
> - `status("vr")` sets the status to vr   
> _This will NOT change the difference or look if you use teh ios or the android option, but the vr one will provide a different icon._

# NEW FEATURE

## typing

```ts
import { typing } from "mobilecord";

const reply = await typing(message.channel, () => generateReply());
await message.reply(reply);
```

## Contact

> discord: lucvxc
> 
> june bot: https://june.rocks (uses this exact library)
