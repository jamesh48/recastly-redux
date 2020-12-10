import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => ({video: state.currentVideo});
// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     // handleVideoListEntryTitleClick: (ownProps) => dispatch(changeVideo(ownProps.videos[0]))
//   };
// };

var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
