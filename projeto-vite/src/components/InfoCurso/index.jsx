// src\components\InfoCurso\index.jsx

import './styles.css';

function InfoCurso() {
    const nomeCurso = "Desenvolvimento de Sistemas";
    const cargaHoraria = 1200; // em horas
    const local = "Avenida Dendezeiros - Bahia";
    const dataInicio = "01/02/2025";
    const dataTermino = "30/11/2026";

    return (
        <>
        <div className="dados-curso">
            <h2>Dados do Curso</h2>
            <p><strong>Nome do Curso:</strong> { nomeCurso }</p>
            <p><strong>Carga Horária:</strong> { cargaHoraria } horas</p>
            <p><strong>Local:</strong> { local }</p>
            <p><strong>Data de Início:</strong> { dataInicio }</p>
            <p><strong>Data de Término:</strong> { dataTermino }</p>
            {/* Adicione mais informações conforme necessário */}
        </div>
        </>
    );
}

export default InfoCurso;
