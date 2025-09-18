// src\components\Footer\index.jsx

import React from 'react';
import './styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div>
            <strong>Contabilidade Dendezeiros</strong> - CNPJ: 00.000.000/0001-00
        </div>
        <div>
            Avenida Dendezeiros, 890 - Bonfim - Salvador/BA
        </div>
        <div className='copy'>
            © {new Date().getFullYear()} Contabilidade Dendezeiros. Todos os direitos reservados.
        </div>
        </div>
    </footer>
  );
}

export default Footer;