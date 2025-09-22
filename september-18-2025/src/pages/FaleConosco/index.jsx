// src\pages\FaleConosco\index.jsx

import React from 'react';
import './styles.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function FaleConosco() {
    function handleSubmit(event) {
        event.preventDefault();
        alert('Mensagem enviada com sucesso!');
    }

    return (
        <section className="fale-conosco">
            <h1>Fale Conosco</h1>
            <p>Estamos aqui para ajudar! Entre em contato conosco através do formulário abaixo.</p>

            <form className="form" onSubmit={handleSubmit}>
                <div className='grid cols-3'>
                    <label className='field'>
                        <span>Nome</span>
                        <textarea name="nome" placeholder="Seu nome" rows="6" required></textarea>
                    </label>
                    <label className='field'>
                        <span>Email</span>
                        <textarea name="email" placeholder="Seu email" rows="6" required></textarea>
                    </label>
                    <label className='field'>
                        <span>Assunto</span>
                        <textarea name="assunto" placeholder="O assunto..." rows="6" required></textarea>
                    </label>
                    <label className='field'>
                        <span>Mensagem</span>
                        <textarea name="mensagem" placeholder="Escreva sua mensagem aqui..." rows="6" required></textarea>
                    </label>   
                </div>
                <button type="submit" className='btn'>Enviar Mensagem</button>
            </form>
        </section>
    );
}

export default FaleConosco;
