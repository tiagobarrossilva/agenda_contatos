module.exports = class UsuarioDto{
    nome
    contato
    imagem

    constructor(usuario){
        if(!usuario.nome || !usuario.contato){
            throw new Error('dados nao informados')
        }

        this.nome = usuario.nome
        this.contato = usuario.contato
        this.imagem = usuario.imagem
    }
    
}
