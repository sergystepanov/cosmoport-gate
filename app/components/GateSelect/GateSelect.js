// @flow
import React, {Component} from 'react';

import styles from './GateSelect.css';

export default class GateSelect extends Component {
  static propTypes = {
    data: React
      .PropTypes
      .arrayOf(React.PropTypes.number),
    onGateSelect: React.PropTypes.func
  };

  static defaultProps = {
    data: [],
    onGateSelect: () => {}
  };

  handleChange = (e) => {
    this
      .props
      .onGateSelect(e.target.value);
  }

  renderOption = (id) => <option key={id} value={id}>Gate {id}</option>

  render() {
    return (
      <div>
        <div>Please select the gate number:</div>
        <select
          className={styles.select}
          defaultValue="-1"
          onChange={this.handleChange}>
          <option value="-1" disabled>numbers</option>
          {this
            .props
            .data
            .map(this.renderOption)}
        </select>
      </div>
    );
  }
}
