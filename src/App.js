import React, { useState } from 'react';
import './App.css';
import turkey1 from './img/turkey1.gif';
import cursed1 from './img/cursed1.gif';
import cursed2 from './img/cursed2.gif';
import ImageComponent from './ImageComponent';
import cornucop from './img/Cornucop1.png';
import leaves from './img/leaves.png';

function App() {
  const [index, setIndex] = useState(0);
  const images = [turkey1, cursed1, cursed2];
  const handleClick = () => {
    if (index + 1 === images.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  };
  return (
    <div
      className="App"
      style={{
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          marginTop: '1rem',
          fontSize: '5rem',
          fontFamily: 'monospace',
        }}
      >
        Happy Thanksgiving!
      </div>
      <button className="center-image" onClick={handleClick}>
        <ImageComponent image={images[index]} />
      </button>
      <img src={cornucop} alt="cornucup" className="cornucopia"></img>
      <img
        src={leaves}
        alt="cornucup"
        style={{
          width: '15%',
          position: 'absolute',
          left: '1rem',
          bottom: '1rem',
          transform: 'scaleX(-1)',
        }}
      ></img>
    </div>
  );
}

export default App;
