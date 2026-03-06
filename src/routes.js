import { Router } from "express"

const routes = Router()

let usuarios = []

//REGISTER

routes.post("/register", (req,res)=>{

 const {nome, senha} = req.body

 const usuarioExistente = usuarios.find(user => user.nome === nome)
 
 if(usuarioExistente){
  return res.status(400).json({erro:"Usuário já existe"})
 }

 const usuario = {
   id: usuarios.length + 1,
   nome,
   senha
 }

 usuarios.push(usuario)

 res.json(usuario)

})


// LOGIN
routes.post("/login", (req,res)=>{

 const {nome, senha} = req.body

 const usuario = usuarios.find(
   user => user.nome === nome && user.senha === senha
 )

 if(!usuario){
   return res.status(401).json({erro:"Login inválido"})
 }

 res.json({message:"Login realizado com sucesso"})
})


export default routes