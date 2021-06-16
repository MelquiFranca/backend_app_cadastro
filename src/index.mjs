import express from 'express'
import cors from 'cors'
import rotas from './routes.js'

const app = express()

app.use(cors())
app.use(rotas)

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor iniciado.")
})