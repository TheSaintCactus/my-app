import React, { Component } from "react";
import './edit-form.css'
import PropTypes from 'prop-types'


export default class EditForm extends Component {

  constructor({ name }) {
  super()
  this.state = {
    label: name
  }
}

onLabelEdit = (event) => {
    
    this.setState({
        label: event.target.value
    }) 
    
}
	
onSubmit = (event) => {
  const { label } = this.state
  const { editItem, id } = this.props
  event.preventDefault();
  editItem(label, id)
}

  render () {

    const { name } = this.props

  return (<form onSubmit={this.onSubmit}>
    <input type="text" className="edit" defaultValue={ name } onChange={this.onLabelEdit} />
    </form>)
  }
};

EditForm.propTypes = {
  editItem: PropTypes.func,
  id: PropTypes.number.isRequired,
  name: PropTypes.string
}

EditForm.defaultProps = {
  editItem: () => {},
  name: ''
}