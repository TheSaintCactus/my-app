import React from "react";
import './task.css'
import PropTypes from 'prop-types'
import EditForm from "./edit-form";

import Time from './time'
import TaskTimer from "./task-timer";

 const Task = function Task({name,
  isCompleted,
  isEditing,
  onToggleCheckbox,
  dateCreated,
  showEditForm,
  onDeleted,
  editItem,
  id,
  timeLeft,
  }) {







const isCompl = isCompleted ? 'task completed' : 'task active' 
const isEdit = isEditing ? 'editing' : isCompl

  return (
    <li className={ isEdit }>
      
      <div className="view">
      <input
        className='toggle'
				type="checkbox"
				checked={isCompleted}
				onChange={onToggleCheckbox}
			/>
        <label>
        <span className="title">{ name }</span>
          {timeLeft !== 0 ? <TaskTimer timeLeftProp={timeLeft} onToggleCheckbox={() => onToggleCheckbox(id) } isCompleted={isCompleted}/> : null}
          <span className="created"><Time dateCreated={dateCreated} /></span>
        </label>
        <button className="icon icon-edit" onClick={ showEditForm } type='button' alt='edit'/>
        <button className="icon icon-destroy" onClick={onDeleted} type='button' alt='delete'/>
      </div>
      {isEditing === true ? <EditForm
      editItem={editItem}
      id={id}
      name={name}/> : null}
    </li>
  )

}


Task.propTypes = {
  item: PropTypes.shape({
    
  }),
  dateCreated: PropTypes.instanceOf(Date),
  onDeleted: PropTypes.func,
  onToggleCheckbox: PropTypes.func,
  editItem: PropTypes.func,
  showEditForm: PropTypes.func,
  name: PropTypes.string,
  isCompleted: PropTypes.bool.isRequired,
  isEditing: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  timeLeft: PropTypes.instanceOf(Date).isRequired
}

Task.defaultProps = {
  item: {},
  onDeleted: () => {},
  onToggleCheckbox: () => {},
  editItem: () => {},
  showEditForm: () => {},
  dateCreated: {},
  name: '',
}

export default Task