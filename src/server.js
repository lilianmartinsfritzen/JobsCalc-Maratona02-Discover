const express = require("express")
const server = express()
const routes = require("./routes")
const path = require("path")

// using template engine
server.set('view engine', 'ejs')

// change views folder location 
server.set('views', path.join(__dirname, 'views'))

// enable static files
server.use(express.static("public"))

// use the req.body
server.use(express.urlencoded( { extended: true }))

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))