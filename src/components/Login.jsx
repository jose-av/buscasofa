import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Login({ onLogin }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [msg, setMsg] = useState('');
  
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');
    
    try {
      const res = await fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMsg('¡Bienvenido, ' + data.username + '!');
        localStorage.setItem('token', data.token);
        if (onLogin) onLogin(data.username);
        
        setTimeout(() => {
          navigate('/lista');
        }, 1500); 

      } else {
        setMsg(data.message || 'Credenciales incorrectas');
      }
    } catch (error) {
      setMsg('Hubo un problema de conexión con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>Iniciar Sesión</h2>
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Entrar</button>
      {msg && <p className="form-message">{msg}</p>}
    </form>
  );
}

export default Login;