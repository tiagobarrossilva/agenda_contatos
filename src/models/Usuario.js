const { DataTypes } = require('sequelize')
const db = require('../config/connectDatabaseConfig')

const Usuario = db.define('Usuario',{
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome:{
        type: DataTypes.STRING,
        require: true,
        allowNull: false, //não permite valor nulo
    },
    contato:{
        type: DataTypes.STRING,
        require: true,
        allowNull: false, //não permite valor nulo
    },
    imagem:{
        type: DataTypes.STRING,
        require: true,
    },
})

module.exports = Usuario