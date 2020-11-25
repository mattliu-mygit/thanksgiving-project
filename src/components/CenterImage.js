import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function CenterImage(props) {
  //const [height, setHeight] = useState(0);

  // useEffect(() => {
  //   if (props.dropping && height < 360) {
  //     setTimeout(() => {
  //       setHeight(height + 10);
  //     }, 100);
  //   }
  // });

  return (
    <div
      ref={(el) => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if (!el) return;
        //setHeight(el.getBoundingClientRect().top);
        console.log(el.getBoundingClientRect().top); // prints 200px
      }}
    >
      <img src={props.image} alt="centerImage"></img>
    </div>
  );
}

export default CenterImage;
