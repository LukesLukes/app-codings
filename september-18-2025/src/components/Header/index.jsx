// src\components\Header\index.jsx

import { NavLink } from "react-router-dom";
import './styles.css';
import logo from '../../assets/images/logo.png';

function Header() {
    return (
        <header className="header">
            <div className="header__wrap">
                <link to="/" className="Brand">
                    <img src={logo} alt="Contabilidade Dendezeiros" className="Brand__logo" />
                    <span>Contabilidade Simples</span>
                </link>
            </div>
                <nav className="Nav">
                    <NavLink to="/Servicos" className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Serviços </NavLink>

                    <NavLink to="/Sobre-Nos" className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Sobre Nós </NavLink>

                    <NavLink to="/Fale-Conosco" className={({ IsActive }) => IsActive ? 'link active' : 'link'}> Fale Conosco </NavLink>
                </nav>
        </header>
    );
}

export default Header;