import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  //TODO:  Write an asynchronous action to handle a video search!
  //Thunk
  //Will use dispatch
  //async calls?
  //searchYoutube function- inputs: (options object {key, q, max = 5}, callback)
  //https://codepen.io/stowball/post/a-dummy-s-guide-to-redux-and-thunk-in-react
  return (dispatch) => {
    let result = [];

    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (items) => result = items);
    console.log(result);
    dispatch(changeVideo(result[0]));
    dispatch(changeVideoList(result));
  };
};

export default handleVideoSearch;
