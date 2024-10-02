const express = require('express')
const exphbs = require('express-handlebars')

const app = express();

// necessario para ler o body
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//modelos
const Usuario = require('./models/Usuario')

//rotas
const usuarioRoutes = require('./routes/usuarioRoutes')
app.use('/',usuarioRoutes)

// template egine
const hbs = exphbs.create({
    partialsDir: ['views/partials'] //diretorio dos partials
})
app.engine('handlebars',hbs.engine)
app.set('view engine','handlebars')
app.set('views','src/views') //pasta onde ficam as views

// configuração do diretorio com os arquivos estaticos
app.use(express.static('./'))

module.exports = app
