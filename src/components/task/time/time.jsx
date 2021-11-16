import React from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from 'prop-types'

const Time = function Time({ dateCreated }) {
  

 const formatDate = formatDistanceToNow(dateCreated, {addSuffix: true, includeSeconds: true});

    return <span>{formatDate}</span>
  

};





Time.propTypes = {
  dateCreated: PropTypes.instanceOf(Date).isRequired
}

export default Time