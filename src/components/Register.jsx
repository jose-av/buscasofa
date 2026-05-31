import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [msg, setMsg] = useState('');
  
  const navigate = useNavigate();

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setMsg('');

    try {
      const res = await fetch('http://localhost:4000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await res.json();

      if (res.ok) {
        navigate('/login'); 
      } else {
        setMsg(data.message || 'Error al registrar el usuario');
      }

    } catch (error) {
      setMsg('Hubo un problema de conexión con el servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='register-form'>
      <h2>Registro de Usuario</h2>
      <input name="username" placeholder="Usuario" onChange={handleChange} required />
      <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
      <input name="password" type="password" placeholder="Contraseña" onChange={handleChange} required />
      <button type="submit">Registrarse</button>
      {msg && <p className="form-message">{msg}</p>} {/* Le añadimos una clase para el CSS */}
    </form>
  );
}

export default Register;