const express = require('express')
const cors = require('cors')
const rotas = require('./routes.js')

const app = express()

app.use(cors())
app.use(express.json())
app.use(rotas)

app.listen(process.env.PORT || 8000, () => {
    console.log("Servidor iniciado.")
})