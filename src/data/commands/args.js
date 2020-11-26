module.exports = {
    name: "write",
    description: "Write the Args",
    execute: (client, msg, args) => {
        msg.channel.send(args);
    },
};