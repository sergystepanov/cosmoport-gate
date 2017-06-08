import React, { Component } from 'react';

import styles from './SomethingCool.css';

export default class SomethingCool extends Component {
  render() {
    return <div className={styles.coolMessage}>Waiting... for a next event.</div>;
  }
}
