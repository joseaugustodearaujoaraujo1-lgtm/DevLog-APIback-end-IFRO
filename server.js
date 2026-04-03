//BACK-END USANDO BANCO DE DADOS EM UM ARRAY E COM CRUD COMPLETO COM NODE.JS, usando o .find(), .findIndex() e o splice()

import express from "express"

const PORTA = 3001
const data = new Date()
const app = express()
let bancoDeDados = []
let idInicial = 1

app.use(express.json())

//CRIANDO DADOS COM .POST na rota /api/v1/projects
app.post("/api/v1/projects", (req, res) => {
    try {
        let id = idInicial++
        let nome = req.body.nome
        let descricao = req.body.descricao

        if (nome && descricao) {

            bancoDeDados.push({ id, nome, descricao })
            res.status(201).json({ id, nome, descricao })

        } else {
            res.status(404).json({ "informação": "insira corretamente suas credenciais!" })
        }
    } catch (error) {
        res.status(500).json({ "informação": "Houve um error inesperado!" })
    }
})

//BUSCANDO TODOS OS DADOS .GET() NA ROTA /api/v1/projects
app.get("/api/v1/projects", (req, res) => {
    try {

        if (bancoDeDados.length > 0) {
            res.json(bancoDeDados)
        } else {
            res.status(404).json({ "informação": "O banco de dados está vazio!" })
        }

    } catch (error) {
        res.status(500).json({ "Informacao": "Houve um erro inesperado!" })
    }
})

//BUSCANDO TODOS OS DADOS .GET() NA ROTA /api/v1/projects
app.get("/api/v1/projects/:id", (req, res) => {
    try {
        let id = parseInt(req.params.id)
        const buscarID = bancoDeDados.find(registro => registro.id === id)

        if (buscarID) {
            res.json(buscarID)
        } else {
            res.status(404).json({ "informação": "ID não encontrado!" })
        }

    } catch (error) {
        res.status(500).json({ "Informacao": "Houve um erro inesperado!" })
    }
})

//ATULIZANDO ALGUNS CAMPOS OU TODOS OS CAMPOS COM PATCH NA ROTA /api/v1/projects/:id
app.patch("/api/v1/projects/:id", (req, res) => {
    try {

        let id = parseInt(req.params.id)
        let buscarID = bancoDeDados.find(registro => registro.id === id)

        if (buscarID) {

            buscarID.nome = req.body.nome
            buscarID.descricao = req.body.descricao
            res.status(202).json(req.body)

        } else {
            res.status(404).json({ "informação": "ID não encontrado!" })
        }
    } catch (error) {
        res.status(500).json({ "Informação": error })
    }
})

//DELETANDO POR ID NA ROTA /api/v1/projects/:id
app.delete("/api/v1/projects/:id", (req, res) => {
    try {

        let id = parseInt(req.params.id)
        let buscarID = bancoDeDados.findIndex(registro => registro.id === id)

        if (buscarID !== -1) {

            bancoDeDados.splice(buscarID, 1)
            res.status(202).json(req.body)

        } else {
            res.status(404).json({ "informação": "ID não encontrado!" })
        }

    } catch (error) {
        res.status(500).json({ "Informação": error })
    }
})

app.listen(PORTA, () => {
    console.log(`http://localhost:${PORTA} | ${data}`)
})