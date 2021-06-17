module.exports = {
    validarDados: ({ codigo, nome, nascimento }) => {
        if(!parseInt(codigo))
            return 'Campo Código inválido.'
        if(!nome)
            return 'Campo Nome inválido.'
        if(!new Date(nascimento))
            return 'Campo Data de Nascimento inválido.'

        return true
    }
}