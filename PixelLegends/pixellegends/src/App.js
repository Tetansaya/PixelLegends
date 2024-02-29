import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Juego from './components/Juego';
import Mensaje from './components/Mensaje';
import Dev from './components/Dev';
// Agregar el enlace a la fuente en el encabezado del documento
const link = document.createElement('link');
link.href = 'https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap';
link.rel = 'stylesheet';
document.head.appendChild(link);

const App = () => {
  const [currentPage, setCurrentPage] = useState('juego');

  const renderPage = () => {
    switch (currentPage) {
      case 'juego':
        return <Juego />;
      case 'contacto':
        return <Mensaje mensaje="¡Contactate conmigo para colaborar en proyectos futuros!" />;
      case 'dev':
        return <Dev />;
      default:
        return <Juego />;
    }
  };

  return (
    <div>
      <Navbar setCurrentPage={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default App;
