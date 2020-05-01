const roblox = require('noblox.js');
const chalk = require('chalk');

exports.run = async (client, message, args) => {
    let audit;
    try {
        audit = await roblox.getAuditLog(client.config.groupId, 'none', 'none', 'Asc', 25, 'none');
    } catch (err) {
        console.log(chalk.red('An error occured when running the auditlogs command: ' + err));
        return message.channel.send({embed: {
            color: 16733013,
            description: `Oops! An unexpected error has occured. It has been logged to the bot console.`,
            author: {
                name: message.author.tag,
                icon_url: message.author.displayAvatarURL()
            }
        }});
    }
  if(audit.actionType){
    message.channel.send({embed: {
        color: 7948427,
        description: `**Audit action done by ${audit.user.username}**\n ${audit.actionType} on ${audit.description.TargetName}`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
    }});
  } else {
        message.channel.send({embed: {
        color: 7948427,
        description: `**Audit action done by ${audit.user.username}**\n ${audit.actionType} on ${audit.description.TargetName}`,
        author: {
            name: message.author.tag,
            icon_url: message.author.displayAvatarURL()
        },
        thumbnail: {
            url: `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&format=png&username=${shout.poster.username}`
        }
    }});
  }
}
