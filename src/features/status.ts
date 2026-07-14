import { createRequire } from "node:module";

const load = typeof require === "undefined" ? createRequire(import.meta.url) : require;

export function status(device = "android") {
  try {
    const { DefaultWebSocketManagerOptions } = load("@discordjs/ws");
    const properties = DefaultWebSocketManagerOptions?.identifyProperties;

    if (device === "android") {
      properties.browser = "Discord Android";
      properties.device = "Discord Android";
      properties.os = "android";
    } else if (device === "ios") {
      properties.browser = "Discord iOS";
      properties.device = "Discord iOS";
      properties.os = "ios";
    } else if (device.toLowerCase() === "vr") {
      properties.browser = "Discord VR";
      properties.device = "Discord VR";
      properties.os = "vr";
    }
  } catch (error) {
    console.error(error);
  }
}
