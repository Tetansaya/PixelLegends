import React from 'react';

const Fentanilo = ({ positionX, positionY }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '30px',
        height: '30px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        left: positionX,
        bottom: positionY,
      }}
    >
      <img src="./pngFentanilo.png" alt="Fentanilo" width="20" height="20" style={{ position: 'absolute', left: positionX, top: positionY }} />
    </div>
  );
};

export default Fentanilo;
