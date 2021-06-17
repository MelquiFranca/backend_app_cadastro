const { Router } = require('express')
const UsuarioController = require('./controller/usuarioController.js')

const rotas = Router()

rotas.get('/usuarios', UsuarioController.listar)
rotas.get('/usuarios/:id', UsuarioController.selecionar)
rotas.post('/usuarios', UsuarioController.salvar)
rotas.put('/usuarios/:id', UsuarioController.alterar)
rotas.delete('/usuarios/:id', UsuarioController.excluir)

module.exports = rotas