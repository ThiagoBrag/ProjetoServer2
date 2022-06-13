const express = require('express');
const pessoas = require('./api/pessoas');
const usuarios = require("./api/usuarios")
const boletos = require("./api/boletos")
const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/pessoas", pessoas.router)
app.use("/api/usuarios", usuarios.router)
app.use("/api/boletos", boletos.router)

app.get("/", (req, res) => {
    res.send("Meu home")
})

app.listen(port, () => {
    console.log(`SERVER RODANDO NA PORTA ${port}`);
})

