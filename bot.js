const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on("guildMemberAdd", member => {
  let guild = member.guild;
  member.send(`Welcome ${member.user} to TheRedGuild!!`)
});

function coinFlip() {
  return (Math.floor(Math.random() * 2) == 0) ? 'heads!' : 'tails!';
};

function rps(){
  var janken = ['rock', 'paper', 'scissors']
  return janken[Math.floor(Math.random() * 3)]
}

function msgLost(){
    msg.reply("You Lose Sir");
}

 
client.on('message', msg => {
  switch(msg.content.toLowerCase()){
  // !ping
  case 'ping':
	msg.reply('Pong');
  break;
  //roll dice
  case 'roll':
	msg.reply('Your roll was ' + Math.floor((Math.random() * 100) + 1));
  break;
	//flip coin
  case 'flip':
	msg.reply('You got ' + coinFlip());
  break;
	//Greeting
  case 'hi squire':
	msg.reply('Hello sir knight of TheRedGuild!');
	break;
	//lil joke
  case 'poop':
	msg.reply('Ew sir knight');
  break;
  
  case 'janken rock':
  var answer = rps()  
  msg.reply(answer);
	if (answer === 'paper'){
	  setTimeout(msgLost(), 10000)
	}
	else if(answer === 'rock'){
	  msg.reply('It\'s a draw sir!')
	}
	else{
	  msg.reply('You win sir!')
	}
  break;
  
  case 'janken paper':
  var answer = rps()
  msg.reply(answer);
	if (answer === 'scissors'){
	  (msg.reply('You lose sir'));
	}
	else if(answer === 'paper'){
	  msg.reply('It\s a draw sir!')
	}
	else{
	  msg.reply('You win sir!')
	}
	break;
  case 'janken scissors':
  var answer = rps()
  msg.reply(answer);
	if (answer === 'paper'){
	  msg.reply('You lose sir')
	  }
	  else if(answer === 'rock'){
		msg.reply('It\s a draw sir!')
	  }
	  else{
		msg.reply('You win sir!')
	  }
	  break;

}
  

});





client.login(process.env.token);
