import React, { useEffect, useRef, useState } from 'react';
import { Nostalgist } from 'nostalgist';

const SNESComponent = ({ romPath }) => {
  const containerRef = useRef(null);
  const emulatorRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadGame = async () => {
      if (!containerRef.current) return;

      emulatorRef.current = new Nostalgist(containerRef.current);

      if (romPath) {
        setLoading(true);

        try {
          await emulatorRef.current.loadRom(romPath, (progress) => {
            setProgress(progress * 100);
          });

          setLoading(false);
        } catch (error) {
          console.error('Error loading ROM:', error);
          setLoading(false);
        }
      }
    };

    loadGame();

    return () => {
      if (emulatorRef.current) {
        emulatorRef.current.destroy();
        emulatorRef.current = null;
      }
    };
  }, [romPath]);

  const handleButtonPress = (button) => {
    if (emulatorRef.current) {
      emulatorRef.current.pressButton(button);
    }
  };

  return (
    <div>
      {loading ? (
        <div>
          <p>Loading game...</p>
          <progress value={progress} max={100} />
        </div>
      ) : (
        <div>
          <div ref={containerRef} />
          <div>
            <button onClick={() => handleButtonPress('left')}>Left</button>
            <button onClick={() => handleButtonPress('right')}>Right</button>
            <button onClick={() => handleButtonPress('up')}>Up</button>
            <button onClick={() => handleButtonPress('down')}>Down</button>
            <button onClick={() => handleButtonPress('A')}>A</button>
            <button onClick={() => handleButtonPress('B')}>B</button>
            <button onClick={() => handleButtonPress('start')}>Start</button>
            <button onClick={() => handleButtonPress('select')}>Select</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SNESComponent;
