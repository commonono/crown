
const { Client, Discord } = require('discord.js');
const { registerCommands, registerEvents } = require('./utils/registry');
const config = require('../slappey.json');
const client = new Client();


client.once("ready", () => {
  console.log("CROWN BOT HAS LOADED");
});

client.on('message', (message) => {
  if (message.content.includes('-afk')) {
   message.member
    .setNickname(`${message.author} [AFK]`)
    client.channels.cache.get(`791751548828516362`).send(`${message.author.username} [✅]`)
  }
  if (message.content.includes('-safk')) {
   message.member
    .setNickname('')
    client.channels.cache.get(`791751548828516362`).send(`${message.author} [❌]`)
  }
 });

//BAN SCRIPT//
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .kick({
            reason: 'Crown bot slipped :(',
          })
          .then(() => {
            message.channel.send(`whoops, Crown Bot slipped and.. FLY KICKED THIS ROOT =>${user.tag} OUT OF THE SERVER >:D`);
          })
          .catch(err => {
            message.channel.send('I was unable to kick the member');
            console.error(err);
          });
      } else {
        message.channel.send("That spastic isnt in this server, i think your the spastic");
      }
    } else {
      message.channel.send("You didn't mention a spastic to kick");
    }
  }
});
//BAN SCRIPT//





















//BAN SCRIPT//
client.on('message', message => {
  if (!message.guild) return;

  if (message.content.startsWith('-ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.members.resolve(user);
      if (member) {
        member
          .ban({
            reason: 'Crown bot slipped :(',
          })
          .then(() => {
            message.channel.send(`whoops, Crown Bot slipped and.. FLY KICKED THIS ROOT =>${user.tag} OUT OF THE SERVER >:D`);
          })
          .catch(err => {
            message.channel.send('I was unable to ban the member');
            console.error(err);
          });
      } else {
        message.channel.send("That user isn't in this guild!");
      }
    } else {
      message.channel.send("You didn't mention the user to ban!");
    }
  }
});
//BAN SCRIPT//







//WELCOME MESSAGE AND AUTO ROLE//
client.on('guildMemberAdd', member => {
	const welcome_channel = client.channels.cache.get('791583959686709259');
	welcome_channel.send(`everyone welcome this spastic<@${member.id}>, be nice and let them know how special they are.`);
	let Role_Testrole = member.guild.roles.cache.find(r => r.name === "spastics");
	member.roles.add(Role_Testrole).catch(console.error);
 });
//WELCOME MESSAGE AND AUTO ROLE//
 









//CLEAR CHAT//
client.on('message', function(message) {
  if (message.content == "-clearchat") {
      if (message.member.hasPermission("MANAGE_MESSAGES")) {
         message.channel.messages.fetch()
             .then(function(list){
                  message.channel.bulkDelete(list);
              }, function(err){message.channel.send("nice try ya wee root")})                        
      }
  }
//CLEAR CHAT//







//IGNORE//
});
(async () => {
  client.commands = new Map();
  client.events = new Map();
  client.prefix = config.prefix;
  await registerCommands(client, '../commands');
  await registerEvents(client, '../events');
  await client.login(config.token);
})();
//IGNORE//
