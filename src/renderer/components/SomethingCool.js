import React, { Component } from 'react';

import styles from './SomethingCool.module.css';

export default class SomethingCool extends Component {
  render() {
    return <div className={styles.coolMessage}>Waiting... for the next event.</div>;
  }
}
