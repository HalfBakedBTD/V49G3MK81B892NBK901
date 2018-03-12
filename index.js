const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 28;
const chratis_talked_users = new Set();

const button_cooldown_time = 60;
const button_talked_users = new Set();

function announce(bot, message) {
   let adsbutchannel = message.guild.channels.find(`name`, "ad-button");
   if(!adsbutchannel) return message.channel.send("The bot is not properly set up for this command! Please type `^test`.");
   if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("No. Why would I do this for you? I have a **Admin only** policy.");
   message.channel.createInvite()
       .then(invite => {
       bot.channels.filter(c => c.name === 'ad-button').forEach(channel => channel.send(`:red_circle: **${message.guild.name}** PRESSED THE AD BUTTON! JOIN: **https://www.discord.gg/${invite.code}**\nID: ${message.author.id}`));
       });
 setTimeout(() => announce(bot, message), 30*60000);
}

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  if (message.content === 'p.ping') {
    message.channel.send(`\`\`\`PartyPong! I am online!\`\`\``)
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
