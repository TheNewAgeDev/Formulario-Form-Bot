/* Dependence */
const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const path = require("path");

/* Import Configurations */
const Util = require("./data/util");
const login = Util.getLogin()[1];
const config = Util.getConfig()[1];

var lang;
if(config.language=="ES"){
    lang = require("./data/languages/ES-es.json");
}else{
    lang = require("./data/languages/EN-en.json");
}

/* To Init Bot */
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync(path.join(__dirname, "data/commands")).filter(file => file.endsWith(".js"));
for(var file of commandFiles){
    const command = require(`./data/commands/${file}`);
    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(lang.start.init + client.user.tag + "!");
    client.user.setStatus(config.status);
    client.user.setActivity(config.statusBot);
});

const PREFIX = config.prefix;

/* Events Bot */
client.on('message', msg => {
    if (msg.author.bot) return
    if (msg.content.startsWith(PREFIX)) {
        const args = msg.content.slice(PREFIX.length).trim().split(/ +/);
        let CMD = args.shift().toLowerCase();

        /* Alias Commands */
        if(client.commands.find((c) => c.alias.includes(CMD))){
            let com = client.commands.find((c) => c.alias.includes(CMD));
            CMD = com.name;
        }

        /* List Commands */
        if(!client.commands.has(CMD)){
            msg.channel.send(lang.error.notCommand);
            return;
        };

        try{
            client.commands.get(CMD).execute(client, msg, args);
        }catch(e){
            console.error(e);
            msg.reply(lang.error.catch);
        }
    }
});

/* Logger with Discord Bot */
client.login(login.password);
