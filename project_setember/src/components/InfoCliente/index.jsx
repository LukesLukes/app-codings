// src\components\InfoCliente\index.jsx

import { useState } from 'react';
import './styles.css';

import logo from '../../assets/images/logo.png'
// filepath: c:\Users\aluno.den\Downloads\app-codings\project_setember\src\components\InfoCliente\index.jsx

function InfoCliente() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    
    const [listClientes, setListaClientes] = useState([]);

    function adicionarCliente(event) {
        event.preventDefault();
        setListaClientes([...listClientes, { nome, email, telefone }]);
        setNome('');
        setEmail('');
        setTelefone('');
    }
    
    return (
        <div className="info-cliente">
            <img src={logo} alt="Logo" className="cliente-icone" />
            <h2>Adicionar Cliente</h2>
            <form onSubmit={adicionarCliente}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="tel"
                    placeholder="Telefone"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                    required
                />
                <button type="submit">Adicionar</button>
            </form>
            <hr />
            <h2>Lista de Clientes</h2>
            <ul>
                {listClientes.map((cliente, index) => (
                    <li key={index}>
                        {cliente.nome} - {cliente.email} - {cliente.telefone}
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default InfoCliente;