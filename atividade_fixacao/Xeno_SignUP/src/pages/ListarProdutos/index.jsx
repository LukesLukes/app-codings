// src\pages\ListarProdutos\index.jsx

import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css'; // Importa o MESMO CSS de listagem

function ListarProdutos() {
  // Estado para armazenar os produtos
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulação de busca de dados (useEffect)
    useEffect(() => {
     async function fetchProdutos() {
        try {
          const response = await api.get('/produtos'); // Supondo que você tenha uma API configurada
          setClientes(response.data);
          setLoading(false);
        } catch (error) {
          console.error('Erro ao buscar produtos:', error);
          setLoading(false);
        }
      }
  
      fetchProdutos();
  }, []);
      
      if (loading) {
        return <div>Carregando produtos...</div>;
      }
      
  // Função para formatar a data (opcional, mas bom para UX)
  const formatarValidade = (data) => {
    if (!data || data === "N/A") return "N/A";
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <div className="page-container">
      <Header />
      
      <main className="list-page-content">
        <h1 className="list-title">Lista de Produtos</h1>

        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Lote</th>
                <th>Validade</th>
                <th>Categoria</th>
                <th>Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {produtos.map(produto => (
                <tr key={produto.id}>
                  <td>{produto.id}</td>
                  <td>{produto.nome}</td>
                  <td>{produto.lote}</td>
                  <td>{formatarValidade(produto.validade)}</td>
                  <td>{produto.categoria}</td>
                  <td>{produto.quantidade}</td>
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

export default ListarProdutos;