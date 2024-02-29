import React from 'react';

const Mensaje = ({ mensaje }) => {
  return (
    <div>
      <h1>Contacto</h1>
      <p>{mensaje}</p>
      {/* Formulario de contacto u otros detalles */}
    </div>
  );
};

export default Mensaje;
