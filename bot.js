const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzkxNzY3MjI4ODY0NjU5NDc2.X-T8sQ.Zf6TRhvmbWrhVgFiJ_bOGCBa-Z4);