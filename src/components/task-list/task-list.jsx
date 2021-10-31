import React from 'react'
import Task from '../task'
import './task-list.css'


const TaskList = () => {
    return (
        <ul className='todo-list'>
        <Task className='completed' name='Completed task' />
        <Task className='editing' name='Editing task' />
        <Task className='' name='Active task'/>
        </ul>
    )
}

export default TaskList