const UsuarioService = require('../services/UsuarioService.js')
const { validarDados } = require('../utils.js')
class UsuarioController {    
    static async listar(request, response) {
        try {
            const dados = await UsuarioService.listar()

            return response.json({
                dados,
                error: false
            })
        } catch(e) {
            return response.status(400).json({
                message: e.message,
                error: true
            })
        }
    }
    static async selecionar(request, response) {
        const { id } = request.params

        try {
            const dados = await UsuarioService.selecionar({ id })

            return response.json({
                dados,
                error: false
            })
        } catch(e) {
            return response.status(400).json({
                message: e.message,
                error: true
            })
        }
    }
    static async salvar(request, response) {
        try {
            const { codigo, nome, nascimento } = request.body
            
            const validacao = validarDados({ codigo, nome, nascimento })
            if(validacao !== true)
                throw new Error(validacao)

            const nomeFoto = `${codigo}.jpg`
            const dados = await UsuarioService.salvar({ codigo, nome, nascimento, foto: nomeFoto })

            return response.json({
                dados,
                error: false,
                message: 'Usuário salvo com sucesso.'
            })
        } catch(e) {
            return response.status(400).json({
                message: e.message,
                error: true
            })
        }
    }
    static async alterar(request, response) {
        try {
            const { id } = request.params
            const { codigo, nome, nascimento, foto } = request.body

            const validacao = validarDados({ codigo, nome, nascimento })
            
            if(validacao !== true)
                throw new Error(validacao)
        
            const nomeFoto = `${codigo}.jpg`
            const dados = await UsuarioService.alterar({ id, codigo, nome, nascimento, foto: nomeFoto })

            return response.json({
                dados,
                error: false,
                message: 'Usuário alterado com sucesso.'
            })
        } catch(e) {
            
            return response.status(400).json({
                message: e.message,
                error: true
            })
        }

    }
    static async excluir(request, response) {
        
        try {
            const { id } = request.params            
            const dados = await UsuarioService.excluir({ id })

            return response.json({
                dados,
                error: false,
                message: 'Usuário excluído com sucesso.'
            })
            
        } catch(e) {
            return response.status(400).json({
                message: e.message,
                error: true
            })
        }

    }
}

module.exports = UsuarioController