import React from 'react';
import QRCode from 'qrcode.react';

const Dev = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Desarrolladores</h1>
        <h2>Escanee este código QR para visitar PixelLegends en GitHub</h2>
        <QRCode value="https://github.com/Tetansaya/PixelLegends" size={150} />
        /* Fetch ("localhost:3000/components").then((exdata.json)) Esta api esta en desarrollo */
      </div>
    </div>
  );
};

export default Dev;
