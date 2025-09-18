// src\pages\Servicos\index.jsx

import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Servicos() {
    return (
        <section className="servicos">
            <h1>Nossos Serviços</h1>
            <p>Oferecemos uma variedade de serviços para atender às suas necessidades. Explore nossas opções abaixo.</p>

            <div className="grid cols-3">
                <div className="card">
                    <h2>Desenvolvimento Web</h2>
                    <p>Criação de sites modernos e responsivos para sua presença online.</p>
                </div>
                <div className="card">
                    <h2>Marketing Digital</h2>
                    <p>Estratégias eficazes para aumentar sua visibilidade e alcançar seu público-alvo.</p>
                </div>
                <div className="card">
                    <h2>Consultoria de TI</h2>
                    <p>Orientação especializada para otimizar seus processos tecnológicos.</p>
                </div>
                <div className="card">
                    <h2>Design Gráfico</h2>
                    <p>Criação de identidades visuais impactantes para sua marca.</p>
                </div>
                <div className="card">
                    <h2>Suporte Técnico</h2>
                    <p>Assistência rápida e eficiente para resolver seus problemas tecnológicos.</p>
                </div>
                <div className="card">
                    <h2>Treinamento e Workshops</h2>
                    <p>Capacitação para sua equipe em diversas áreas de tecnologia e marketing.</p>
                </div>
            </div>
        </section>
    );
}

export default Servicos;