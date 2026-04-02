import express from "express"

const PORTA = 3000
const app = express()
const data = new Date()
let bancoDados = [
    {
        id:25,
        nome: "jose"
    }
]
let id = bancoDados.id + 1

app.use(express.json())

//BUSCAR TODOS OS DADOS
app.get("/api/v1/projects", (req, res) => {
    try {
        if (bancoDados.length > 0) {
            res.status(200).json(bancoDados)
        } else {
            res.status(404).json({ "informação": "O banco está vazio e não conten informaçãoes!" })
        }
    } catch (erro) {
        res.status(500).json(erro)
    }
})

//BUSCAR DADOS POR ID 
app.get("/api/v1/projects/:id", (req, res) => {
    try {
        if (bancoDados.length > 0) {
            
            let id = parseInt(req.params.id)
            const buscarDadosPorID = bancoDados.find(item => item.id === id)

            if(buscarDadosPorID){
                res.status(200).json(buscarDadosPorID)
            }else{
                res.status(200).json({"iformaçaõ": "ID não encontrado!"})
            }
        } else {
            res.status(404).json({ "informação": "O banco está vazio e não conten informaçãoes!" })
        }
    } catch (erro) {
        res.status(500).json(erro)
    }
})

app.listen(PORTA, () => {
    console.log(`http://localhost:${PORTA} | ${data}`)
})