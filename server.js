import express from "express"
import dotenv from "dotenv"



 const server = express()
 const PORT = 3333

 server.get(PORT, async (req, res)=> {
    await res.send(`Conectado na porta ${PORT}!`)
 })