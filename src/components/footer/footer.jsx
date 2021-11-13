import React, { Component } from 'react'
import TaskFilter from '../tasks-filter'
import './footer.css'


export default class Footer extends Component {


  render () {

    const completedCount = this.props.todos.filter((el) => {
      return el.isCompleted
    }).length

    const leftCount = this.props.todos.length - completedCount

  return (<footer className="footer">
          <span className="todo-count">{leftCount} items left</span>
          <TaskFilter filter={this.props.filter}
          onFilterChange={this.props.onFilterChange}/>
          <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
        </footer>
  )
 }
}

