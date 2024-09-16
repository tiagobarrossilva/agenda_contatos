const multer  = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Define o diretório de destino para os arquivos enviados
        cb(null, 'uploads/img_perfil_usuario');
    },
    filename: (req, file, cb) => {
        // Define o nome do arquivo a ser salvo
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); // Adiciona um timestamp ao nome do arquivo
    }
    
})

// Função para filtrar tipos de arquivo
const fileFilter = (req, file, cb) => {
    // Aceitar apenas arquivos JPEG e PNG
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true); // Aceitar o arquivo
    } else {
      return cb(new Error('Tipo de arquivo não permitido'), false); // Rejeitar o arquivo
    }
  };

// Inicializa o middleware Multer
const armazenarImgPerfilUsuario = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {fileSize: 1 * 1024 * 1024} // limite de 1 MB
});

module.exports = {armazenarImgPerfilUsuario}