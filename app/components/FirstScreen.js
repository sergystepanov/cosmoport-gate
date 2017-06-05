import React, { Component } from 'react';

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = { gate: -1, gates: [] };
  }

  componentDidMount() {
    this.fetchGates();
  }

  handleChange = (e) => {
    this.setState({ gate: e.target.value });
    this.props.router.push(`/app/${e.target.value}`);
  }

  fetchGates = () => {
    this.props.api
      .fetchGates()
      .then(gates_ => this.setState({ gates: gates_ }))
      .catch(error => console.error(error));
  }

  renderOption = (id) => <option key={id} value={id}>Gate {id}</option>

  render() {
    const gateOptions = this.state.gates.map(gate_ =>
      <option key={gate_.id} value={gate_.id}>
        {gate_.id} - {gate_.number} {gate_.gateName}
      </option>
    );

    return (
      <div>
        <div>Please select the gate number:</div>
        <select value={this.state.gate} onChange={this.handleChange}>
          <option value="-1" disabled>numbers</option>
          {gateOptions}
        </select>
      </div>
    );
  }
}
