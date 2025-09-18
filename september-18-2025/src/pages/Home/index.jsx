// src\pages\Home\index.jsx

import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
    return (
        <section className="home">
            <section className="hero">
                <div className="hero__wrap">
                    <h1>Bem-vindo ao Nosso Site</h1>
                    <p>Descubra nossos serviços e entre em contato conosco para mais informações.</p>
                    <div className="hero__cta">
                        <link to="/servicos" className="btn">Nossos Serviços</link>
                </div>
                </div>
                <div className="hero__img">
                    <img src={ Hero }  alt="Imagem de destaque" />
                </div>
            </section>
            <section className="features">
                <h2>Por que nos escolher?</h2>
                <div className="grid cols-3">
                    <div className="card">
                        <h3>Qualidade</h3>
                        <p>Oferecemos serviços de alta qualidade para garantir a satisfação do cliente.</p>
                    </div>
                    <div className="card">
                        <h3>Experiência</h3>
                        <p>Nossa equipe é composta por profissionais experientes e dedicados.</p>
                    </div>
                    <div className="card">
                        <h3>Suporte</h3>
                        <p>Estamos sempre disponíveis para ajudar e resolver suas dúvidas.</p>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;