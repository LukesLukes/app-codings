import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [itens, setItens] = useState(['Arroz', 'Feijão', 'Macarrão']);
  const [darkMode, setDarkMode] = useState(false); // Estado para o modo escuro

  const adicionarItem = () => {
    if (itens.includes(item)) {
      alert('Item já existe na lista!');
      return;
    }
    setItens([...itens, item]);
    setItem('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alterna entre claro e escuro
  };

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}> {/* Aplica a classe com base no estado */}
      <h1>Lista de Compras</h1>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Digite o nome do item"
      />
      <button onClick={adicionarItem}>Adicionar Item</button>
      <button onClick={toggleDarkMode}>
        {darkMode ? 'Modo Claro' : 'Modo Escuro'}
      </button>

      <hr />
      <h2>Itens na Lista:</h2>
      <ol>
        {itens.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;