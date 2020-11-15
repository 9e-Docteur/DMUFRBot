const Discord = require("discord.js");
 
module.exports.run = async (client, message, args) => {
 
    message.delete();
   
    let target = message.mentions.members.first() || message.guild.members.get(args[0])
    if(!target) return message.channel.send(":exclamation: Merci de mentionner un utilisateur").then(m => m.delete(5000))
    let reason = args.slice(1).join(" ");
    if(!reason) return message.channel.send(`:exclamation: Merci de dire la raison du report pour pouvoir report l'utilisateur **${target.user.tag}**`).then(m => m.delete(5000))
 
    let rChannel = message.guild.channels.find(c => c.name === "👀reporт")
 
    message.channel.send(":white_check_mark: Votre report à été envoyer au staff, Merci :D").then(m => m.delete(5000))
    rChannel.send(`**${message.author.tag}** à report **${target.user.tag}** pour la raison : ${reason}.`).then(async msg => {
        msg.react("✅")
        msg.react("➖")
        msg.react("❌")
    })
}
 
module.exports.help = {
    name: "report"
}