// src\components\Footer\index.jsx

import React from 'react';
import './styles.css';

function Footer() {
  // Pega o ano atual dinamicamente
  const currentYear = new Date().getFullYear();
  
  // Informações do footer baseadas na terceira imagem
  const companyAddress = "Avenida Dendezeiros, 90, Salvador - Bahia, Brasil"; // Substitua pelo seu endereço

  return (
    <footer className="footer-container">
      <p className="footer-text">
        &copy; {currentYear} Xeno SignUP. Todos os direitos reservados.
      </p>
      <p className="footer-text">
        {companyAddress}
      </p>
    </footer>
  );
}

export default Footer;