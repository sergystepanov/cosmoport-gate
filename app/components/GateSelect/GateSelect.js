import React, { Component } from 'react';

import styles from './GateSelect.css';

export default class GateSelect extends Component {
  static propTypes = {
    data: React
      .PropTypes
      .arrayOf(React.PropTypes.object),
    onGateSelect: React.PropTypes.func
  };

  static defaultProps = {
    data: [],
    onGateSelect: () => { }
  };

  handleChange = (e) => {
    this.props.onGateSelect(e.target.value);
  }

  render() {
    const gateOptions = this.props.data.map(gate_ =>
      <option key={gate_.id} value={gate_.id}>
        {gate_.id} - {gate_.number} {gate_.gateName}
      </option>
    );

    return (
      <div>
        <div>Please select the gate number:</div>
        <select className={styles.select} defaultValue="-1" onChange={this.handleChange}>
          <option value="-1" disabled>numbers</option>
          {gateOptions}
        </select>
      </div>
    );
  }
}
