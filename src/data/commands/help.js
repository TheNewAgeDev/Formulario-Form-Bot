const util = require("../util");

module.exports = {
    name: "help",
    alias: ["h"],
    description: "Write the Args",
    execute: (client, msg, args) => {
        util.sendMsg(msg, "In the Future");
    },
};
