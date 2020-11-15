const Discord = require('discord.js');
const moment = require('moment');
const { title } = require('process');

module.exports.run = (async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    //if (!membre) return message.channel.send(`:x: Veillez Mentionner un utilisateur ! `)

    message.channel.send({
        embed: {
            color: 0xff0000,
            title: `Erreur`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: ":x: Commande désactivé !",
                },
            ],
            footer: {
                text: `Erreur`
            }
        }
    })
});

module.exports.help = {
    name: "fonda"
}