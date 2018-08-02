const Discord = require('discord.js');
const client = new Discord.Client();
var allowedUsers = [];
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guilmemberAdd' , member =>{
const channel = member.guild.defaultChannel;

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

if(command === "shekels"){
  var object = (prizes[Math.floor(Math.random()*prizes.length)])
  var shekels = Math.floor(Math.random()*99 +1 )
  message.channel.send(`You rolled ${shekels} shekels !`)

  if(shekels >= 49){
      allowedUsers.push(message.author.id);
  }
}

if(command === "buy"){
  if(!allowedUsers.includes(message.author.id)){
      return message.channel.send("You did not roll 49 or above so you cannot use this command.");
  }
  else{
      message.channel.send("here " + objectStore);
  };
};


client.login(process.env.token);
