// src\components\BackgroundPrincipal\index.jsx

import React from 'react';
import './styles.css';


function BackgroundPrincipal({ children }) {

    return (
        <div className="background-principal">
            {children}
        </div>
    );
}

export default BackgroundPrincipal;