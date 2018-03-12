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
    return message.author.send("**Mainframe:**\n\t`report` lets you report a glitch you find in BTDX.\n\t`test` tests if the bot is properly set up. *(admin only)*\n\n**Fun:**\n\t`party` gives the bot a reason to party.\n\t`8ball` ask 8ball a question.\n\t`map` generates a random BTDX map.\n\n\t`say` make the bot say something!\n\n\n**Type `p.help <command>` to get more command info and how to use.**"); 
  }
  if (message.content === 'p.help report') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__REPORT COMMAND__**:\n\n\tInfo: Use this command to report glitches in BTDX.\n\n\tUse: `p.report <arguments>`\n\n\tExample: `p.report I can put the sub on land!`"); 
  }
  if (message.content === 'p.help test') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__TEST COMMAND__**:\n\n\tInfo: helps set up all channels needed on the server.\n\n\tUse: `p.test`\n\n\tExample: `p.test`"); 
  }
  if (message.content === 'p.help party') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__PARTY COMMAND__**:\n\n\tInfo: add in the reason of why I should party.\n\n\tUse: `p.party <arguments>`\n\n\tExample: `p.party I get free dinner`"); 
  }
  if (message.content === 'p.help 8ball') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__8BALL COMMAND__**:\n\n\tInfo: Replies to a question.\n\n\tUse: `p.8ball <argument in question form>`\n\n\tExample: `p.8ball Am I the fairest of them all?`"); 
  }
  if (message.content === 'p.help map') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__MAP COMMAND__**:\n\n\tInfo: generates a random BTDX map.\n\n\tUse: `p.map`\n\n\tExample: `p.map`"); 
  }
  if (message.content === 'p.help say') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__SAY COMMAND__**\n\n\tInfo: make the bot say something!\n\n\tUse: `p.say <arguments>`\n\n\tExample: `p.say I own you!`"); 
  }
  if (message.content === 'p.help ') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send(""); 
  }
  if (message.content === 'p.8ball') {
    message.channel.send("Please provide arguments. You can type `p.help 8ball` for more info!")
  }
  if (message.content === 'p.party') {
    message.channel.send("Please provide arguments. You can type `p.help party` for more info!")
  }
  if (message.content === 'p.say') {
    message.channel.send("Please provide arguments. You can type `p.help say` for more info!")
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
  if (message.content.startsWith('p.say ')) {
    const sendMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sendMessage);
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
