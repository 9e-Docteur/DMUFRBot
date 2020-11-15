const Discord = require('discord.js');
const moment = require('moment');
const { title } = require('process');

module.exports.run = (async(client, message, args) => {

    const membre = message.mentions.members.first() || message.member;
    //if (!membre) return message.channel.send(`:x: Veillez Mentionner un utilisateur ! `)

    message.channel.send({
        embed: {
            color: 0xff8400,
            title: `Erreur`,
            thumbnail: {
                url: membre.user.displayAvatarURL
            },
            fields: [
                {
                    name: ":logo: c'est tout symplement 9e_Docteur",
                    value: moment.utc(membre.joinedAt).format("LLL")
                },
            ],
            footer: {
                text: `Fondateur :  **9e_Docteur**`
            }
        }
    })
});

module.exports.help = {
    name: "f12345"
}