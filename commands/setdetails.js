/*CMD
  command: /setdetails
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
CMD*/

Bot.setProperty("admin_chat", "YOUR_TELEGRAM_ID", "string")
Bot.setProperty("num", 0, "integer")
Bot.setProperty("credentials", "YOUR_API_KEY_OR_SECRET", "string")
Bot.setProperty("admin", "YOUR_TELEGRAM_USERNAME", "string")

Bot.sendMessage("✅ Details saved successfully.")
