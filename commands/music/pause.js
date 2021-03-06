const discord = require('discord.js')
const distube = require('distube')

module.exports.run = async (Client, message, args, prefix) => {
    if(!message.content.startsWith(prefix)) return
    if(!message.member.voice.channel) return message.reply('please join a vc before using this cmd')
    const queue = Client.distube.getQueue(message)
    if(!queue) return message.channel.send('There is nothing playing')
    Client.distube.pause(message)
    message.channel.send('Song is Paused')
}

module.exports.help = {
    name: 'pause',
    aliases: []
}