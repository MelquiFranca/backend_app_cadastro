const { Router } = require('express')
const multer = require('multer')
const UsuarioController = require('./controller/usuarioController.js')

const rotas = Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { codigo } = req.body
        file.originalname = `${codigo}.jpg`
        cb(null, "uploads/")
    },
    filename: (req, file, cb) => {        
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

rotas.get('/usuarios', UsuarioController.listar)
rotas.get('/usuarios/:id', UsuarioController.selecionar)
rotas.post('/usuarios', upload.single('foto'), UsuarioController.salvar)
rotas.put('/usuarios/:id', upload.single('foto'), UsuarioController.alterar)
rotas.delete('/usuarios/:id', UsuarioController.excluir)

module.exports = rotas