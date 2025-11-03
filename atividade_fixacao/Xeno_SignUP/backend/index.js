// index.js

const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');
const app = express();

const sequelize = new Sequelize('service_api_db', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    formaPagamento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false
    },
    validade: {
        type: DataTypes.STRING,
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantidade: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

app.post('/clientes', async (req, res) => {
    const { nome, email, telefone, formaPagamento, endereco } = req.body;
    try {
        const novoCliente = await Cliente.create({ nome, email, telefone, formaPagamento, endereco });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar cliente' });
    }
});

app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

app.post('/produtos', async (req, res) => {
    const { nome, lote, validade, categoria, quantidade } = req.body;
    try {
        const novoProduto = await Produto.create({ nome, lote, validade, categoria, quantidade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar produto' });
    }
});

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
        console.log('Conectado ao banco de dados MySQL');
    });
}).catch(err => {
    console.error('Erro ao conectar ao banco de dados:', err);
});


