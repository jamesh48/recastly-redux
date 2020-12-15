import React from 'react';

var AutoPlayButton = ({handleAutoPlayButtonClick, clicked}) => {
  return <div>
    <button onClick={() => handleAutoPlayButtonClick()} style={{color: 'white', backgroundColor: clicked.clicked === true ? 'green' : 'red'}}>Autoplay</button>
  </div>;
};

export default AutoPlayButton;