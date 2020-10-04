const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = '!';
const fs = require('fs');
const ytdl = require('ytdl-core');




client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  
client.once('ready', () => {
    console.log('vittu toimii trueeee!')
});

client.on('message', async message => {
    if (!message.guild) return;
  
    if (message.content === '!1v9') {
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const dispatcher = connection.play('C:/Users/nooao/Desktop/yep/Armin van Buuren - Turn it Up (Hardstyle Remix) FREE DOWNLOAD.mp3');
        dispatcher.on()('finish', () => {
            console.log('Finished playing!');
            dispatcher.destroy();
        })
      } else {
        message.reply('et ole vittu kanavalla istu alas fädäri');
      }
    } else if (message.content === '!jimi_irl') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('C:/Users/nooao/Desktop/yep/Mastermind.mp3');
          dispatcher.on()('finish', () => {
              console.log('Finished playing!');
              dispatcher.destroy();
          })
        } else {
          message.reply('et ole vittu kanavalla istu alas fädäri');
        }
      } else if (message.content === '!ratearl') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=lcg6wekmCRA', { filter: 'audioonly' }));
          dispatcher.on()('finish', () => {
              console.log('Finished playing!');
              dispatcher.destroy();
          })
        } else {
          message.reply('et ole vittu kanavalla istu alas fädäri');
        }
      } else if (message.content === '!kiitti') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play('C:/Users/nooao/Desktop/yep/kiitti_looteist_.mp3');
          dispatcher.on()('finish', () => {
              console.log('Finished playing!');
              dispatcher.destroy();
          })
        } else {
          message.reply('et ole vittu kanavalla istu alas fädäri');
        }
      } else if (message.content === '!21') {
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=7_5ZFyMwURk', { filter: 'audioonly' }));
          dispatcher.on()('finish', () => {
              console.log('Finished playing!');
              dispatcher.destroy();
          })
        } else {
          message.reply('et ole vittu kanavalla istu alas fädäri');
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
}});
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
 
    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);

    } else if (command == 'tonttupallo'){
        client.commands.get('tonttupallo').execute(message, args);

    } else if (command == 'tonttufeedaa'){
        client.commands.get('tonttufeedaa').execute(message, args);

    } else if (command == 'doinb'){
        client.commands.get('doinb').execute(message, args);

    } else if (command == 'vaihtoehdot'){
        client.commands.get('vaihtoehdot').execute(message, args);
    
    } else if (command == 'a'){
        client.commands.get('a').execute(message, args);

    } else if (command == 'b'){
        client.commands.get('b').execute(message, args);
    
    } else if (command == 'c'){
        client.commands.get('c').execute(message, args);

    } else if (command == 'kentry'){
        client.commands.get('kentry').execute(message, args);

    } else if (command == 'stop'){
        client.destroy();

    } else if (command == 'tonttuhelp'){
        client.commands.get('tonttuhelp').execute(message, args);
    } else if (command == 'dece'){
        message.member.voice.channel.leave()

    } else if (command == 'truth'){
        client.commands.get('truth').execute(message, args);
    } else if (command == 'github'){
        message.reply('https://github.com/SteelForce/yeptonttu')
    }    
});
client.login(config.token);
//temp   'C:/Users/nooao/Desktop/yep/Armin van Buuren - Turn it Up (Hardstyle Remix) FREE DOWNLOAD.mp3'
//vittu mä olen feikker
//kapp