import { connect } from 'react-redux';
import AutoPlayButton from '../components/Autoplay.js';
import changeClick from '../actions/clickStatus.js';

const mapStateToProps = state => ({clicked: state.clicked});
const mapDispatchToProps = (dispatch) => {
  return {
    handleAutoPlayButtonClick: () => dispatch(changeClick())
  };
};

var AutoPlayButtonContainer = connect(mapStateToProps, mapDispatchToProps)(AutoPlayButton);

export default AutoPlayButtonContainer;