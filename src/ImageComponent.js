import React from 'react';

function ImageComponent(props) {
  return (
    <div>
      <img src={props.image} alt="centerImage"></img>
    </div>
  );
}

export default ImageComponent;
