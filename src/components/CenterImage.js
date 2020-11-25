import React from 'react';

function CenterImage(props) {
  return (
    <div
      ref={(el) => {
        // el can be null - see https://reactjs.org/docs/refs-and-the-dom.html#caveats-with-callback-refs
        if (!el) return;
        //setHeight(el.getBoundingClientRect().top);
        //console.log(el.getBoundingClientRect().top); // prints 200px
      }}
    >
      <img src={props.image} alt="centerImage"></img>
    </div>
  );
}

export default CenterImage;
