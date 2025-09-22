// src\pages\SobreNos\index.jsx

import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function SobreNos() {
    return (
        <section className="sobre-nos">
            <h1>Sobre Nós</h1>
            <p>Bem-vindo à Flores & Cia! Somos uma floricultura dedicada a trazer beleza e alegria para a sua vida através das flores. Com anos de experiência no mercado, oferecemos uma ampla variedade de flores frescas e arranjos personalizados para todas as ocasiões.</p>
            <p>Nossa missão é proporcionar momentos especiais com flores de alta qualidade e um atendimento excepcional. Seja para um aniversário, casamento, ou simplesmente para alegrar o seu dia, estamos aqui para ajudar você a escolher a flor perfeita.</p>
            <p>Venha nos visitar ou entre em contato conosco para saber mais sobre nossos produtos e serviços. Estamos ansiosos para fazer parte dos seus momentos mais importantes!</p>
        <ul>
            <li>Nossa História</li>
            <li>Nossa Missão e Valores</li>
            <li>Atendimento personalizado</li>
            <li>Localização</li>
            <li>Contato</li>
        </ul>
        </section>
    )
}
export default SobreNos;