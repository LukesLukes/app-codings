import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'

function App() {

  return (
    <>
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Servicos' element={<Servicos />} />
          <Route path='/Sobre-Nos' element={<SobreNos />} />
          <Route path='/Fale-Conosco' element={<FaleConosco />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
