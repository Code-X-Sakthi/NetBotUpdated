/*CMD
  command: get3
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

// Retrieve the resource
// Get a reference to a user resource

var res = Bot.getProperty("credentials");

var credentials = Bot.getProperty("credentials");
    // Send the credentials to the user
    Bot.sendMessage("🛒 Order Successfully Completed..\n📧 Account Details:-\n📧 Email :- " + credentials.email + "\n🔐 Password :- " + credentials.password + "🎊Thanks For Using Our Bot🎊\n~Send Screenshot To @Vikram_Kalaigan_Guna_IndianBot\n\nCheck status here: @Vikram_Kalaigan_Guna_Indian");

    // Remove the used credentials from the resource
    res.remove(0);
    
Api.sendMessage({chat_id: 5517793030, text: "*🆕 New Purchased crunchy Account*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* crunchy Account\n\n*💵 Amount:* 3 *Points *",
parse_mode: "Markdown"})
var message_id = request.message.message_id
var but = [
  [
    { text: "❤‍🔥 Bot", url: "t.me/NovaTestingNo2_Bot"}]]
    
Api.sendMessage({
  message_id: message_id, 
  chat_id: "@Vikram_Kalaigan_Guna_Indian",
  text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Crunchyroll Account\n\n*💵 Amount:* 2 *Points*\n\n*🫧 Status:* Account Paid ✅",
  parse_mode: "Markdown",
  })

