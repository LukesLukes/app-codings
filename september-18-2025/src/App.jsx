import './App.css'

import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'
import FaleConosco from './pages/FaleConosco'
import NotFound from './pages/NotFound'

function App() {
  const [count, setCount] = useState(0)

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
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
