import React, { Component } from 'react';

import Trapeze from '../Decoration/Trapeze';

export default class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minutes: this.props.minutes,
      count: this.props.minutes
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 60 * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.minutes !== nextProps.minutes) {
      this.setState({ minutes: nextProps.minutes, count: nextProps.minutes });
    }
  }

  tick() {
    this.setState({ count: this.state.count < 1 ? 0 : (this.state.count - 1) });
  }

  renderMinutes(minutes) {
    const h = Math.trunc(minutes / 60);
    const m = minutes % 60;

    return `${h}:${(m < 10 ? '0' : '') + m}`;
  }

  render() {
    return (
      <div className="flight__time-number">
        <Trapeze />
        <div className="flight__time-content">{this.renderMinutes(this.state.count)}</div>
        <Trapeze position="_right" />
      </div>
    );
  }
}
