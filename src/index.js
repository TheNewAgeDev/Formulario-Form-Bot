/* Dependence */
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");

/* Import Configurations */
const Util = require("./data/util");
const login = Util.getLogin()[1];
const config = Util.getConfig()[1];

var leng;
if(config.lenguage=="ES"){
    leng = require("./data/languages/ES-es.json");
}else{
    leng = require("./data/languages/EN-en.json");
}

/* To Init Bot */
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, "data/commands")).filter(file => file.endsWith(".js"));
for(var file of commandFiles){
    const command = require(`./data/commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(leng.start.init + client.user.tag + "!");
    client.user.setStatus(config.status);
    client.user.setActivity(config.statusBot);
});

const PREFIX = config.prefix;

/* Events Bot */
client.on('message', msg => {
    if (msg.author.bot) return
    if (msg.content.startsWith(PREFIX)) {
        const args = msg.content.slice(PREFIX.length).trim().split(/ +/);
        const CMD = args.shift().toLowerCase();

        /* List Commands */
        if(!client.commands.has(CMD)) return;
        try{
            client.commands.get(CMD).execute(client, msg, args);
        }catch(e){
            console.error(e);
            msg.reply(leng.error.catch);
        }
    }
});

/* Logguer with Discord Bot */
client.login(login.password);
