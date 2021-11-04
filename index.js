const Discord = require('discord.js');
const client = new Discord.Client();
const os = require('os');
const fs = require('fs');
const {prefix , token} = require('./setting,command/setting.json');


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('j 도움말', { type: '' })
  });
  
  client.on('message', message => {
    if(message.author.bot) return;
    if(message.content == "ping"){
      message.channel.send("pong")
    }
});
  
client.login(token);
