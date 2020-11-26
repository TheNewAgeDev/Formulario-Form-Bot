module.exports = {
    name: "ping",
    alias: ["p"],
    description: "Command Ping Dev",
    execute: (client, msg, args) => {
        msg.channel.send("Pong!");
    },
};