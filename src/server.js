require('dotenv').config()
const PORT = process.env.PORT

const app = require('./app')
const conn = require('./config/connectDatabaseConfig')

conn.sync()
    .then(() =>{
        app.listen(PORT, ()=>{console.log('servidor iniciado')})
    })
    .catch((erro) => console.log(erro))

// para redefinir as tabelas no banco de dados usar a opção: sync({force:true})
