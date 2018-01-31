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
