const express = require('express')
const router = require('./api/pessoas');
const app = express()
const port = 3200;

app.use(express.json())

app.listen(port, () => {
    console.log(`Executando em: http://localhost:${port}`)
})

app.get("/", (req, res) => {
    res.send("Home")
})

app.use("/api/pessoas",router.router);
