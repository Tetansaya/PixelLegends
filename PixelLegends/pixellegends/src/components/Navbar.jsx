import React from 'react';
import './Estilos.css';

const Navbar = ({ setCurrentPage }) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="title">Pixel Legends</div>
        <nav>
          <ul>
            <li><button className="nav-button" onClick={() => setCurrentPage('juego')}>Juego</button></li>
            <li><button className="nav-button" onClick={() => setCurrentPage('contacto')}>Contacto</button></li>
            <li><button className="nav-button" onClick={() => setCurrentPage('dev')}>Desarrolladores</button></li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
