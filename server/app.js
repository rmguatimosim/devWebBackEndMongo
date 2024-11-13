const express = require('express')
const cors = require("cors")
const Curso = require('./models/curso')
const app = express()
app.use(express.json())//para receber dados por post
app.use(cors())//para permitir que nosso servidor seja acessivel por outros
app.use(express.urlencoded({extended: true}))



app.get('/cursos', async (req, res) => {
    const cursos = await Curso.find({})
    res.status(200).json(cursos)

    
})

app.get('/cursos/:id', async (req,res) => {
    const {id} = req.params
    const curso = await Curso.findById(id)
    res.status(200).json(curso)

})

app.post('/cursos',  async (req,res) => {
    const {sigla, nome} = req.body
    const novoCurso = new Curso({sigla, nome})
    await novoCurso.save();
    res.status(201).json({})
    
})

app.patch('/cursos/:id', async (req, res) => {
    const {id} = req.params
    const {sigla, nome} = req.body
    await Curso.findByIdAndUpdate(id, {sigla, nome}, {runValidators: true})
    res.status(204).json({})
})

app.delete('/cursos/:id', async (req,res) => {
    const {id} = req.params
    await Curso.findByIdAndDelete(id)
     res.status(204).json({})
})


app.listen(3000, () => {
    console.log("Servidor ligado na porta 3000!")
})