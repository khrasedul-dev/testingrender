const express = require('express')
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

const app = express()


bot.start(ctx=>{
    ctx.reply('The bot is started')
})

bot.command('test',ctx=>{
    ctx.reply("This is test command")
})

app.use(bot.webhookCallback(`/${process.env.TOKEN}`))
bot.telegram.setWebhook(`${process.env.DOMAIN}:8443/${process.env.TOKEN}`)

app.get("/", (req, res) => {
    res.json({"status":"the site is working"})
})

const port = process.env.PORT || 5000

app.listen(port, () => `Server running on port ${port} 🔥`)