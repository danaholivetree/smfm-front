import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';
// import PropTypes from 'prop-types'
import { createStore } from 'redux'
import AppReducer from './reducers/AppReducer'
// import thunk from 'redux-thunk';
// import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
// import store from './store'

// Provider.childContextTypes = {
//   store: PropTypes.object
// }
const preloadedState = {
  loggedIn: false,
  friends: [],
  currentUser: {},
  itemsForSale: [],
  feedItems: [],
  bookmarks: [],
  cart: []
}
const store = createStore(AppReducer, preloadedState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>

, document.getElementById('root'));
registerServiceWorker();
