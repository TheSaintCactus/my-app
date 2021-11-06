import React from 'react'
import Task from '../task'
import './task-list.css'


const TaskList = (props) => {
console.log(props)
   let tasks = props.todos.map((item) => {
       return <Task
        {...item}
        onDeleted={() => props.onDeleted(item.key)}
        />
    })

    return (
        <ul className='todo-list'>
        { tasks }
        </ul>
    )
    
}

export default TaskList