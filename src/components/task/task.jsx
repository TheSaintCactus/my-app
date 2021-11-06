import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";
import './task.css'


const EditingTask = () => {
  return <input type="text" className="edit" defaultValue="Editing task" />;
};

export default class Task extends Component {
  
 
		state = {
      className: this.props.className,
      checked: this.props.className === 'completed' ? true : false
    };
	

  handleCheckboxChange(event) {
		this.setState(( {checked} ) => {
      return {
        checked: !checked,
        className:  (!checked ? 'completed' : 'active')
        
      }
    });
	}
  
  render () {
  return (
    <li className={this.state.className}>
      
      <div className="view">
      <input
        className='toggle'
				type="checkbox"
				checked={this.state.checked}
				onChange={this.handleCheckboxChange.bind(this)}
			/>
        <label>
          <span className="description">{ this.props.name }</span>
          <span className="created">{ formatDistanceToNow(new Date()) }</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
      </div>

      {this.props.className === "editing" ? <EditingTask /> : null}
    </li>
  );
  }
};

