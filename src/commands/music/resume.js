const { MessageEmbed } = require('discord.js');
exports.run = async (client, message, args, color, prefix, serverQueue, url, searchString, ytdl, YouTube, play, chunk, handleVideo, youtube, queue) => {
  
          if (!message.member.voice.channel) return message.channel.send({
            embed: {
                color: color,
                description: "Sorry, you need join a voice channel"
            }
        });
  
    const db = require("quick.db");
  const voice = db.get(`myvoice.${message.guild.id}`)
  if (message.member.voice.channel.id !== voice) 
    {
      return message.channel.send("You need join same voice!")
    }
  
      if (serverQueue && !serverQueue.playing) {
            serverQueue.playing = true;
            serverQueue.connection.dispatcher.resume();
            return message.channel.send({
                embed: {
                    color: color,
                    description: "**Succesfully resume the server queue!**"
                }
            });
        }
        return message.channel.send({
            embed: {
                color: color,
                description: "Error: nothing playing"
            }
        });
  
}

exports.conf = {
    aliases: [''],
    cooldown: "5"
}

exports.help = {
    name: 'resume',
    description: 'Resume the paused music',
    usage: 'resume'
}