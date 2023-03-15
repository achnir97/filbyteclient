import React, { useEffect, useState } from 'react';
import './App.css';

const Aee = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const isSmallScreen = screenWidth <= 768;

  return (
    <div className="container">
      <div className="column1" style={{ backgroundColor: 'maroon', flex: isSmallScreen ? 'none' : '2' }}>
        VOGO DIGITAL LABS
      </div>
      <div className="column2" style={{ flex: '1' }}>
        ID
      </div>
      <div className="column3" style={{ flex: '1' }}>
        KSL500
      </div>
    </div>
  );
}

export default Aee;
