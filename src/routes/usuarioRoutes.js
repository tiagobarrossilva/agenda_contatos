const express = require('express')
const router = express.Router()

const UsuarioController = require('../controllers/UsuarioController')

const {armazenarImgPerfilUsuario} = require('../middleware/armazenarImgPerfilUsuario')


router.get('/registrar',UsuarioController.paginaAdicionarUsuario)
router.post('/registrar',armazenarImgPerfilUsuario.single('imagem'),UsuarioController.adicionarUsuario)
router.get('/usuario/:id',UsuarioController.paginaEditarUsuario)
router.delete('/usuario/:id',UsuarioController.excluirUsuario)

router.get('/',UsuarioController.paginaHome)

module.exports = router
