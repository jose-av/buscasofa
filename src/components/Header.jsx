import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png';
import './Header.css';

function Header({ user, onLogout }) {
    const navigate = useNavigate(); 

    const handleLogout = () => {
        localStorage.removeItem('token');
        if (onLogout) {
            onLogout(); 
        }
        navigate('/login');
    };

    return (
        <header>
            <nav className="header-nav">
                {/* Añadimos la clase logo-link para controlarlo desde el CSS */}
                <Link to="/" className="logo-link">
                    <img src={logo} alt="Logo" className="header-logo" />
                </Link>
                
                <Link className='buscador' to="/lista">Buscador</Link>
                <Link className='mapa' to="/mapa">Mapa</Link>
                <Link className='about' to="/about">Quienes somos</Link>
                
                <span className="header-user-actions">
                    {(!user) &&
                        <>
                            <Link className='login' to="/login">Login</Link>
                            <Link className='registro' to="/registro">Registro</Link>
                        </>
                    }
                    {user &&
                        <>
                            <span className="welcome-text">Bienvenido, <Link to="/perfil">{user}</Link></span>
                            <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
                        </>
                    }
                </span>
            </nav>
        </header>
    );
}

export default Header;