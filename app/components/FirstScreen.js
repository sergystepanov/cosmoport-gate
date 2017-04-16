// @flow
import React, { Component } from 'react';

import Api from '../../lib/core-api-client/ApiV1';

const API = new Api();

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { gate: -1, gates: [] };
  }

  componentDidMount() {
    this.setState({
      gates: this.fetchGates()
    });
  }

  handleChange = (e) => {
    this.setState({ gate: e.target.value });
    this
      .props
      .router
      .push(`/app/${e.target.value}`);
  }

  fetchGates = () => Array.from(Array(10).keys())

  renderOption = (id) => <option key={id} value={id}>Gate {id}</option>

  render() {
    return (
      <div>
        <div>Please select the gate number:</div>
        <select value={this.state.gate} onChange={this.handleChange}>
          <option value="-1" disabled>numbers</option>
          {this
            .state
            .gates
            .map(this.renderOption)}
        </select>
      </div>
    );
  }
}
