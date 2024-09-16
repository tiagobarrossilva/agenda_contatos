module.exports = class UsuarioDto{
    nome
    contato
    imagem

    constructor(usuario){
        this.nome = usuario.nome
        this.contato = usuario.contato
        this.imagem = usuario.imagem
    }
    
}
