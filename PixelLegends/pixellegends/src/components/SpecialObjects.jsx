import React from 'react';
import Heart from './Heart';
import Chicken from './Chicken';
import Fentanilo from './Fentanilo';
// Importa aquí el componente para el objeto "Fentanilo"

const SpecialObjects = ({ playerPosition }) => {
  return (
    <div>
      {/* Renderizar los objetos especiales aquí */}
      <Heart positionX={100} positionY={200} />
      <Chicken positionX={300} positionY={100} />
      <Fentanilo positionX={200} positionY={100} />
    </div>
  );
};

export default SpecialObjects;
