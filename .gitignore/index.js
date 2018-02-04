const Discord = require ("discord.js");

var bot = new Discord.Client ();

bot.on("ready", () => {
    bot.user.setGame("Manger");
    console.log("bot connected");
});

bot.login(process.env.TOKEN);

bot.on("serverNewMember", function (server, user) {
        bot.addMemberToRole(user, server.roles.get("name", "Membre"), function (err) { if (err) console.log(err) }
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
    if (message.content === "Hexxel")
        message.reply(" c'est le fondateur du serveur !!!")
    if (message.content === "qui est la") 
        message.reply("Moi je suis la comme ça t'es jamais Rémi c'est cool non ?? ") 
    if (message.content === "Le français")
        message.reply("c'est de la merde") ;}) 
bot.on("message", message => {
    if (message.content === "le francais") 
        message.reply(" c'est de la merde");})
bot.on("message", message => {
    if (message.content === "HexXel") 
        message.reply(" c'est le fondateur du serveur !!! ");})
bot.on("message", message => {
    if (message.content === "hihax") 
        message.reply(" c'est mon dev");}) 

