import React, { Component } from 'react';
import './task-timer.css';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export default class TaskTimer extends Component {
  constructor({ timeLeft }) {
    super();
    this.state = {
      timeLeft,
      isPlay: false,
    };
  }

  onPlayClick = () => {
    this.startTimer();
    this.setState(() => ({ isPlay: true }));
  };

  startTimer = () => {
    const { onToggleCheckbox } = this.props;
    const { timeLeft } = this.state;
    let newTime = timeLeft;
    this.interval = setInterval(() => {
      if (format(timeLeft, 'mm:ss') === '00:01') {
        this.stopTimer();
        onToggleCheckbox();
      }
      newTime -= 1000;
      this.setState(() => ({ timeLeft: newTime }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.setState(() => ({isPlay: false}))
  };

  render() {
    const { isPlay, timeLeft } = this.state;
    const playButton = <button className="icon icon-play" type="button" aria-label="play" onClick={this.onPlayClick} />;
    const pauseButton = (
      <button className="icon icon-pause" type="button" aria-label="pause" onClick={this.stopTimer} />
    );
    const formatTimeLeft = format(timeLeft, 'mm:ss');

    const button = isPlay ? pauseButton : playButton;

    return (
      <span className={formatTimeLeft === '00:00' ? 'hidden' : 'description'}>
        {button}
        {formatTimeLeft}
      </span>
    );
  }
}

TaskTimer.propTypes = {
    onToggleCheckbox: PropTypes.func.isRequired,
    timeLeft: PropTypes.instanceOf(Date).isRequired
};
