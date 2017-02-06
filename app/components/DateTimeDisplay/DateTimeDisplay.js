// @flow
import React, {Component} from 'react';
import styles from './DateTimeDisplay.css';

export default class DateTimeDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showColon: true,
      date: new Date(),
      locale: 'en',
      locales: {
        en: {
          monthNames: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
          ]
        },
        ru: {
          monthNames: [
            'Янв',
            'Фев',
            'Мар',
            'Апр',
            'Май',
            'Июн',
            'Июл',
            'Авг',
            'Сеп',
            'Окт',
            'Нов',
            'Дек'
          ]
        }
      }
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
      showColon: !this.state.showColon
    });
  }

  format00(value) {
    return value < 10
      ? value = `0${value}`
      : value;
  }

  renderColon() {
    return this.state.showColon
      ? 'block'
      : 'none';
  }

  showHide(value) {
    return {
      opacity: value
        ? '.999'
        : '0'
    };
  }

  renderClock() {
    return (
      <div className={styles.clock_value}>
        {this
          .state
          .date
          .getHours()}
        <span style={this.showHide(this.state.showColon)}>:</span>
        {this.format00(this.state.date.getMinutes())}
      </div>
    );
  }

  renderMonthDay() {
    return this
      .state
      .date
      .getDate();
  }

  renderMonthName() {
    return this.state.locales[this.state.locale].monthNames[
      this
        .state
        .date
        .getMonth()
    ];
  }

  renderYear() {
    return this
      .state
      .date
      .getFullYear();
  }

  render() {
    return (
      <div className={styles.date_time}>
        <div className={styles.date_time__time_block}>
          <img alt="" src="../resources/time_block_v0.svg"/>
          <div className={styles.clock_value}>
            {this.renderClock()}
          </div>
        </div>
        <div className={styles.date_time__date_block}>
          <img alt="" src="../resources/date_block_v0.svg"/>
          <div className={styles.month_day} id="month-day">{this.renderMonthDay()}</div>
          <div className={styles.month_name} id="month-name">{this.renderMonthName()}</div>
          <div className={styles.year} id="year">{this.renderYear()}</div>
        </div>
      </div>
    );
  }
}
