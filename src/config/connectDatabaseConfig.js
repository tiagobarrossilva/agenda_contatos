const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/database.sqlite',
    
    // opção para visualizar as instruções sql no terminal
    logging: false
})

try{
    sequelize.authenticate()
    console.log('conectou ao banco de dados')
} catch(error){
    console.log(`não foi possivel conectar ao banco de dados ${error}`)
}

module.exports = sequelize