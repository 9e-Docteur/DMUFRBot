const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
    if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send(`:octagonal_sign: **Vous n'avez pas la permission d'utilisé cette commande !**`)

    if(message.mentions.users.size === 0) {
        return message.channel.send(`:exclamation: **Erreur :** Vous devez mentionner un utilisateur !`);
    }

    let kick = message.guild.member(message.users.first());

    if(!kick) {
        return message.channel.send(`Utilisateur Introuvable :grin: `);
    }

    if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.channel.send(`Je n'ai pas cette permission :grin:`);

    kick.kick().then(member => {

        message.channel.send(`**${member.user.username}** à été kick par : **${message.author.usernamme}**`);
        message.mentions.users.first().send(`Vous avez été expulsé du serveur **${message.guild.name}** par: ${message.author.username}`);
    })
};

module.exports.help = {
    name: "kick"
};