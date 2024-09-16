const UsuarioRepository = require('../repositories/UsuarioRepository')
const UsuarioDto = require('../dtos/UsuarioDto')

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
            const usuarioDto = new UsuarioDto(usuario)
            const usuarioArmazenado = await UsuarioRepository.create(usuarioDto)
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
            await UsuarioRepository.destroy({where:{id:id}})
            return true
        } catch(erro){
            return false
        }
    }

}
