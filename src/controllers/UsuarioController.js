const UsuarioService = require('../services/UsuarioService')
const UsuarioDto = require('../dtos/UsuarioDto')

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
        try{
            let usuarioDto = new UsuarioDto(usuario)
            usuarioDto.id = req.params.id
            return res.render('pages/editar',{usuarioDto})            
        } catch(erro){
            console.log(erro)
            return res.status(500)
        }
    }

    static async adicionarUsuario(req,res){
        if(req.file){
            req.body.imagem = req.file.filename
        } else{
            req.body.imagem = null
        }

        try{
            await UsuarioService.cadastrarNovoUsuario(new UsuarioDto(req.body))
        } catch(erro){
            console.log(erro)
        }
        
        return res.redirect('/')
    }

    static async editarUsuario(req,res){
        if(req.file){
            req.body.imagem = req.file.filename
        } else{
            req.body.imagem = null
        }

        try{
            await UsuarioService.editarUsuario(req.body.id, new UsuarioDto(req.body))
        } catch(erro){
            console.log(erro)
        }
        
        return res.redirect('/')
    }

    static async excluirUsuario(req,res){
        const usuarioExcluido = await UsuarioService.excluirUsuario(req.params.id)
        if(usuarioExcluido){                 
            return res.status(200).send('concluido')
        }

        return res.status(500).send('erro')
    }
}