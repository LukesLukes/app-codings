// src\pages\HomePage\index.jsx

import React from 'react';
import Header from '../../components/Header'; // Importa o Header
import Footer from '../../components/Footer'; // Importa o Footer
import './styles.css'; // Importa o CSS específico da HomePage

function HomePage() {
  return (
    <div className="homepage-container">
      <Header /> {/* Renderiza o Header no topo */}
      
      <main className="homepage-content">
        <h1 className="homepage-title">
          Bem-vindo ao Sistema de Gestão
        </h1>
        <p className="homepage-description">
          Utilize o menu de navegação acima para cadastrar ou listar clientes e produtos.
          Este projeto foi construído com React e consome uma API Node.js.
        </p>
      </main>

      <Footer /> {/* Renderiza o Footer na base */}
    </div>
  );
}

export default HomePage;