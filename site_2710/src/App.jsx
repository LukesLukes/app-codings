import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import CadastroPage from './pages/CadastroPage'
import HomePage from './pages/HomePage'
import ListarUsuarios from './pages/ListarUsuarios'
import './App.css'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <ToastContainer position='top-right' autoClose={3000} />
      <Header />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/listar' element={<ListarUsuarios />} />
        </Routes>
      </main>
      <Footer />    
    </>
  )
}

export default App
