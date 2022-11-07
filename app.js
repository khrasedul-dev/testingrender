const express = require('express')
const { Telegraf } = require('telegraf')
const mongoose = require('mongoose')


const app = express()

const bot = new Telegraf('5741034554:AAEVqOygMAETobk6FQbirjZdLWmwPKZQcWM')


const s = new mongoose.Schema({
    msg: {
        type: String
    }
})

const testModel = mongoose.model('test', s)

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then((d) => console.log('Database connected'))
    .catch((e) => console.log(e))




bot.start(ctx => {
    ctx.reply('The bot is started')
})

bot.command('test', ctx => {
    ctx.reply("This is test command not from db")
})

bot.command('testdb', ctx => {
    testModel.find()
        .then(data => {
            ctx.reply(data[0].msg)
        })
        .catch(e => console.log(e))
})

app.use(bot.webhookCallback(`/`))

app.get("/", (req, res) => {
    res.json({ "status": "the site is working" })
})

app.get("/data", (req, res) => {
    testModel.find()
        .then(data => {
            res.json({ "Data": data[0].msg })
        })
        .catch(e => console.log(e))
})




const port = process.env.PORT || 5000

app.listen(port, () => `Server running on port ${port} 🔥`)