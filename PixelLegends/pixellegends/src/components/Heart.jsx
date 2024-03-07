import React from 'react';

const Heart = ({ positionX, positionY }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '30px',
        height: '30px',
        backgroundColor: 'red',
        borderRadius: '50%',
        left: positionX,
        bottom: positionY,
      }}
    >
      <img src="./pngHearts.png" alt="Corazón" width="20" height="20" style={{ position: 'absolute', left: positionX, top: positionY }} />
    </div>
  );
};

export default Heart;
