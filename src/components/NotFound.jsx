import Reasc from 'react';
import { Link } from 'react-router-dom';

export default function NotFound(){
    return (
        <div style={{ textAlign: 'center', padding: '50px' }}>
            <h1>404</h1>
            <h2>Página no encontrada</h2>
            <p>No hemos encontrado la página que buscas</p>

            <Link to="/" style={{ color:'blue', textDecoration: 'undrline' }}>
                Volver al inicio
            </Link>
        </div>
        );
    }