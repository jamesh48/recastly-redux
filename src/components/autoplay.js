import React from 'react';

var AutoPlayButton = ({clicked, handleAutoPlayButtonClick}) => {
  let indicator;
  if (clicked === false) {
    indicator = true;
  } else {
    indicator = false;
  }

  return <div>
    <button onClick={() => handleAutoPlayButtonClick(indicator)} style={{color: 'white', backgroundColor: clicked === true ? 'red' : 'green'}}>Autoplay</button>
  </div>;
};

export default AutoPlayButton;