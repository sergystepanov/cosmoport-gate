import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import { Router, hashHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux';
// import routes from './routes';
// import configureStore from './store/configureStore';
import './app.global.css';
import MainPage from './containers/MainPage';

// const store = configureStore();
// const history = syncHistoryWithStore(hashHistory, store);

render(
  <MainPage />,
  document.getElementById('root')
);
