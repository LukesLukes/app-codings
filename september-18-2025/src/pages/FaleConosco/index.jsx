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
                        <input type="text" name="nome" placeholder='Seu nome' required />
                    </label>
                    <label className='field'>
                        <span>Email</span>
                        <input type="email" name="email" placeholder='Seu email' required />
                    </label>
                    <label className='field'>
                        <span>Assunto</span>
                        <input type="text" name="assunto" placeholder='Assunto da mensagem' required />
                    </label>
                    <label className='field'>
                        <span>Mensagem</span>
                        <input type='text' name="mensagem" placeholder='Escreva sua mensagem aqui...' required />
                    </label>   
                </div>
                <button type="submit" className='btn'>Enviar Mensagem</button>
            </form>
        </section>
    );
}

export default FaleConosco;
