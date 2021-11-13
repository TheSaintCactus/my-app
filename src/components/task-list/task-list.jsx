import React from 'react'
import Task from '../task'
import './task-list.css'


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

export default TaskList