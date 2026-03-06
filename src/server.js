import express from "express"
import routes from "./routes.js"

const server = express()
const port = 3333

server.use(express.static("public"))
server.use(express.json())
server.use(routes)

server.listen(port, () => console.log(`Conectado a porta: ${port}`))