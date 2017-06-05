import React, { Component } from 'react';

import GateSelect from '../components/GateSelect/GateSelect';

export default class FirstScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = { gateNum: -1, gates: [] };
  }

  componentDidMount() {
    this.fetchGates();
  }

  fetchGates = () => {
    this.props.api
      .fetchGates()
      .then(gates_ => this.setState({ gates: gates_ }))
      .catch(error => console.error(error));
  }

  handleGateSelect = (num) => {
    this.setState({ gateNum: num });
    this.props.router.push(`/app/${num}`);
  }

  render() {
    return (<GateSelect data={this.state.gates} onGateSelect={this.handleGateSelect} />);
  }
}
