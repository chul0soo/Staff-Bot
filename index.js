const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI3MjM0MjkyMzY1NTMzMjQ1.YdHQOg.ScjeV5NUK41PQtsmYXrR3fS0rEY"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "Hi"){
        message.reply("Hello There!")
    }
})

client.login(process.env.TOKEN)