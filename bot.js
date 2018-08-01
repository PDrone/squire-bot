const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  switch(msg.content){
  // !ping
  case 'ping':
    msg.reply('Pong')
  break;

  case 'roll':
    msg.reply('Your roll was' +Math.floor((Math.random() * 100) + 1))

  
 
}
});


client.login(process.env.token);
