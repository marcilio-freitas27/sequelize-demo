// importar sequelize(classe) e conexão ao banco
const Sequelize = require('sequelize');
const database = require('../db');

// criar objeto com squema dos campos da tabela
const Produto = database.define('empresas', { // nome da tabela
    // campos e seu atributos
    cnpj: {
        type: Sequelize.STRING,
        // autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    representante_legal: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }}, 
    /* options necessárias para tabelas existentes*/
    {
        //mantem o nome(squelize acrescenta um s no nome das tabelas) 
        freezeTableName: true,
        //sem campos de tempo(criado em, atualizado em ).
        //usa apenas os campos originais da tabela existente
        timestamp: true,
        // createdAt: false,
        // updatedAt: false

});

module.exports = Produto;

