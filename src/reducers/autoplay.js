import Redux from 'redux';

var clickedReducer = (state = null, action) => {
  if (action.type === 'TOGGLE_CLICK') {
    return {clicked: !state.clicked};
  } else {
    return {clicked: false};
  }
};

export default clickedReducer;