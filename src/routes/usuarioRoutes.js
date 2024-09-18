const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

const {armazenarImgPerfilUsuario} = require('../middleware/armazenarImgPerfilUsuario')

router.get('/criar',UsuarioController.paginaAdicionarUsuario)
router.post('/criar',armazenarImgPerfilUsuario.single('imagem'),UsuarioController.adicionarUsuario)
router.get('/editar/:id',UsuarioController.paginaEditarUsuario)
router.post('/editar',armazenarImgPerfilUsuario.single('imagem'),UsuarioController.editarUsuario)
router.delete('/excluir/:id',UsuarioController.excluirUsuario)
router.get('/',UsuarioController.paginaHome)

module.exports = router
