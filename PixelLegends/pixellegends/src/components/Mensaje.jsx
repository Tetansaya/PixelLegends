import React from 'react';

const Mensaje = ({ mensaje }) => {
  // Número de teléfono al que se enviará el mensaje
  const phoneNumber = '1234567890'; // Reemplaza esto con tu número de teléfono
  
  // Mensaje predeterminado
  const defaultText = 'Hola, estoy interesado en contactarte.';

  // Genera el enlace de WhatsApp
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultText)}`;

  return (
    <div>
      <h1>Contacto</h1>
      <p>{mensaje}</p>
      {/* Enlace de WhatsApp */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">Contáctame por WhatsApp</a>
    </div>
  );
};

export default Mensaje;
