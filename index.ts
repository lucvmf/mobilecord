export function status(device = "android") {
  try {
    const { DefaultWebSocketManagerOptions } = require("@discordjs/ws");
    if (
      DefaultWebSocketManagerOptions &&
      DefaultWebSocketManagerOptions.identifyProperties
    ) {
      if (device === "android") {
        DefaultWebSocketManagerOptions.identifyProperties.browser =
          "Discord Android";
        DefaultWebSocketManagerOptions.identifyProperties.device =
          "Discord Android";
        DefaultWebSocketManagerOptions.identifyProperties.os = "android";
      } else if (device === "ios") {
        DefaultWebSocketManagerOptions.identifyProperties.browser =
          "Discord iOS";
        DefaultWebSocketManagerOptions.identifyProperties.device =
          "Discord iOS";
        DefaultWebSocketManagerOptions.identifyProperties.os = "ios";
      }
    }
  } catch (err) {
    console.error(err);
  }
}
