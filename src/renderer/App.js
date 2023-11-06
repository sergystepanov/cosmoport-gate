import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';

import GateSelect from './containers/GateSelect';
import MainInfo from './containers/Main';

import './App.css';
import Api from 'cosmoport-core-api-client/ApiV1';
import React, { Component } from 'react';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      config: null,
      api: null,
    };

    window.electron.ipcRenderer.once('config', this.handleConfig);
    window.electron.ipcRenderer.sendMessage('config');
  }

  handleConfig = (data) => {
    this.setState({
      config: data,
      api: new Api(`http://${data.address.server}`),
    });
  };

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
