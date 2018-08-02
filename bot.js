const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd' , member =>{
const channel = member.guild.defaultchannel;

channel.send('Welcome to TheRedGuild, ${member}');
});


function coinFlip() {
    return (Math.floor(Math.random() * 2) == 0) ? 'heads!' : 'tails!';
}; 
 
client.on('message', msg => {
  switch(msg.content.toLowerCase()){
  // !ping
  case 'ping':
    msg.reply('Pong');
  break;

  case 'roll':
    msg.reply('Your roll was ' + Math.floor((Math.random() * 100) + 1));
  break;

  case 'flip':
    msg.reply('You got ' + coinFlip());
  break;

  case 'hi squire':
    msg.reply('Hello sir knight of TheRedGuild!');
	break;
  
  case 'poop':
	  msg.reply('Ew sir knight');
  break;

}
});




client.login(process.env.token);
