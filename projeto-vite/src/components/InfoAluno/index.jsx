// src\components\InfoAluno\index.jsx

import './styles.css';

function InfoAluno() {
    const nome = "João Silva";
    const idade = 20;
    const curso = "Desenvolvimento de Sistemas";
    
    return (
        <>
        <div className="info-aluno">
            <h2>Informações do Aluno</h2>
            <p><strong>Nome:</strong> { nome }</p>
            <p><strong>Idade</strong> { idade } anos</p>
            <p><strong>Curso:</strong> { curso }</p>
            {/* Adicione mais informações conforme necessário */}
        </div>
        </>
    );
}

export default InfoAluno;