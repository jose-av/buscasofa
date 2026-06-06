import React from 'react'
import './About.css'
import imgSabo from '../assets/sabo.jpg';
import imgZoro from '../assets/zoro.jpg';
import imgChopper from '../assets/chopper.jpg';

export default function About() {
  const teamMembers = [
    {
      id: 1,
      name: 'Jose Antonio Verrire Maza',
      role: 'Full Stack Developer',
      description: 'Líder técnico y especialista en la arquitectura completa. Fan de la eficiencia y el buen código (¡y de los revolucionarios!).',
      imagen: imgSabo
    },
    {
      id: 2,
      name: 'Victor Hugo Ponce',
      role: 'Full Stack Developer',
      description: 'Encargado de la interfaz de usuario. Su estilo es afilado y preciso, asegurando que la web se vea perfecta en cualquier dispositivo.',
      imagen: imgZoro
    },
    {
      id: 3,
      name: 'Nahir Carolina Torres',
      role: 'Full Stack Developer',
      description: 'La doctora del código. Se asegura de curar cualquier bug y de que la calidad de la aplicación sea excelente antes del lanzamiento.',
      imagen: imgChopper
    }
  ];

  return (
    <div className="about-container">
        <h1 className="titulo">Quiénes Somos: el grupo Nº 4 </h1>
      <section className="about-content">
        <p className="about-intro">
          Somos un grupo de desarrolladores apasionados por crear soluciones eficientes y modernas.
          Al igual que una tripulación bien coordinada, cada uno aporta su habilidad única para superar cualquier desafío técnico.
        </p>

        <h2 className="section-title">Nuestra Tripulación de Desarrollo</h2>

        {/* Contenedor de las tarjetas */}
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="member-card">
              <div className="member-imagen-wrapper">
                <img src={member.imagen} alt={member.name} className="member-imagen" />
              </div>
              <h3 className="member-name">{member.name}</h3>
              <span className="member-role">{member.role}</span>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}