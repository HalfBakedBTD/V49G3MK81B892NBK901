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
  if (message.content === 'p.help') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**Mainframe:**\n\t`report` lets you report a glitch you find in BTDX.\n\t`test` tests if the bot is properly set up. *(admin only)*\n\n**Fun:**\n\t`party` gives the bot a reason to party.\n\t`8ball` ask 8ball a question.\n\n\n**Type `p.help <command>` to get more command info and how to use.**"); 
  }
  if (message.content === 'p.help report') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__REPORT COMMAND__**:\n\tInfo: Use this command to report glitches in BTDX.\n\tUse: `p.report <arguments>`\n\tExample: `p.report I can put the sub on land!`"); 
  }
  if (message.content === 'p.help test') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__TEST COMMAND__**:\n\tInfo: helps set up all channels needed on the server.\n\tUse: `p.test`\n\tExample: `p.test`"); 
  }
  if (message.content === 'p.help party') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__PARTY COMMAND__**:\n\tInfo: add in the test of why the bot should party.\n\tUse: `p.party <arguments>`\n\tExample: `p.party I get free dinner`"); 
  }
  if (message.content === 'p.help 8ball') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__8BALL COMMAND__**:\n\tInfo: Replies to a question.\n\tUse: `p.8ball <argument in question form>`\n\tExample: `p.8ball Am I the fairest of them all?`"); 
  }
  if (message.content === 'p.help ') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send(""); 
  }
  if (message.content === 'p.test') {
    let repchannel = message.guild.channels.find(`name`, "bugs-glitches");
    if(!repchannel) return message.channel.send("I can't find **#bugs-glitches**! Please create one then type `p.test`.");
    message.channel.send("```Checkpoint 1: Successfully added #bugs-glitches channel```")
    message.channel.send("**ALL SYSTEMS OPERATIONAL!**")
  }
  if (message.content.startsWith('p.report')) {
    let repchannel = message.guild.channels.find(`name`, "bugs-glitches");
    if(!repchannel) return message.channel.send("Bot is improperly set up! Please type `p.test`.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    repchannel.send(`**REPORT:**\n\n\tUser: <@${message.author.id}>\n\n\tBug: ${sayMessage}`)
  }
  if (message.content.startsWith('p.party ')) {
    const sayMessage = args.join(" ");
    message.channel.send(`:tada: Party 'cause ${sayMessage}!`);
  }
  if (message.content.startsWith('p.8ball ')) {
    if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
    let replies = ["Yes", "No", "I don't know", "Ask again later!", "Nope", "I am not sure!", "Pls No", "You tell me", "IDK, SORRY.", "I ASKED GEORGE WASHINGTON FROM THE DEAD! HE SAID YES!"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.join(" ");

    message.channel.send(`**__${message.author.username}__**:\n\t**Question:**\n\t\t${question}\n\n\t**Answer:**\n\t\t${replies[result]}`);
    message.delete();
  }
  if (message.content === 'p.map') {
    let maps = ["Monkey Meadows", "Bloon Oasis", "Shade Woods", "Bloon Oasis", "Portal Lab", "Swamp Spirals", "Minecarts", "Monkey Fort", "Crimson Creek", "Conveyor Belts", "Monkey Town Docks", "Conveyor Belts", "Space Portals", "The Depths", "Sun Dial", "Xtreme Park", "Prison Break"]
    let choice = Math.floor((Math.random() * maps.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${maps[choice]}!`)
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
