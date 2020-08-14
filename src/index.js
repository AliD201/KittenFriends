import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './Containers/App2';
import App from './Containers/App3_redux';
// import Comp from './Component1'
// import Card from './Card'
import * as serviceWorker from './serviceWorker';
import "tachyons";
import {Provider  } from 'react-redux'
import {createStore, applyMiddleware, combineReducers } from 'redux'
import {searchRobots, requestRobots} from './reducers'
import {createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
// Redux " store part "
// get a reducer inside the store
// collecting reducers in an Object
const rootReducer = combineReducers({searchRobots,requestRobots})
const logger = createLogger();
// order matter here
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger))
// pass the provider the store so it will be the holder of the big picture

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
