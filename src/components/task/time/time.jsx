import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from 'prop-types'

export default class Time extends Component {

  state = {
    
    time: formatDistanceToNow(new Date(), {addSuffix: true, includeSeconds: true})
  }

render () {

const { dateCreated } = this.props
const { time } = this.state

setInterval(() => {
  this.setState(() => ({
      time: formatDistanceToNow(dateCreated, {addSuffix: true, includeSeconds: true})
    })
  )
}, 5000)


// formatDistanceToNow(times, {addSuffix: true, includeSeconds: true});

    return <span>{ time }</span>
}

};

Time.propTypes = {
  dateCreated: PropTypes.instanceOf(Date).isRequired
}
