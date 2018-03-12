const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 28;
const chratis_talked_users = new Set();
const button_cooldown_time = 60;
const button_talked_users = new Set();

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
  if (message.content === 'p.test') {
    let repchannel = message.guild.channels.find(`name`, "bugs-glitches");
    if(!repchannel) return message.channel.send("I can't find **#bugs-glitches**! Please create one then type `p.test`.");
    message.channel.send("```Checkpoint 1: Successfully added #bugs-glitches channel```")
    message.channel.send("**ALL SYSTEMS OPERATIONAL!**")
  }
  if (message.content === 'p.report') {
    let repchannel = message.guild.channels.find(`name`, "bugs-glitches");
    if(!repchannel) return message.channel.send("Bot is improperly set up! Please type `p.test`.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    repchannel.send(`**REPORT:**\n\n\tUser: <@${message.author.id}>\n\n\tBug: ${sayMessage}`)
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
