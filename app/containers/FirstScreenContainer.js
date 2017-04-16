// @flow
import React, {Component} from 'react';

import GateSelect from '../components/GateSelect/GateSelect';

export default class FirstScreenContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gateNum: -1,
      gates: this.fetchGates()
    };
  }

  componentDidMount() {}

  fetchGates = () => Array.from(Array(10).keys())

  handleGateSelect = (num) => {
    this.setState({gateNum: num});
    this
      .props
      .router
      .push(`/app/${num}`);
  }

  render() {
    return (<GateSelect data={this.state.gates} onGateSelect={this.handleGateSelect} />);
  }
}
