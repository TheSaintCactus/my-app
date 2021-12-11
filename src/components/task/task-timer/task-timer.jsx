
import React, { useState, useEffect } from 'react';
import './task-timer.css';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

const TaskTimer = function TaskTimer({ timeLeftProp, onToggleCheckbox, isCompleted }) {


const [timeLeft, setTimeLeft] = useState(timeLeftProp)
const [isPlay, setIsPlay] = useState(false)
const [activeInterval, setActiveInterval] = useState('')


const stopTimer = () => {
  clearInterval(activeInterval);
  setIsPlay(false)
};


const startTimer = () => {
    let newTime = timeLeft;
    const interval = setInterval(() => {
         
      newTime -= 1000;
      setTimeLeft(newTime);
    }, 1000);
    setActiveInterval(interval)  


  };

  const onPlayClick = () => {
    startTimer();
    setIsPlay(true)
  };

useEffect(() => {
  if (format(timeLeft, 'mm:ss') === '00:01') {
    setTimeout(() => {
      clearInterval(activeInterval)
      setIsPlay(false)
      onToggleCheckbox();
    }, 1000);
  }

  
}, [activeInterval, onToggleCheckbox, timeLeft])


useEffect(() => () => clearInterval(activeInterval), [ activeInterval ])



    const playButton = <button className="icon icon-play" type="button" aria-label="play" onClick={onPlayClick} />;
    const pauseButton = (
      <button className="icon icon-pause" type="button" aria-label="pause" onClick={stopTimer} />
    );
    const formatTimeLeft = format(timeLeft, 'mm:ss');

    const button = isPlay ? pauseButton : playButton;

    return (
      <span className={formatTimeLeft === '00:00' || isCompleted ? 'hidden' : 'description'}>
        {button}
        {formatTimeLeft}
      </span>
    );
  
}

TaskTimer.propTypes = {
  onToggleCheckbox: PropTypes.func.isRequired,
  timeLeftProp: PropTypes.instanceOf(Date).isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default TaskTimer