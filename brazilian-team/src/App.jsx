import './App.css'
import BackgroundPrincipal from './components/BackgroundPrincipal'
import CadastroJogadores from './components/CadastroJogadores'
import DarkMode from './components/DarkMode'
import ListarJogadores from './components/ListarJogadores'
import { useState } from 'react'

function App() {

  const [jogadores, setJogadores] = useState([]);

    function aoCadastrar(jogador) {
    setJogadores([...jogadores, jogador]);
  }


  return (
    <>
    <BackgroundPrincipal />
    <DarkMode />
    <CadastroJogadores aoCadastrar={aoCadastrar}/>
    <ListarJogadores jogadores={jogadores}/>
    </>
  )
}

export default App
