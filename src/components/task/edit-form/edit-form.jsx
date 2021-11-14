import React, { Component } from "react";
import './edit-form.css'
import PropTypes from 'prop-types'


export default class EditForm extends Component {
  
  state = {
    label: this.props.name
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
    <input type="text" className="edit" defaultValue={ this.props.name } onChange={this.onLabelEdit} autoFocus/>
    </form>
  }
};

EditForm.propDefault = {
  editItem: PropTypes.func,
  id: PropTypes.num,
  name: PropTypes.string
}

EditForm.defaultProps = {
  editItem: () => {},
  name: ''
}