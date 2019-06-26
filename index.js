const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = 'NTc2NjM3NDE2MTI3OTg3NzIy.XNZZ5g.P4Hyuj2yxQvrcvJH4Oiglx3JuYA';

const PREFIX = 'a!';

bot.on('ready', () =>{
    console.log('this bot is online');
    bot.user.setGame('Azur Lane')
});
    

bot.on('message', message=>{
    if(message.content.startsWith('a!') == false) return
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case ('azuma'):
            message.reply('I am the Large Cruiser - Azuma, designed for night torpedo runs and supporting firepower. It is a pity that I was not sent into actual combat... I am specialized in night raids, but for torpedo runs itll be a little... ahahaha...')
        break;
        case 'depression':
            message.reply('Depresso Expresso')
            break;
        case 'login':
            message.reply('Let us begin todays work then? Be at ease, I will always be by your side~')
            break;
        case ('affinitylike'):
                message.reply('Commander, do you know? Being free of any worries, and being full of bliss and smiles is the cutest thing in this world. Everyone, and Commanders smiles, I wish to protect them forever...')
            break;
        case('Affinityfriendly'):
                message.reply('I wish to make good relations with the Sakura Empire, and everyone else in the docks~ Why not lets organize a gathering...? Let me prepare the drinks and snacks then~ hehe~')
            break;
        case('affinitylove'):
                message.reply('Is the Commander tired? Ara, please lie down and be at ease, let me clean your ears, or perhaps massage your shoulders for relaxation~')
            break;
        case 'acquisition':
            message.reply('Large Cruiser - Azuma, reporting in. Although I have a lackluster record of service, but I hope that Commander will rely on me a little~ I will do my best to protect the Commander~')
            break;
        case 'failed':
            message.reply('	Failed... how can I explain to the Commander...')
            break;
        case 'creator':
            message.reply('Kwanlitzia is the one who created me for discord!')
            break;
        case 'mvp':
            message.reply('This is the rewards of everyones hard work, I am just one part of the whole~')
            break;
        case 'ohayo':
            message.reply('Welcome back~ Commander, have some tea, have some snacks and rest a while?');
            break;
        case 'love':
            if(!message.member.roles.find(r => r.name === "Atago Fan")) return message.channel.send('You have no permission to say that!')
            .then(msg => msg.delete(1000));
            message.reply('Let me show you some love')
        break;
        case 'bye':
            message.reply('Goodbye!')
            break;
        case 'hentai':
            message.reply('Hentai is allow but only in the channel #NSFW');
            break;
        case 'sexy':
            message.reply('Thanks Commander');
            break;
        case 'wtf':
            message.reply('Sumimasen?');
            break;
        case 'lewd':
            message.reply('Ah, You are very dirty. I like it!');
            break;
        case 'senpai':
            message.reply('No idea how to respond to that.');
            break;     
        case 'hug':
            message.reply('let me give you a big hug');
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version 1.4.3');
            }else{
                message.channel.sendMessage('Im not sure what you meant')
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('How many? Please tell me how many?')
            message.channel.bulkDelete(args[1]);
            break;
    }
})


bot.login(token);
