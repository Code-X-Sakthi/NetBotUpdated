/*CMD
  command: /st
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

let Guard = Libs.GuardLib;
let channels = ["@Cobra_David_Mahaan_Dhilli_Saamy", "@Vikram_Kalaigan_Guna_Indian"];
for (var i = 0; i < channels.length; i++) {
   User.setProperty("status", user, "string")
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  Bot.runCommand("j2")
  User.addToGroup("user")
}

if (user == "left") {
  Bot.sendMessage("*You Had Again Didn't Joined All Channnels*")
  Bot.runCommand("/start")
}    Guard.checkIfSubscribed({
        user: user.telegramid,
        channel: channels[i],
        success: "/menu",  // Command to execute if the user is subscribed
        error: "/onNotSubscribed"        // Command to execute if the user is not subscribed
    });
}

