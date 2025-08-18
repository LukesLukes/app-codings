import React, { useState } from 'react';
import './App.css';

function App() {
  // Cria uma  variável e um setter (forma de adicionar dados) para o usuário
  const [usuario, setUsuario] = useState('');
  // Cria uma  variável e um setter (forma de adicionar dados) para os usuários
  const [usuarios, setUsuarios] = useState(['João', 'Maria', 'Pedro']);

  // Função para adicionar um usuário à lista
  const adicionarUsuario = () => {

    // Se o usuário já existir, exibe um alerta.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    }
    
    // Se não existir, adiciona o usuário à lista e limpa o campo de entrada.
    // Adiciona todos os usuários já existentes e o novo usuário.
    setUsuarios([...usuarios, usuario]);
    setUsuario('');
  };
  
  
  return (
    <div className="App">
      <h1>Gerenciador de Usuários</h1>
      <input
        type="text"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
        placeholder="Digite o nome do usuário"
      />
      <button onClick={adicionarUsuario}>Adicionar Usuário</button>
      
      <hr />
      <h2>Usuários Cadastrados:</h2>
      <ol>
        {usuarios.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
