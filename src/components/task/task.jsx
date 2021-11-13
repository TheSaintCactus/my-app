import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import './task.css'

class EditingTask extends Component {
  
  state = {
    label: ''
}
onLabelEdit = (e) => {
    
    this.setState({
        label: e.target.value
    }) 
    
}
	
onSubmit = (e) => {
  e.preventDefault();
  this.props.editItem(this.state.label, this.props.id)
}

  render () {
  return <form onSubmit={this.onSubmit}>
    <input type="text" className="edit" defaultValue={ this.props.name } onChange={this.onLabelEdit}/>
    </form>
  }
};

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
          <span className="created">{ formatDistanceToNow(new Date()) }</span>
        </label>
        <button className="icon icon-edit" onClick={ this.props.showEditForm }></button>
        <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
      </div>
      {this.props.isEditing === true ? <EditingTask
      editItem={this.props.editItem}
      id={this.props.id}
      name={this.props.name}/> : null}
    </li>
  );
  }
};

