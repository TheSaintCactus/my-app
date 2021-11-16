import React, { Component } from 'react'
import './new-task-form.css'
import PropTypes from 'prop-types'

export default class NewTaskForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (event) => {
        
        this.setState({
            label: event.target.value
        })
    }


    onSubmit = (event) => {
        const { label } = this.state
        const { addItem } = this.props
        event.preventDefault();
        addItem(label)
        this.setState({
            label: ''
        })
    }

    render () {

    const { label } = this.state

    return <form onSubmit={this.onSubmit}>
           <input className="new-todo" 
                  placeholder="What needs to be done?" 
                  onChange={this.onLabelChange}
                  value={label} />
                  </form>
    }
}

NewTaskForm.propTypes = {
    addItem: PropTypes.func
}

NewTaskForm.defaultProps = {
  addItem: () => {}
}