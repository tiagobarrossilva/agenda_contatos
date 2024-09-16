const UsuarioService = require('../services/UsuarioService')
const excluirImgPerfilUsuario = require('../helpers/excluirImgPerfilUsuario')

module.exports = class UsuarioController{

    static async paginaHome(req,res){
        const usuarios = await UsuarioService.consultarTodosUsuarios()
        res.render('pages/home',{usuarios})
    }

    static paginaAdicionarUsuario(req,res){
        res.render('pages/registrar')
    }

    static async paginaEditarUsuario(req,res){
        const {id} = req.params
        const usuario = await UsuarioService.consultarUsuarioPorId(id)
        res.render('pages/editar',{usuario})
    }

    static async adicionarUsuario(req,res){

        let imagem = null
        if(req.file){
            imagem = req.file.filename
        }
        
        const objUsuario = {
            nome: req.body.nome,
            contato: req.body.contato,
            imagem
        }

        const objUsuarioArmazenado = await UsuarioService.cadastrarNovoUsuario(objUsuario)
        if(objUsuarioArmazenado){
            return res.redirect('/')
        }
        return res.redirect('/')
        
    }

    // fazendo
    static async editarUsuario(req,res){
        const {id} = req.params
        const {nome,contato} = req.body


    }

    static async excluirUsuario(req,res){
        const {id} = req.params
        const usuario = await UsuarioService.consultarUsuarioPorId(req.params.id)

        const usuarioExcluido = await UsuarioService.excluirUsuario(usuario.id)
        if(usuarioExcluido){
            excluirImgPerfilUsuario(usuario.imagem)
            return res.status(200).send('Resposta com status 200 OK');
        }
        console.log('erro')
        return
    }
}