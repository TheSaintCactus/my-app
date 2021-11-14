import React, { Component } from "react";
import './task.css'
import EditForm from "./edit-form";
import PropTypes from 'prop-types'
import Time from './time'


export default class Task extends Component {
  

  render () {


    
  return (
    <li className={ this.props.isEditing ? 'editing' : this.props.isCompleted ? 'completed' : 'active'}>
      
      <div className="view">
      <input
        className='toggle'
				type="checkbox"
				checked={this.props.isCompleted}
				onChange={this.props.onToggleCheckbox}
			/>
        <label>
          <span className="description">{ this.props.name }</span>
          <span className="created"><Time dateCreated={this.props.dateCreated} /></span>
        </label>
        <button className="icon icon-edit" onClick={ this.props.showEditForm }></button>
        <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
      </div>
      {this.props.isEditing === true ? <EditForm
      editItem={this.props.editItem}
      id={this.props.id}
      name={this.props.name}/> : null}
    </li>
  );
  }
};


Task.propTypes = {
  item: PropTypes.object,
  onDeleted: PropTypes.func,
  onToggleCheckbox: PropTypes.func,
  editItem: PropTypes.func,
  showEditForm: PropTypes.func,
  dateCreated: PropTypes.object
}

Task.defaultProps = {
  item: {},
  onDeleted: () => {},
  onToggleCheckbox: () => {},
  editItem: () => {},
  showEditForm: () => {},
  dateCreated: {},
}
