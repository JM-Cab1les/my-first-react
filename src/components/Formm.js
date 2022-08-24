import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Formm = (props) => {
  return ( 
<Form>
    <div className="form-container">
        <Form.Control type="text" placeholder="Enter something" className="form-input" onChange={props.handleChange}/>
    </div>
    <Button variant="primary" type="submit" className="submit-btn">
        Add
    </Button>
    <div className= 'form-container-1'>
        <Form.Control type="text" value={props.myDiary} placeholder="____" readOnly className="form-input-1"/>
    </div>
</Form>
  )
}

export default Formm