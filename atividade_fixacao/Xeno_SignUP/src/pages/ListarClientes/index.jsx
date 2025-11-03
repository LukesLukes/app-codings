import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css'; // O CSS de listagem
import { set } from 'react-hook-form';

function ListarClientes() {
  // Estado para armazenar os clientes
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de busca de dados (useEffect)
  useEffect(() => {
   async function fetchClientes() {
      try {
        const response = await api.get('/clientes'); // Supondo que você tenha uma API configurada
        setClientes(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao buscar clientes:', error);
        setLoading(false);
      }
    }

    fetchClientes();
}, []);
    
    if (loading) {
      return <div>Carregando clientes...</div>;
    }

  return (
    <div className="page-container">
      <Header />
      
      <main className="list-page-content">
        <h1 className="list-title">Lista de Clientes</h1>
        {clientes.length === 0 ? (
          <p>Nenhum cliente cadastrado.</p>
        ) : null}

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Forma de Pagamento</th>
                <th>Endereço</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.telefone}</td>
                  <td>{cliente.formaPagamento}</td>
                  <td>{cliente.endereco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default ListarClientes;