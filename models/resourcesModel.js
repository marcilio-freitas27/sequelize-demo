
//importar banco e model
const database = require('../db');
const Produto = require('../controllers/produtoController');
const moment = require('moment');
// const Date = require("DATE");
//verifica se a tabela foi criada. Caso não, cria.
database.sync();

const createData = async (req, res, result) => {
    const { 
        cnpj,
        nome,
        representante_legal,
        email,
        telefone,
        endereco
    } = await req.body;
    // criar: campos recebem os dados
    const novoProduto = await Produto.create({
        cnpj:cnpj,
        nome: nome,
        representante_legal: representante_legal,
        email:email,
        telefone:telefone,
        endereco:endereco

    });

    res.send(novoProduto);
}

const selectData = async (req, res, result) => {
    // consulta de todos os dados. 
    // tb pode usar o attr where 
    const novoProduto = await Produto.findAll();
    
    res.send(novoProduto);
}

const updateData = async (req, res, result) => {
    const { id } = req.params;
    const { 
        cnpj,
        nome,
        representante_legal,
        email,
        telefone,
        endereco
    } = req.body;
    // consulta por primary key
    const novoProduto = await Produto.findByPk(id);
    //o campo da tabela recebe um novo valor
    // novoProduto.telefone = '8432722747';
    novoProduto.set({
        cnpj,
        nome,
        representante_legal,
        email,
        telefone,
        endereco
    });
    // salva as alterações
    await novoProduto.save();
    
    res.send(novoProduto);
}

const deleteData = async (req, res, result) => {
    const { id } = req.params;
    // deletar com base na id usando where
    const novoProduto = await Produto.destroy({
        where: { 
            cnpj: id
        }
    });
   
    res.send(novoProduto);
}


const differenceDate = async (req, res, result) => {
    // consulta de todos os dados. 
    // tb pode usar o attr where 
    const novoProduto = await Produto.findAll();
    const antes = moment(novoProduto[0]["createdAt"]);
    const depois = moment();

    console.log("before: ",antes,"\n","after: ", depois);
    const meses = depois.diff(antes,'month');

    const diferenca = `${meses} mês(es) de cadastro.`;
    res.send(diferenca);
}

module.exports = {
    createData,
    selectData,
    updateData,
    deleteData,
    differenceDate
}