const util = require("../util");

module.exports = {
    name: "ping",
    alias: ["p"],
    description: "Command Ping Dev",
    execute: (client, msg, args) => {
        util.sendMsg(msg, "Pong!");
    },
};