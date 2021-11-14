import React from 'react'
import Task from '../task'
import './task-list.css'
import PropTypes from 'prop-types'


const TaskList = (props) => {

   let tasks = props.todos.map((item) => {
       return <Task
        {...item}
        onDeleted={() => props.onDeleted(item.id)}
        onToggleCheckbox = {() => props.onToggleCheckbox(item.id)}
        editItem={props.editItem}
        showEditForm={() => props.showEditForm(item.id)}
        />
    })

    return (
        <ul className='todo-list'>
        { tasks }
        </ul>
    )
}


TaskList.propDefault = {
    todos: PropTypes.array,
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