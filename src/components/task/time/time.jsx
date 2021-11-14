import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from 'prop-types'


export default class Time extends Component {
  formatDate = formatDistanceToNow(this.props.dateCreated, {addSuffix: true, includeSeconds: true})



  render () {



    return <span>{this.formatDate}</span>
  }

};

Time.propDefault = {
  dateCreated: {},
}



Time.defaultProps = {
  dateCreated: PropTypes.object
}