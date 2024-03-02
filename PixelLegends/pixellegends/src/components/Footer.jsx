// Footer.js
import React, { useState } from 'react';
import './Estilos.css';

const Footer = () => {
  const [showPattern, setShowPattern] = useState(false);

  const togglePattern = () => {
    setShowPattern(!showPattern);
  };

  return (
    <div className="footer">
      <div className="container">
        <p>&copy; 2024 Pixel Legends. Todos los derechos reservados.</p>
        <button className="pattern-button" onClick={togglePattern}>
          {showPattern ? 'Ocultar Patrón' : 'Mostrar Patrón'}
        </button>
        {showPattern && (
          <div className="pattern"></div> 
        )}
      </div>
    </div>
  );
};

export default Footer;
