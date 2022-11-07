const express = require('express')
const {Telegraf} = require('telegraf')


const app = express()

const bot = new Telegraf('5741034554:AAEVqOygMAETobk6FQbirjZdLWmwPKZQcWM')



bot.start(ctx=>{
    ctx.reply('The bot is started')
})

bot.command('test',ctx=>{
    ctx.reply("This is test command")
})

app.use(bot.webhookCallback(`/`))

app.get("/", (req, res) => {
    res.json({"status":"the site is working"})
})

const port = process.env.PORT || 5000

app.listen(port, () => `Server running on port ${port} 🔥`)