// src\pages\Home\index.jsx

import { Link } from 'react-router-dom';
import './styles.css';
import hero from '../../assets/images/hero.png';

// Você pode usar uma biblioteca de ícones como react-icons
// Para instalar: npm install react-icons

function Home() {
  return (
    <>
      {/* Seção de Boas-Vindas (Hero) */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Soluções Contábeis para o Sucesso do seu Negócio</h1>
          <p>
            Simplificamos a contabilidade para que você possa focar no que realmente importa: o crescimento da sua empresa.
          </p>
          <Link to="/contato" className="cta-button">Fale com um Especialista</Link>
        </div>
      </section>

      {/* Seção de Prévia dos Serviços */}
      <section className="services-preview">
        <div className="container">
          <h2 className="section-title">Nossos Principais Serviços</h2>
          <div className="services-grid">
            
            <div className="service-card">
              {/* <FaBuilding size={40} className="service-icon" /> */}
              <h3>Abertura de Empresas</h3>
              <p>Cuidamos de toda a burocracia para que seu negócio comece com o pé direito, de forma rápida e segura.</p>
              <Link to="/servicos/abertura" className="card-link">Saiba Mais</Link>
            </div>

            <div className="service-card">
              {/* <FaCalculator size={40} className="service-icon" /> */}
              <h3>Assessoria Contábil</h3>
              <p>Análise completa das suas finanças para otimizar impostos e garantir a saúde financeira da sua empresa.</p>
              <Link to="/servicos/assessoria" className="card-link">Saiba Mais</Link>
            </div>

            <div className="service-card">
              {/* <FaFileSignature size={40} className="service-icon" /> */}
              <h3>Gestão Fiscal e Tributária</h3>
              <p>Planejamento e execução de todas as obrigações fiscais, evitando multas e problemas com o fisco.</p>
              <Link to="/servicos/gestao" className="card-link">Saiba Mais</Link>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;