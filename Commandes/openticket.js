const Discord = require('discord.js')

module.exports.run = async(bot,message,args) => {

    message.delete()
    if(!message.member.hasPermission("ADMINISTRATOR")) return;

    let openticket1 = new Discord.MessageEmbed()
    .setDescription("Réagissez 🎫 pour ouvrir un ticket")

    let myGuild = bot.guilds.cache.get("581496843519655947");
    let SendChannel = myGuild.channels.cache.get("746781462027698206")
    message.channel.send(openticket1)
    .then(msg => msg.react("🎫"))

};

module.exports.help = {
    name: "openticket"
}