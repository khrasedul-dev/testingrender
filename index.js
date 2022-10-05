const express = require('express')
const {Telegraf} = require('telegraf')

const bot = new Telegraf(process.env.TOKEN)

const app = express()

app.get("/", (req, res) => {
    res.json({"status":"the site is working"})
})

const port = process.env.PORT || 5000

app.listen(port, () => `Server running on port ${port} 🔥`)