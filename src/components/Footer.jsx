import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        <div className="footer-section academic-info">
          <h4>Materia</h4>
          <p className="course-name">Ingeniería de Software Avanzado</p>
          <h4>Entregable</h4>
          <p className="activity-name">Actividad 3. Desarrollo de producto con TDD/BDD</p>
        </div>

        <div className="footer-section team-info">
          <h4>Equipo de Desarrollo</h4>
          <ul className="team-list">
            <li>👤 Nahir Carolina Torres</li>
            <li>👤 Jose Antonio Verrire Maza</li>
            <li>👤 Victor Hugo Ponce</li>
          </ul>
        </div>

        <div className="footer-section badges-info">
          <span className="badge tdd-badge">TDD</span>
          <span className="badge bdd-badge">BDD</span>
          <span className="badge git-badge">Git & Cypress</span>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Grupo BuscaSofa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;