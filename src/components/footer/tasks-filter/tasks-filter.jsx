import React, { Component } from 'react'
import './tasks-filter.css'
import PropTypes from 'prop-types'

export default class TasksFilter extends Component {

  buttons = [
    { name: 'All'},
    { name: 'Active'},
    { name: 'Completed'},
  ]

  render () {  

const {filter, onFilterChange} = this.props

    const buttons = this.buttons.map(({ name }) => {

      const isActive = filter === name
      const isSelected = isActive ? 'selected' : null
      return (
        <li key={name}>
              <button 
              type='button'
              className={isSelected}
              onClick={() => onFilterChange(name)}>{name}</button>
        </li>
      )
    })


  return (
        <ul className="filters">
            {buttons}
          </ul>
    )
  }
}

TasksFilter.propTypes = {
filter: PropTypes.string,
onFilterChange: PropTypes.func,
}


TasksFilter.defaultProps = {
  filter: '',
  onFilterChange: () => {}
}


