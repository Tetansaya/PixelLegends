import React from 'react';

const Chicken = ({ positionX, positionY }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '30px',
        height: '30px',
        backgroundColor: 'yellow',
        borderRadius: '50%',
        left: positionX,
        bottom: positionY,
      }}
    >
      <img src="./pngChicken.png" alt="Pollo" width="20" height="20" style={{ position: 'absolute', left: positionX, top: positionY }} />
    </div>
  );
};

export default Chicken;
