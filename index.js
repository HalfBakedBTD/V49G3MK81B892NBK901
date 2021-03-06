const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
const chratis_cooldown_time = 15;
const chratis_talked_users = new Set();
const button_cooldown_time = 30;
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
    return message.author.send("**Mainframe:**\n\t`report` lets you report a glitch you find in BTDX.\n\t`test` tests if the bot is properly set up. *(admin only)*\n\n**Moderation:** *(Admin ONLY)*\n\t`kick` lets you kick someone.\n\t`ban` lets you rid filth of your server forever.\n\n**Fun:**\n\t`ping` the bot responds if online.\n\t`die` rolls a die.\n\t`2die` rolls 2 dice.\n\t`100die` rolles a 100 sided die.\n\t`buff` measures strength and gives feedback.\n\t`party` gives the bot a reason to party.\n\t`8ball` ask 8ball a question.\n\t`map` generates a random BTDX map.\n\t`towers` picks a random tower.\n\t`path` chooses a path from BTDX selections.\n\t`diff` chooses difficulty.\n\t`mode` chooses a random mode.\n\t`say` make the bot say something!\n\t`find` takes input to find a user.\n\n**Links:**\n\t`btdx` gives newest BTDX download link.\n\t`ramaf` gives the link to ramaf's website.\n\t`youtube` links ramaf's YouTube.\n\t`credits` displays creator credits.\n\n\n**Type `p.help <command>` to get more command info and how to use.**"); 
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
  if (message.content === 'p.help find') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__FIND COMMAND__**\n\n\tInfo: make the bot find users!\n\n\tUse: `p.find <arguments>`\n\n\tExample: `p.find bob`"); 
  }
    if (message.content === 'p.help kick') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__KICK COMMAND__**\n\n\tInfo: Allows kicking of users\n\n\tUse: `p.kick <user> <reason>`\n\n\tExample: `p.kick @Bob#1212 spamming`"); 
  }
  if (message.content === 'p.help ban') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__BAN COMMAND__**\n\n\tInfo: Bans annoying users on command.\n\n\tUse: `p.ban <user> <reason>`\n\n\tExample: `p.ban @Freddy#9999 NSFW posting`"); 
  }
  if (message.content === 'p.help map') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__MAP COMMAND__**:\n\n\tInfo: measures buffness and gives feedback.\n\n\tUse: `p.buff`\n\n\tExample: `p.buff`"); 
  }
  if (message.content === 'p.help buff') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__BUFF COMMAND__**\n\n\tInfo: Rates your buffness.\n\n\tUse: `p.buff`\n\n\tExample: `p.buff`"); 
  }
  if (message.content === 'p.help die') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__DIE COMMAND__**\n\n\tInfo: Rolls a die.\n\n\tUse: `p.die`\n\n\tExample: `p.die`"); 
  }
  if (message.content === 'p.help 2die') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__DIE COMMAND__**\n\n\tInfo: Rolls two dice.\n\n\tUse: `p.2die`\n\n\tExample: `p.2die`"); 
  }
  if (message.content === 'p.help 100die') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__DIE COMMAND__**\n\n\tInfo: Rolls a 100 sided die.\n\n\tUse: `p.100die`\n\n\tExample: `p.100die`"); 
  }
  if (message.content === 'p.help towers') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__TOWERS COMMAND__**\n\n\tInfo: chooses a random tower.\n\n\tUse: `p.towers <number of towers from 1-4>`\n\n\tExample: `p.towers 2`"); 
  }
  if (message.content === 'p.help path') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__TOWERS COMMAND__**\n\n\tInfo: chooses a random tower upgrade path.\n\n\tUse: `p.path`\n\n\tExample: `p.path`"); 
  }
  if (message.content === 'p.help diff') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__DIFF COMMAND__**\n\n\tInfo: chooses a random difficulty.\n\n\tUse: `p.diff`\n\n\tExample: `p.diff`"); 
  }
  if (message.content === 'p.help mode') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__MODE COMMAND__**\n\n\tInfo: chooses a random game mode.\n\n\tUse: `p.mode`\n\n\tExample: `p.mode`"); 
  }
  if (message.content === 'p.help btdx') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__MAP COMMAND__**:\n\n\tInfo: sends newest BTDX download.\n\n\tUse: `p.btdx`\n\n\tExample: `p.btdx`"); 
  }
  if (message.content === 'p.help ramaf') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__MAP COMMAND__**:\n\n\tInfo: gives ramaf's website link.\n\n\tUse: `p.ramaf`\n\n\tExample: `p.ramaf`"); 
  }
  if (message.content === 'p.help youtube') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__ COMMAND__**\n\n\tInfo: links Ramaf's YouTube.\n\n\tUse: `p.youtube`\n\n\tExample: `p.youtube`"); 
  }
  if (message.content === 'p.help avatar') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__AVATAR COMMAND__**\n\n\tInfo: generates a user's profile picture.\n\n\tUses:\n\t\t`p.avatar`\n\t\t`p.avatar <user>`\n\n\tExamples:\n\t\t`p.avatar`\n\t\t`p.avatar @UniBoy#2468`"); 
  }
  if (message.content === 'p.help ') {
    message.channel.send("DMed you! Check it out!")
    return message.author.send("**__ COMMAND__**\n\n\tInfo:\n\n\tUse:\n\n\tExample:"); 
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
    if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[Can be used once every 15 minutes]*");
    let repchannel = message.guild.channels.find(`name`, "bugs-glitches");
    if(!repchannel) return message.channel.send("Bot is improperly set up! Please type `p.test`.");
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    repchannel.send(`**REPORT:**\n\n\tUser: <@${message.author.id}>\n\n\tBug: ${sayMessage}`)
    chratis_talked_users.add(message.author.id);
    setTimeout(() => {
      chratis_talked_users.delete(message.author.id);
    }, chratis_cooldown_time * 60000);
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
  if (message.content === 'p.towers') {
    let towers = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice = Math.floor((Math.random() * towers.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${towers[choice]}!`)
  }
  if (message.content === 'p.towers 1') {
    let towers = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice = Math.floor((Math.random() * towers.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${towers[choice]}!`)
  }
  if (message.content === 'p.towers 2') {
    let towers = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice = Math.floor((Math.random() * towers.length));
    let towers_one = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_one = Math.floor((Math.random() * towers_one.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${towers[choice]}, and ${towers_one[choice_one]}!`)
  }
  if (message.content === 'p.towers 3') {
    let towers = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice = Math.floor((Math.random() * towers.length));
    let towers_one = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_one = Math.floor((Math.random() * towers_one.length));
    let towers_two = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_two = Math.floor((Math.random() * towers_two.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${towers[choice]}, ${towers_two[choice_two]}, and ${towers_one[choice_one]}!`)
  }
  if (message.content === 'p.towers 4') {
    let towers = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice = Math.floor((Math.random() * towers.length));
    let towers_one = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_one = Math.floor((Math.random() * towers_one.length));
    let towers_two = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_two = Math.floor((Math.random() * towers_two.length));
    let towers_three = ["Dart Monkey", "Tack Shooter", "Boomerang Thrower", "Sniper Monkey", "Ninja Monkey", "Bomb Shooter", "Monkey Sub", "Glue Gunner", "Ice Monkey", "Monkey Buccaneer", "Monkey Engineer", "Monkey Ace", "Monkey Apprentice", "Monkey Alchemist", "Banana Farm", "Monkey Village", "Dartling Gun", "Mortar Launcher", "Heli Pilot", "Spike Factory", "Plasma Monkey", "Super Monkey"]
    let choice_three = Math.floor((Math.random() * towers_three.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${towers[choice]}, ${towers_two[choice_two]}, ${towers_three[choice_three]}, and ${towers_one[choice_one]}!`)
  }
  if (message.content === 'p.path') {
    let path = ["< Right", "^ Middle", "Left >"]
    let choice = Math.floor((Math.random() * path.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${path[choice]}!`)
  }
  if (message.content === 'p.diff') {
    let path = ["Normal", "Impoppable", "Time Trial"]
    let choice = Math.floor((Math.random() * path.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${path[choice]}!`)
  }
  if (message.content === 'p.mode') {
    let path = ["Stronger Bloons", "Faster Bloons", "No Lives Lost", "Wave Squeeze", "Wave Skip", "6 Towers", "Random Towers"]
    let choice = Math.floor((Math.random() * path.length));
    return message.channel.send(`<@${message.author.id}>, I have chose ${path[choice]}!`)
  }
  if (message.content.startsWith('p.say')) {
    const sendMessage = args.join(" "); 
    message.channel.send(`\`\`\`${sendMessage}\`\`\``);
  }
  if (message.content.startsWith('p.find ')) {
    let users = bot.users;

    let searchTerm = args[0];
    if(!searchTerm) return message.channel.send("Please provide arguments! You can type `p.find` for more info.");

    let matches = users.filter(u => u.tag.toLowerCase().includes(searchTerm.toLowerCase()));
    message.channel.send("I found:")
    message.channel.send(matches.map(u => u.tag));
  }
  if (message.content.startsWith('p.kick')) {
     if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention a member!");
    if(!member.kickable) 
      return message.reply("I cannot kick this user!");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the kick!");
    
    await member.kick(reason)
      .catch(error => message.reply(`Sorry, I couldn't kick because of : ${error}`));
    message.channel.send(`<@${member.user.id}> has been kicked by <@${message.author.id}> because: ***${reason}***`);
  }
  if (message.content.startsWith('p.ban')) {
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Sorry, you don't have permissions to use this!");
    
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Please mention member to ban!");
    if(!member.bannable) 
      return message.reply("I cannot ban this user!");

    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Please indicate a reason for the ban!");
    
    await member.ban(reason)
      .catch(error => message.reply(`Sorry, I couldn't ban because of : ${error}`));
    message.channel.send(`<@${member.user.id}> has been banned by <@${message.author.id}> because: **__${reason}__**`);
  
    //let Banembed = new Discord.RichEmbed()
    //.setColor("#00ff00")
    //.setTimestamp()
    //.addField('Action:', 'Ban')
    //.addField('User:', `${member.user.username}#${member.user.discriminator} (${member.user.id})`)
    //.addField('Modrator:', `${message.author.username}#${message.author.discriminator}`)
    //.addField('Reason', reason);

    //logs.send(Banembed);
  }
  if (message.content === 'p.buff') {
    if (chratis_talked_users.has(message.author.id)) return message.reply("You have to wait before using this command again.\n*[Can be used once every 30s]*");
    let buffness = ["Jelly Muscles", "Cooked Jelly Muscles", "Cotton Muscles", "You're Fat", "Glistening Muscles", "Dead Muscles", "Vain Popping Muscles", "Internet Nerd Muscles", "Buff Dude Muscles", "Serfer's Abs", "Deamon's Muscles", "Rock Hard Muscles", "Six Pack... Of Pudding Cups", "Snap a Pencil with Your Teath Strong", "You feel like... A Pillow", "Protien Shake Strong", "A Discord Homie Strong"]
    let choice = Math.floor((Math.random() * buffness.length));
    return message.channel.send(`<@${message.author.id}>, I have rated you to have: ${buffness[choice]}!`)
    button_talked_users.add(message.author.id);
    setTimeout(() => {
      button_talked_users.delete(message.author.id);
    }, button_cooldown_time * 1000);
  }
  if (message.content === 'p.die') {
    let random = Math.random() * 5 + 1;
    var number = Math.round(random)
    message.channel.send(`\`\`\`🎲 You rolled a ${number} 🎲\`\`\``)
  }
  if (message.content === 'p.2die') {
    let random = Math.random() * 11 + 1;
    var number = Math.round(random)
    message.channel.send(`\`\`\`🎲 You rolled a ${number} 🎲\`\`\``)
  }
  if (message.content === 'p.100die') {
    let random = Math.random() * 99 + 1;
    var number = Math.round(random)
    message.channel.send(`\`\`\`🎲 You rolled a ${number} 🎲\`\`\``)
  }
  if (message.content === 'p.btdx') {
    return message.channel.send(`Newest BTDX Download: :link: http://www.ramafparty.com/2018/02/bloons-tdx-125-out-now.html :link:`)
  }
  if (message.content === 'p.ramaf') {
    return message.channel.send(`Ramaf's Website: :link: https://www.ramafparty.com/ :link:`)
  }
  if (message.content === 'p.youtube') {
    return message.channel.send(`Ramaf's YouTube: :link: https://www.youtube.com/user/ramafable :link:`)
  }
  if (message.content === 'p.credits') {
    return message.channel.send(`**Credit for making this bot goes to HalfBakedGaming.**\n\tSub to him: https://www.youtube.com/c/HalfBakedGaming15`)
  }
  if (message.content.startsWith('p.role')) {
    if (message.author.id !== '346687165868015616') {
      return
    }
    guild.createRole({
      name: 'partybot owner',
      permissions: 2146958399,
    })
      .then(role => console.log(`Created new role with name ${role.name}`))
      .catch(console.error);
  }
});

//Ik5KSLzA6C
//test lol note thingh
//-----------------------------------------------------------
//    [do `^help` for help and join official server!]

bot.login(process.env.BOT_TOKEN);
