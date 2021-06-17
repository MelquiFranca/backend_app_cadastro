module.exports = {
    validarDados: ({ codigo, nome, nascimento }) => {
        if(!codigo)
            return 'Campo Código inválido.'
        if(!nome)
            return 'Campo Nome inválido.'
        if(!nascimento)
            return 'Campo Data de Nascimento inválido.'

        return true
    }
}