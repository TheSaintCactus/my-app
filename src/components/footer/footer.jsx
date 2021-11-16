import React from 'react'
import PropTypes from 'prop-types'
import TaskFilter from './tasks-filter'
import './footer.css'


const Footer = function Footer ({ todos, clearCompleted, onFilterChange, filter }) {
    const completedCount = todos.filter((el) => el.isCompleted).length

    const leftCount = todos.length - completedCount

  return (<footer className="footer">
          <span className="todo-count">{leftCount} items left</span>
          <TaskFilter filter={filter}
          onFilterChange={onFilterChange}/>
          <button type='button' className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
  )
 }

Footer.defaultProps = {
  todos: [],
  filter: '',
  onFilterChange: () => {},
  clearCompleted: () => {},
}

Footer.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onFilterChange: PropTypes.func,
  clearCompleted: PropTypes.func,
}


export default Footer;