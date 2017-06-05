import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
// import { syncHistoryWithStore } from 'react-router-redux'; import routes from
// './routes'; import configureStore from './store/configureStore';
import './app.global.css';
import App from './containers/App';
import MainPage from './components/Main';
import FirstScreenContainer from './containers/FirstScreenContainer';

// const store = configureStore(); const history =
// syncHistoryWithStore(hashHistory, store);

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FirstScreenContainer} />
      <Route path="/select" component={FirstScreenContainer} />
      <Route path="/app/:gate_id" component={MainPage} />
    </Route>
  </Router>
), document.getElementById('root'));
