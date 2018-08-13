var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
	
	var d = new Date();
	
	var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
			// !session
			case 'session':
				switch(days[d.getDay()]){
			 case "Monday":
				d.setDate(d.getDate() + 6)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			case "Tuesday":
				d.setDate(d.getDate() + 5)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			case "Wednesday":
				d.setDate(d.getDate() + 4)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			case "Thusrday":
				d.setDate(d.getDate() + 3)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			case "Friday":
				d.setDate(d.getDate() + 2)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			case "Saturday":
				d.setDate(d.getDate() + 1)
				bot.sendMessage({
					to: channelID,
					message: 'The next session is ' + d.toDateString() + ' at 6:00pm CST'
				})
			break;
			default:
				bot.sendMessage({
					to: channelID,
					message: 'The next session is today!'
				})
			break;
		 }
		 break;
         }
     }
	 
	 var Strahd = [
    "You called? ;D",
	"You're just jealous",
	"Error: 404",
	"I am FANTASTIC",
	"I know you love to hate me", 
	"Bet you thought you'd seen the last of me.... SURPRISE BITCH!",
	"Don't hate me because I'm beautiful",
	"What direction are we going?  East?  West?  NO.  We go... WeEEeEest!",
	"O_o",
	""
	];
	 
	 var middle_finger = require("discord-emoji").people.middle_finger;
	 
	 if (message.includes('test')){
		 bot.sendMessage({
			 to: channelID,
			 message: 'succes'
		 })
	 }
	 
	 var i = Strahd.length - 1
	 
	 if (message.includes('Strahd') ||
	 message.includes('strahd') ||
	 message.includes(':coolbert:') ||
	 message.includes('fuck') ||
	 message.includes(middle_finger)){
		 var x = Math.floor((Math.random() * i));
		 
		 bot.sendMessage({
			 to: channelID,
			 message: Strahd[x]
		 })
	 }
});