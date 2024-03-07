import React from 'react';
import SpecialObjects from './SpecialObjects';

const Game = () => {
  const playerPosition = { x: 200, y: 300 }; // Ejemplo de posición del jugador

  return (
    <div>
      {/* Otros elementos del juego */}
      <SpecialObjects playerPosition={playerPosition} />
      {/* Otros elementos del juego */}
    </div>
  );
};

export default Game;
