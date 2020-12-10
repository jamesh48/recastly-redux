import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!
//State Plannning:
//App ->
  //currentVideo, videos
//Search ->
  //value

// let store = createStore(rootReducer, exampleVideoData, applyMiddleware(thunk));

let store = createStore(rootReducer, {currentVideo: null, videoList: exampleVideoData}, applyMiddleware(thunk));
export default store;