const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

// Criando conexão com o banco de dados MySQL
const sequelize = new Sequelize(
    process.env.DB_NAME || 'atividade_fixacao_db',
    process.env.DB_USER || 'root',
    process.env.DB_PASS || '', 
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql'
    }
);

// Definindo o modelo para tabela no banco de dados
const Funcionario = sequelize.define('Funcionario', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    rg: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    matricula: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    dataNascimento: {
        type: DataTypes.STRING,
        allowNull: false
    },
    salario: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cargo: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

const Cliente = sequelize.define('Cliente', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    protocoloAtendimento: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lote: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    validade: {
        type: DataTypes.DATEONLY,
        allowNull: false
    }
});

const app = express(); // Criando aplicação Express
app.use(cors()); // Permite que API aceite conexão do frontend
app.use(express.json()); // Para interpretar JSON no body das requisições

const port = 3000; // Porta onde a API estará disponível

// Rota de teste
app.get('/', (req, res) => {
    res.send('API está funcionando!');
});

// Rota para listar todos os funcionários
app.get('/funcionarios', async (req, res) => {
    const funcionarios = await Funcionario.findAll();
    res.json(funcionarios);
});

// Rota para criar um novo funcionário
app.post('/funcionarios', async (req, res) => {
    try {
        const { nome, cpf, rg, matricula, dataNascimento, salario, telefone, email, cargo } = req.body;
        const novoFuncionario = await Funcionario.create({ 
            nome, cpf, rg, matricula, dataNascimento, salario, telefone, email, cargo 
        });
        res.status(201).json(novoFuncionario);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(400).json({ mensagem: "Dados únicos já cadastrados (CPF, RG, matrícula ou email)." });
        } else {
            res.status(500).json({ mensagem: "Erro interno do servidor", error: error.message });
        }
    }
});

// Rota para listar todos os clientes
app.get('/clientes', async (req, res) => {
    const clientes = await Cliente.findAll();
    res.json(clientes);
});

// Rota para criar um novo cliente
app.post('/clientes', async (req, res) => {
    try {
        const { nome, dataNascimento, protocoloAtendimento } = req.body;
        const novoCliente = await Cliente.create({ nome, dataNascimento, protocoloAtendimento });
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ mensagem: "Cliente ja cadastrado." });
    }
});

// Rota para listar todos os produtos
app.get('/produtos', async (req, res) => {
    const produtos = await Produto.findAll();
    res.json(produtos);
});

// Rota para criar um novo produto
app.post('/produtos', async (req, res) => {
    try {
        const { nome, lote, validade } = req.body;
        const novoProduto = await Produto.create({ nome, lote, validade });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(400).json({ mensagem: "Produto ja cadastrado." });
    }
});

// Sincronizando modelos com o banco de dados e iniciando o servidor
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`🦣 API rodando em http://localhost:${port}`);
        console.log('✅ Conectado com sucesso ao banco de dados MySQL.');
    });
}).catch(err => {
    console.error('😡 Erro ao conectar com o banco de dados:', err);
});

