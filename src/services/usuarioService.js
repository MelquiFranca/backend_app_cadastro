const { Usuario } = require('../database/models/index.js')
const fs = require('fs')
const path = require('path')

class UsuarioService {    
    static async listar() {
        const usuarios = await Usuario.findAll()
        return usuarios
    }
    static async selecionar({ id }) {
        try {
            const usuario = await Usuario.findOne({ where: {id}})
            return usuario
        } catch(e) {
            throw new Error(e.message)
        }
    }
    static async salvar({ codigo, nome, nascimento, foto=null }) {
        try {
            const usuario = await Usuario.create({
                codigo,
                nome,
                nascimento, 
                foto
            })
    
            return usuario
        } catch(e) {
            throw new Error(e.message)
        }
    }
    static async alterar({ id, codigo, nome, nascimento, foto=null }) {
       try {
            const dadosUsuario = await UsuarioService.selecionar({id})

            if(dadosUsuario.codigo != codigo) {
                if(fs.existsSync(path.resolve(__dirname, '..', '..', 'uploads',`${dadosUsuario.codigo}.jpg`)))
                    fs.rmSync(path.resolve(__dirname, '..', '..', 'uploads',`${dadosUsuario.codigo}.jpg`))
            }
            
            const usuario = await Usuario.update({
                    codigo, 
                    nome,
                    nascimento, 
                    foto
                }, 
                {
                    where: {id}
                }
            )


            return usuario
       } catch(e) {
           throw new Error(e.message)
       }
    }
    static async excluir({ id }) {
        try {
            
            const dadosUsuario = await UsuarioService.selecionar({id})
            if(fs.existsSync(path.resolve(__dirname, '..', '..', 'uploads',`${dadosUsuario.codigo}.jpg`)))
                fs.rmSync(path.resolve(__dirname, '..', '..', 'uploads',`${dadosUsuario.codigo}.jpg`))

            const usuario = await Usuario.destroy({where: {id}})
            
            return usuario
        } catch(e) {
            throw new Error(e.message)
        }
    }
}

module.exports = UsuarioService