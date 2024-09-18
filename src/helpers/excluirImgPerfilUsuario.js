const fs = require('fs');

function excluirImgPerfilUsuario(arquivo){
  try{
      fs.unlink('uploads/img_perfil_usuario/'+arquivo, (err) =>{
      if (err) throw err;
    })
  } catch(erro){
    console.log(erro)
  }
  
}

module.exports = excluirImgPerfilUsuario
