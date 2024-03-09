import React from 'react';
import SNESComponent from './SNESComponent';
import SunsetRidersROM from '../components/Sunset_Riders.smc'; // Importa el archivo ROM

const Juego = () => {
  return (
    <div>
      <h1>Bienvenido al Juego</h1>
      <SNESComponent romPath={SunsetRidersROM} /> {/* Pasa la ruta del archivo ROM como una cadena */}
    </div>
  );
};

export default Juego;
