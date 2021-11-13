import React, { Component } from 'react'
import './tasks-filter.css'

export default class TasksFilter extends Component{

  buttons = [
    { name: 'All'},
    { name: 'Active'},
    { name: 'Completed'},
  ]

  render () {  



    const buttons = this.buttons.map(({name}) => {

      const isActive = this.props.filter === name
      const isSelected = isActive ? 'selected' : null
      return (
        <li key={name}>
              <button className={isSelected}
              onClick={() => this.props.onFilterChange(name)}>{name}</button>
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


