module.exports = {
    name: "write",
    alias: ["w", "wr"],
    description: "Write the Args",
    execute: (client, msg, args) => {
        msg.channel.send(args);
    },
};