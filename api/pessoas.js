const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const pessoasLista = [
    {"id": 1, "nome": "thiago", "cpf": "12345678910"},
    {"id": 2, "nome": "diego", "cpf": "10987654321"},
    {"id": 3, "nome": "jao", "cpf": "12345678911"}
]


router.get("/", (req, res) => {
    res.json(buscarPessoas());
})

function buscarPessoas() {
    return pessoasLista
}

router.post("/", (req, res) => {
    const pessoa = criarPessoa(req.body);
    if (pessoa.constructor.name == "Error") {
        return res.status(400).send(pessoa.message);
    }
    res.json(pessoa)
})

function criarPessoa(pessoa) {
    if (pessoa.cpf == null || pessoa.nome == null || pessoa.nome == '' ) {
        return new Error("Insira um CPF ou nome válido! Anta!");
    } else {pessoa.id = pessoasLista.length + 1;
        pessoasLista.push(pessoa)
        return pessoa
    }
    
}

// router.put("/api/pessoas/:id", (req, res) => {
//     const id = req.params.id
//     const pessoa = req.body
//     const index = pessoasLista.findIndex(p => p.id == id)
//     pessoa.id = id
//     pessoasLista[index] = pessoa
//     res.json(pessoa)
// })

router.get("/:id", (req, res) => {
    res.json(buscarPessoa(req))
})

function buscarPessoa(req) {
    const id = req.params.id
    const pessoa = pessoasLista.find(p => p.id == id)
    return pessoa
}

// router.delete("/api/pessoas/:id", (req,res) => {
//     const id = req.params.id
//     const index = pessoasLista.findIndex(p => p.id == id)
//     pessoasLista.splice(index, 1)
//     res.json(pessoasLista)
// })



module.exports = {
    router,
    buscarPessoas,
    buscarPessoa
}