// project2\src\components\listItems\index.js

import React from 'react';
import './style.css';

const ListarProdutos = ({ itens }) => {
    return (
        <div className="listar-produtos">
            <h2>Itens na Lista:</h2>
            <ol>
                {itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ol>
        </div>
    );
}

export default ListarProdutos;