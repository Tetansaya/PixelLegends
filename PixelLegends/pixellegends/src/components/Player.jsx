import React from 'react';

const Player = ({ positionX, positionY }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '50px',
        height: '50px',
        backgroundColor: 'blue',
        borderRadius: '50%',
        left: positionX,
        bottom: positionY,
      }}
    ></div>
  );
};

export default Player;
