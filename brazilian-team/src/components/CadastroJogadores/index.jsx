// src\components\CadastroJogadores\index.jsx

import React, { useState } from 'react';
import './styles.css';

function CadastroJogadores({ aoCadastrar }) {
    const [nome, setNome] = useState('');
    const [posicao, setPosicao] = useState('Atacante');
    const [imagem, setImagem] = useState('');
    const [gols, setGols] = useState('');
    const [assistencias, setAssistencias] = useState('');
    const [cartoesAmarelos, setCartoesAmarelos] = useState('');
    const [cartoesVermelhos, setCartoesVermelhos] = useState('');
    const [jogos, setJogos] = useState('');
    const [vitorias, setVitorias] = useState('');
    const [derrotas, setDerrotas] = useState('');
    const [empates, setEmpates] = useState('');
    const [camisa, setCamisa] = useState('');

    const aoSubmeter = (evento) => {
        evento.preventDefault();
        aoCadastrar({
            nome,
            posicao,
            imagem,
            gols,
            assistencias,
            cartoesAmarelos,
            cartoesVermelhos,
            jogos,
            vitorias,
            derrotas,
            empates,
            camisa
        });
        setNome('');
        setPosicao('Atacante');
        setImagem('');
        setGols('');
        setAssistencias('');
        setCartoesAmarelos('');
        setCartoesVermelhos('');
        setJogos('');
        setVitorias('');
        setDerrotas('');
        setEmpates('');
        setCamisa('');
    };
    return (
        <section className="cadastro-jogadores">
            <form onSubmit={aoSubmeter}>
                <h2>Preencha os dados para cadastrar o <strong>jogador</strong></h2>
                <input
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    placeholder="Nome"
                    required
                    type="text"
                />
                <select
                    value={posicao}
                    onChange={evento => setPosicao(evento.target.value)}
                    required
                >
                    <option>Atacante</option>
                    <option>Meio-campista</option>
                    <option>Defensor</option>
                    <option>Goleiro</option>
                </select>
                <input
                    value={imagem}
                    onChange={evento => setImagem(evento.target.value)}
                    placeholder="Imagem (URL)"
                    type="text"
                />
                <input
                    value={gols}
                    onChange={evento => setGols(Number(evento.target.value))}
                    placeholder="Gols"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={assistencias}
                    onChange={evento => setAssistencias(Number(evento.target.value))}
                    placeholder="Assistências"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={cartoesAmarelos}
                    onChange={evento => setCartoesAmarelos(Number(evento.target.value))}
                    placeholder="Cartões Amarelos"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={cartoesVermelhos}
                    onChange={evento => setCartoesVermelhos(Number(evento.target.value))}
                    placeholder="Cartões Vermelhos"
                    required
                    type="number"
                    min="0"
                />  
                <input
                    value={jogos}
                    onChange={evento => setJogos(Number(evento.target.value))}
                    placeholder="Jogos"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={vitorias}
                    onChange={evento => setVitorias(Number(evento.target.value))}
                    placeholder="Vitórias"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={derrotas}
                    onChange={evento => setDerrotas(Number(evento.target.value))}
                    placeholder="Derrotas"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={empates}
                    onChange={evento => setEmpates(Number(evento.target.value))}
                    placeholder="Empates"
                    required
                    type="number"
                    min="0"
                />
                <input
                    value={camisa}
                    onChange={evento => setCamisa(evento.target.value)}
                    placeholder="Número da Camisa"
                    required
                    type="text"
                />
                <button type="submit">Cadastrar Jogador</button>
            </form>
        </section>
    );
}

export default CadastroJogadores;
