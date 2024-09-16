const session = require('express-session')
const SequelizeStore = require("connect-session-sequelize")(session.Store)
const conn = require('./connectDatabaseConfig')

const sessionConfig = session({
    store: new SequelizeStore({
        db: conn,
    }),

    secret: 'keyboard cat',
    resave: false,
    
    // cria a sessão quando o usuario acessa o site
    saveUninitialized: false,

    cookie: {
        secure: false,
        maxAge: 10 * 60 * 1000,
        sameSite: 'lax'
    },

    // reseta o tempo de expiração quando e feito alguma solicitação
    rolling: true,
})

module.exports = sessionConfig