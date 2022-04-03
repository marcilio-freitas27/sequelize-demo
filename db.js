// conexão com o banco

const Sequelize = require('sequelize'); //classe Sequelize
// nome do banco, usuario, senha, options: dialect = banco, js para mysql
// instancia de Sequelize
const sequelize = new Sequelize('sistemas', 'postgres', 'pgadmin', {
    dialect: 'postgres',
    host: 'localhost'
    //port: 3306
});

// exportar
module.exports = sequelize;
