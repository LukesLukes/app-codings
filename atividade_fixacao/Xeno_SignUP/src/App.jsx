import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Importa os componentes de Layout
import Header from './components/Header';
import Footer from './components/Footer';

// Importa as Páginas
import HomePage from './pages/HomePage';
import CadastroClientes from './pages/CadastroClientes';
import CadastroProdutos from './pages/CadastroProdutos';
import ListarClientes from './pages/ListarClientes';
import ListarProdutos from './pages/ListarProdutos';

// Importa o CSS Global
import './App.css';

/**
 * Componente de Layout
 * Este componente define a estrutura da página (Header, Conteúdo e Footer)
 * O <Outlet /> é onde o react-router-dom irá renderizar a página da rota atual.
 */
function AppLayout() {
  return (
    <div className="app-layout-container">
      <Header />
      <main className="app-content">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

// Componente Principal
function App() {
  return (
    <BrowserRouter>
      {/* Configuração do React-Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" // Perfeito para o tema Opera GX
      />
      
      {/* Definição das Rotas */}
      <Routes>
        {/* Rota principal que usa o AppLayout */}
        <Route path="/" element={<AppLayout />}>
          {/* As rotas filhas serão renderizadas dentro do <Outlet /> do AppLayout */}
          <Route index element={<HomePage />} />
          <Route path="/cadastro-clientes" element={<CadastroClientes />} />
          <Route path="/cadastro-produtos" element={<CadastroProdutos />} />
          <Route path="/lista-clientes" element={<ListarClientes />} />
          <Route path="/lista-produtos" element={<ListarProdutos />} />
          
          {/* Adicione uma rota "catch-all" (404) se desejar */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;