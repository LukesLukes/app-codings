// src\components\Header\index.jsx

import React from 'react';
import './styles.css';

function Header() {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <ul className="nav-list">
          {/* Links baseados na terceira imagem */}
          <li><a href="/" className="nav-item">Página home</a></li>
          <li><a href="/cadastro-clientes" className="nav-item">Cadastro Clientes</a></li>
          <li><a href="/cadastro-produtos" className="nav-item">Cadastro Produtos</a></li>
          <li><a href="/lista-clientes" className="nav-item">Lista Clientes</a></li>
          <li><a href="/lista-produtos" className="nav-item">Lista Produtos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;