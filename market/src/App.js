// market\src\App.js

import React, { useState } from 'react';
import './App.css';
import logo from '../src/assets/images/logo_senai.png';

import AdicionarProduto from './components/addItems';
import ListarProdutos from './components/listItems';

function App() {
  const [itens, setItens] = useState(['Mouse', 'Teclado', 'Monitor']);

  const adicionarItem = (item) => {
    const trimmedItem = item.trim();
  
    if (itens.includes(trimmedItem)) {
      alert('Item já existe na lista!');
      return;
    }
  
    setItens([...itens, trimmedItem]);
  };

  return (
    <div className="App">
      <img src={logo} alt="Logo do Senai" className="logo" />
      <h1>Lista de Compras</h1>
      <AdicionarProduto onAdd={adicionarItem} />
      <hr />
      <h2>Lista de Produtos</h2>
      <ListarProdutos itens={itens} />
    </div>
  );
}

export default App;