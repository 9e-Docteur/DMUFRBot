const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
    let embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTitle(`${membre.user.username} Be Right Back :D`)
    message.channel.send(embed);
};

module.exports.help = {
    name: 'brb'
};