const express = require("express")
const server = express()
const routes = require("./routes")

// enable static files
server.use(express.static("public"))

// request, response
server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/views/index.html")
})

// routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))