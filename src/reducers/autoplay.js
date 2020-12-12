import Redux from 'redux';

var clickedReducer = (state = null, action) => {
  if (action.type === 'TOGGLE_CLICK') {
    return action.clicked;
  } else {
    return state;
  }
};

export default clickedReducer;