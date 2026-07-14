export async function typing<T>(
  channel: { sendTyping(): Promise<void> },
  callback: () => Promise<T>,
): Promise<T> {
  await channel.sendTyping();

  const timer = setInterval(() => {
    channel.sendTyping().catch(() => clearInterval(timer));
  }, 8000);

  try {
    return await callback();
  } finally {
    clearInterval(timer);
  }
}
