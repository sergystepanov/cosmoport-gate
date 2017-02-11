import React from 'react';
import {render} from 'react-dom';
// import { Provider } from 'react-redux';
import {Router, Route, hashHistory} from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux'; import routes from
// './routes'; import configureStore from './store/configureStore';
import './app.global.css';
import MainPage from './components/Main';
import FirstScreenContainer from './containers/FirstScreenContainer';

// const store = configureStore(); const history =
// syncHistoryWithStore(hashHistory, store);

render((
  <Router history={hashHistory}>
    <Route path="/" component={FirstScreenContainer} />
    <Route path="/app/:gate_id" component={MainPage} />
  </Router>
), document.getElementById('root'));
