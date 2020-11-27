const util = require("../util");
const Discod = require("discord.js");

module.exports = {
    name: "ping",
    alias: ["pg", "pi"],
    description: "Command Ping Dev",
    execute: (client, msg, args) => {
        util.sendMsg(msg, "Pong! ");
        let usuario = msg.mentions.members.first() || msg.member;
        let embed = new Discod.MessageEmbed();
        embed.setColor("RANDOM");
        embed.setImage(usuario.user.displayAvatarURL());
        util.sendMsg(msg, embed);
    },
};
