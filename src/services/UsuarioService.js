const UsuarioRepository = require('../repositories/UsuarioRepository')
const excluirImgPerfilUsuario = require('../helpers/excluirImgPerfilUsuario')

module.exports = class UsuarioService{

    static async consultarUsuarioPorId(id){
        try{
            const usuario = await UsuarioRepository.findByPk(id)

            // remover dados extras que vem do banco de dados
            const objUsuario = usuario ? usuario.get({ plain: true }) : null;
            
            if(objUsuario){
                return objUsuario
            }
            return false
        } catch(erro){
            return false
        }
    }

    static async cadastrarNovoUsuario(usuario){
        try{                      
            const usuarioArmazenado = await UsuarioRepository.create(usuario)
            return usuarioArmazenado
        } catch(erro){
            return false
        }
    }

    static async consultarTodosUsuarios(){
        try{
            const usuarios = await UsuarioRepository.findAll(({ raw: true }))
            return usuarios
        } catch(erro){
            return false
        }
    }

    static async excluirUsuario(id){
        try{
            const usuario = await UsuarioRepository.findByPk(id)
            if(usuario.imagem){
                excluirImgPerfilUsuario(usuario.imagem)
            }
            await UsuarioRepository.destroy({where:{id:id}})
            return true
        } catch(erro){
            return false
        }
    }

    static async editarUsuario(id,usuario){
        try{
            const usuarioDadosAntigos = await UsuarioRepository.findByPk(id)
            if(usuario.imagem){
                if(usuarioDadosAntigos.imagem){                
                    excluirImgPerfilUsuario(usuarioDadosAntigos.imagem)                                      
                }
            } else{
                usuario.imagem = usuarioDadosAntigos.imagem
            }
            await UsuarioRepository.update(usuario,{where: {id:id}})
            return true
        } catch(erro){
            return false
        }
    }

}
