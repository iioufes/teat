const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("590996381599268901")
setInterval(function() {
channel.send(`$daily`);
}, 30)
})

client.login(process.env.BOT_TOKEN);