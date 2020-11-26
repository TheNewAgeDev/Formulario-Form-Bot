module.exports = {
    name: "ping",
    description: "Command Ping Dev",
    execute: (client, msg, args) => {
        msg.channel.send("Pong!");
    },
};