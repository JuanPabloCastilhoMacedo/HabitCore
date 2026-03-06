import { Router } from "express"

const routes = Router()

let usuarios = []

//REGISTER

routes.post("/register", (req,res)=>{

    const {nome, senha} = req.body

    const nomeLimpo = nome.trim()

    const usuarioExistente = usuarios.find(
    user => user.nome.toLowerCase() === nomeLimpo.toLowerCase()
  )
 
 if(usuarioExistente){
  return res.status(400).json({erro:"Usuário já existe"})
 }

 const usuario = {
   id: usuarios.length + 1,
   nome: nomeLimpo,
   senha
 }

 usuarios.push(usuario)

 res.json(usuario)

 console.log(usuarios)

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

 res.json({
   message:"Login realizado com sucesso",
   usuario
 })

})


//CRUD DO DASHBOARD
//POST
let tarefas = []

routes.post("/tasks",(req,res)=>{

 const {texto, usuarioId} = req.body

 const tarefa = {
   id: tarefas.length + 1,
   texto,
   usuarioId
 }

 tarefas.push(tarefa)

 res.json(tarefa)

})


//GET
routes.get("/tasks",(req,res)=>{

 const {usuarioId} = req.query

 const tarefasUsuario = tarefas.filter(
   tarefa => tarefa.usuarioId == usuarioId
 )

 res.json(tarefasUsuario)

})

//DELETE
routes.delete("/tasks/:id", (req, res) => {
  const { id } = req.params

  tarefas = tarefas.filter(tarefa => tarefa.id != id)

  res.json({ message: "Tarefa deletada" })
})

//UPDATE

routes.put("/tasks/:id", (req, res) => {
    const { id } = req.params
    const { texto } = req.body

    const tarefa = tarefas.find(t => t.id == id)

    if(!tarefa){
        return res.status(404).json({erro:"Tarefa não encontrada!"})
    }

    tarefa.texto = texto
    res.json(tarefa)
})



export default routes