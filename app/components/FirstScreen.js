// @flow
import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import Api from '../api/ApiV1';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.api = new Api();
    this.state = {
      gate: 1,
      gates: []
    };
  }

  componentDidMount() {
    this.setState({
      gates: this.fetchGates()
    });
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this
      .props
      .router
      .push(`/app/${e.target.value}`);
    this.setState({gate: e.target.value});
  }

  fetchGates() {
    return [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ];
  }

  render() {

    const options = [];
    for (const id of this.state.gates) {
      options.push(
        <option key={id} value={id}>Gate {id}</option>
      );
    }

    return (
      <div>
        <div>Please select gate number below:</div>
        <select value={this.state.gate} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}
