import React from 'react'
import PropTypes from 'prop-types'
import Task from '../task'
import './task-list.css'



const TaskList = function TaskList({ todos, onDeleted, onToggleCheckbox, showEditForm, editItem }) {

   const tasks = todos.map((item) => <Task
        {...item}
        onDeleted={() => onDeleted(item.id)}
        onToggleCheckbox = {() => onToggleCheckbox(item.id)}
        editItem={editItem}
        showEditForm={() => showEditForm(item.id)}
        />)

    return (
      
        <ul className='list-group task-list'>
        { tasks }
        </ul>
    )
}


TaskList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object),
    onDeleted: PropTypes.func,
    onToggleCheckbox: PropTypes.func,
    editItem: PropTypes.func,
    showEditForm: PropTypes.func,
  }
  
  TaskList.defaultProps = {
    todos: [],
    onDeleted: () => {},
    onToggleCheckbox: () => {},
    editItem: () => {},
    showEditForm: () => {}
  }

export default TaskList