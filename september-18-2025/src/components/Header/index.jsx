// src\components\Header\index.jsx

import { Link, NavLink } from "react-router-dom";
import './styles.css';
import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="Brand">
                    <img src={logo} alt="Contabilidade Dendezeiros" className="Brand__logo" />
                    <span>Contabilidade Simples</span>
                </Link>
                <nav className="Nav">
                    <NavLink to="/Servicos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Serviços</NavLink>
                    <NavLink to="/Sobre-Nos" className={({ isActive }) => isActive ? 'link active' : 'link'}>Sobre Nós</NavLink>
                    <NavLink to="/Fale-Conosco" className={({ isActive }) => isActive ? 'link active' : 'link'}>Fale Conosco</NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;