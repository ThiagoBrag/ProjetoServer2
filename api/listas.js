const express = require("express");
const router = express.Router();

const pessoas = [
    { id: 1, nome: "Thiago", cpf: "11111111111" },
    { id: 2, nome: "Diego", cpf: "22222222222" },
    { id: 3, nome: "João", cpf: "33333333333" },
];

const usuarios = [
    {id: 1, nome: "thigas", senha: "123"},
    {id: 2, nome: "dieguito", senha: "123"},
    {id: 3, nome: "jão", senha: "123"},
]

const boletos = [
    {id: 1, valor: 1000, id_user: 1, id_pessoa: 1, status: "pago", nome:"Luz"},
    {id: 2, valor: 660, id_user: 2, id_pessoa: 2, status: "Pendente", nome:"Senai"},
    {id: 3, valor: 1200, id_user: 3, id_pessoa: 3, status: "pago", nome:"Água"},
    {id: 4, valor: 200, id_user: 1, id_pessoa: 1, status: "pago", nome:"Internet"}
]

module.exports = {router, pessoas, usuarios, boletos}
