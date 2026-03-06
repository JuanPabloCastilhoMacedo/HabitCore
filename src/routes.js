import { Router } from "express"

const routes = Router()

let usuarios = []

//REGISTER

routes.post("/register", (req,res)=>{

 const {nome, senha} = req.body

 const usuario = {
   id: usuarios.length + 1,
   nome,
   senha
 }

 usuarios.push(usuario)

 res.json(usuario)

})

export default routes