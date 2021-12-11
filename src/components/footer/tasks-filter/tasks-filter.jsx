import React from 'react'
import './tasks-filter.css'
import PropTypes from 'prop-types'

const TasksFilter = function TasksFilter({filter, onFilterChange}) {

  const buttons = [
    { name: 'All'},
    { name: 'Active'},
    { name: 'Completed'},
  ]

   


    const buttonsRender = buttons.map(({ name }) => {

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
            {buttonsRender}
          </ul>
    )
  
}

TasksFilter.propTypes = {
filter: PropTypes.string,
onFilterChange: PropTypes.func,
}


TasksFilter.defaultProps = {
  filter: '',
  onFilterChange: () => {}
}

export default TasksFilter
