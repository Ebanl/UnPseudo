const Discord = require ("discord.js");

var bot = new Discord.Client ();

bot.on("ready", () => {
    bot.user.setGame("Manger");
    console.log("bot connected");
});

bot.login(process.env.TOKEN);

bot.on("message", message => {
    if (message.content === "modo")
        message.reply(" c'est mon chef");})
bot.on("message", message => {
    if (message.content === "salut")
        message.reply(" bonjour");})
bot.on("message", message => {
    if (message.content === "Modo") 
        message.reply(" c'est mon chef");})
bot.on("message", message => {
    if (message.content === "Salut") 
        message.reply(" bonjour");}) 
bot.on("message", message => {
    if (message.content === "Hihax") 
        message.reply(" c'est mon dev");}) 
bot.on("message", message => {
    if (message.content === "Jerey")
        message.reply(" c'est le fondateur du serveur !!!")
    if (message.content === "qui est la") 
        message.reply("Moi :Coucou:") ;}) 
