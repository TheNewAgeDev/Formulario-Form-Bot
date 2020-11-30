const Discord = require('discord.js');
const login = require("../../private/login");

const hook = new Discord.WebhookClient(login.webhookId, login.webhookToken);

// Send a message using the webhook
hook.send('I am now alive!');
