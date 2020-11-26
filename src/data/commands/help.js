const util = require("../util");

module.exports = {
    name: "help",
    alias: ["h"],
    description: "Write the Args",
    execute: (client, msg, args) => {
        util.watchPerms(msg);
        util.sendMsg(msg, "Watching Perms");
    },
};