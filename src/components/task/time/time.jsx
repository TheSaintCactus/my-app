import React, { useEffect, useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Time = function Time({ dateCreated }) {
  const [time, setTime] = useState(formatDistanceToNow(new Date(), { addSuffix: true, includeSeconds: true }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatDistanceToNow(dateCreated, { addSuffix: true, includeSeconds: true }));
    }, 5000);

    return clearInterval(interval);
  });

  return <span>{time}</span>;
};

Time.propTypes = {
  dateCreated: PropTypes.instanceOf(Date).isRequired,
};

export default Time;
