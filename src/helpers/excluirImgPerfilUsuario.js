const fs = require('fs');

function excluirImgPerfilUsuario(arquivo){
  
  fs.unlink('uploads/img_perfil_usuario/'+arquivo, (err) =>{
    if (err) throw err;
  })
}

module.exports = excluirImgPerfilUsuario
