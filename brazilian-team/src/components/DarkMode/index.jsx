// src\components\DarkMode\index.jsx

import React, { useState, useEffect } from 'react';
import './style.css';

function DarkMode() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        if (dark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [dark]);

    return (
        <button
            className="darkmode-toggle"
            onClick={() => setDark(!dark)}
            aria-label="Alternar tema escuro"
        >
            {dark ? '🌙 Tema Claro' : '🌞 Tema Escuro'}
        </button>
    );
}

export default DarkMode;