const express = require("express")
const server = express()
const routes = require("./routes")

// using template engine
server.set('view engine', 'ejs')

// enable static files
server.use(express.static("public"))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))