/*CMD
  command: pp1
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


  var message_id = request.message.message_id
  var chat_id = "@Vikram_Kalaigan_Guna_Indian"
  Api.editMessageText({
    message_id: message_id,
    text:
    "*🆕 New Account Purchased*\n\n*👤 User:* @"+user.username+ "\n\n*🆔 Account:* `"+user.telegramid+"`\n\n*🛒Bought:* Crunchyroll Account\n\n*💵 Amount:* 3 *Points*\n\n*🫧 Status:* Order Cancelled ❌ \n\n~Contact @Vikram_Kalaigan_Guna_IndianBot",
  parse_mode: "Markdown",
  disable_web_page_preview: true
})

