// src\components\Footer\index.jsx

import './styles.css'

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.
                <br /> Desenvolvido por SENAI.
            </p>
        </footer>
    );
}

export default Footer;