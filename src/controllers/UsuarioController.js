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
        const usuario = await UsuarioService.consultarUsuarioPorId(req.params.id)
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

        await UsuarioService.cadastrarNovoUsuario(objUsuario)
        return res.redirect('/')
    }

    static async editarUsuario(req,res){
        let usuario = await UsuarioService.consultarUsuarioPorId(req.body.id)
                
        let imagem = null
        if(req.file){
            if(usuario.imagem){
                excluirImgPerfilUsuario(usuario.imagem)
            }            
            imagem = req.file.filename
            usuario.imagem = imagem
        }

        usuario.nome = req.body.nome
        usuario.contato = req.body.contato

        await UsuarioService.editarUsuario(req.body.id,usuario)
        return res.redirect('/')
    }

    static async excluirUsuario(req,res){
        const usuario = await UsuarioService.consultarUsuarioPorId(req.params.id)

        const usuarioExcluido = await UsuarioService.excluirUsuario(usuario.id)
        if(usuarioExcluido){
            if(usuario.imagem){
                excluirImgPerfilUsuario(usuario.imagem)
            }            
            return res.status(200).send('concluido');
        }
        return res.status(500).send('erro');
    }
}