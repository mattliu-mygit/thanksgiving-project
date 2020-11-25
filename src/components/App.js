import React, { useState } from 'react';
import './App.css';
import turkey1 from '../img/turkey1.gif';
import cursed1 from '../img/cursed1.gif';
import cursed2 from '../img/cursed2.gif';
import cursed3 from '../img/cursed3.gif';
import cannibalism from '../img/cannibalism.gif';
import cornucop from '../img/Cornucop1.png';
import leaves from '../img/leaves.png';
import banner from '../img/banner.png';
import turkey2 from '../img/turkey2.gif';
import turkey3 from '../img/turkey3.gif';
import CenterImage from './CenterImage';

function App() {
  const [index, setIndex] = useState(0);
  const images = [
    turkey1,
    cursed1,
    cursed2,
    cursed3,
    turkey2,
    turkey3,
    cannibalism,
  ];
  const [droppedImages, setDroppedImages] = useState([]);

  const handleClick = () => {
    setDroppedImages([...droppedImages, images[index]]);
    if (index + 1 === images.length) {
      setIndex(1);
    } else {
      setIndex(index + 1);
    }
    console.log(index);
  };

  const deleteImage = () => {};

  return (
    <div
      className="App"
      style={{
        width: window.visualViewport.width,
        height: window.visualViewport.height,
      }}
    >
      <img
        src={banner}
        alt="banner"
        style={{ position: 'absolute', top: '-12.5%', width: '25%' }}
      ></img>
      {index === 0 ? (
        <b
          style={{
            fontSize: '200%',
            color: 'orange',
            position: 'absolute',
            top: '65%',
          }}
        >
          CLICK ME!!!
        </b>
      ) : null}
      {/* {
        //console.log('returning ', droppedImages);
        droppedImages.forEach((image) => (
          <div style={{ position: 'absolute' }}>
            <CenterImage
              image={image}
              dropping={true}
              deleteImage={deleteImage}
            />
          </div>
        ))
      } */}
      <button className="center-image centerButt" onClick={handleClick}>
        <CenterImage
          image={images[index]}
          dropping={true}
          deleteImage={deleteImage}
        />
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
