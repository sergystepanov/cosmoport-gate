import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import GateSelect from './containers/GateSelect';
import MainInfo from './containers/Main';

import './App.css';
import { Api } from 'cosmoport-core-api-client';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: props.conf,
      api: new Api(`http://${props.conf.address.server}`),
    };
  }

  render() {
    if (this.state.config === null) {
      return <div>Loading...</div>;
    }

    return (
      <Router>
        <Routes>
          <Route path="/" element={<GateSelect {...this.state} />} />,
          <Route path="/app/:gate_id" element={<MainInfo {...this.state} />} />
        </Routes>
      </Router>
    );
  }
}
