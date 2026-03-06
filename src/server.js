import express from "express"

const server = express()
const port = 3333

server.use(express.static("public"))
server.use(express.json())

server.listen(port, () => console.log(`Conectado a porta: ${port}`))