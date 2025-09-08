// src\components\DarkMode\index.jsx

import { useState, useEffect } from 'react';
import './styles.css';

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
            className={`darkmode-toggle${dark ? ' active' : ''}`}
            onClick={() => setDark(!dark)}
        >
            {dark ? '🌙 Tema Claro' : '🌞 Tema Escuro'}
        </button>
    );
}

export default DarkMode;