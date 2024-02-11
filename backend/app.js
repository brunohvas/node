const express = require('express')
const app = express()

app.use(express.json())

//DB conn
const conn = require("./db/conn")

conn()

//Routes
const routes = require("./routes/router")

app.use('/api', routes)

//porta
app.listen(3000, function() {
    console.log("Api Ok")
})