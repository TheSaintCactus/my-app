import React, { useState } from "react";
import './edit-form.css'
import PropTypes from 'prop-types'




const EditForm = function EditForm({ name, editItem, id}) {

  const [label, setLabel] = useState(name)


  const onLabelEdit = (event) => {
    
    setLabel(event.target.value)
    
}
	
const onSubmit = (event) => {
  event.preventDefault();
  editItem(label, id)
}




  return (<form onSubmit={onSubmit}>
    <input type="text" className="edit" defaultValue={ name } onChange={onLabelEdit} />
    </form>) 
}

EditForm.propTypes = {
  editItem: PropTypes.func,
  id: PropTypes.number.isRequired,
  name: PropTypes.string
}

EditForm.defaultProps = {
  editItem: () => {},
  name: ''
}




export default EditForm