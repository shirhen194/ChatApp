import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import {useRef, useState} from 'react'


function Register(props) {
  const userName = useRef(null)
  const password = useRef(null)
  const displayName = useRef(null)

  const [ form, setForm ] = useState({})
  const [ errors, setErrors ] = useState({})

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    // Check and see if errors exist, and remove them from the error object:
    if ( !!errors[field] ) setErrors({
      ...errors,
      [field]: null
    })
  }

  const findFormErrors = () => {
    const { name, password, displayName } = form
    const newErrors = {}
    // userName errors
    if ( !name || name === '' ) newErrors.name = 'enter username!'
    // password errors
    let pattern = /^[[a-zA-Z]+ [0-9]+]* | [[0-9]+ [a-zA-Z]+]* | [[0-9]+[a-zA-Z]+[0-9]+]*$/ ;
    if ( pattern.test(password)) newErrors.password = 'enter password!'
    // dispalyName errors
    //if ( !displayName || displayName === '' ) 
    return newErrors
  }
  
  const handleSubmit = e => {
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
        props.addUser({
            userName:userName.current.value,
            password: password.current.value,
            displayName: displayName.current.value,
            contacts:[]});
        window.location.href = '/chat'
    }
    return false;
  }

  return (
      <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>UserName</Form.Label>
          <Form.Control 
            type="username" 
            ref={userName} 
            placeholder="Enter username"
            onChange={ e => setField('name', e.target.value) }
            isInvalid={ !!errors.name }
          />
          <Form.Control.Feedback type='invalid'>
            { errors.name }
          </Form.Control.Feedback> 
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            ref={password} 
            placeholder="Password" 
            onChange={ e => setField('password', e.target.value) } 
            isInvalid={ !!errors.password }
            />
          <Form.Control.Feedback type='invalid'>
            { errors.password }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control 
            type="name" ref={displayName} 
            placeholder="Enter display name" 
            onChange={ e => setField('displayName', e.target.value) }
            isInvalid={ !!errors.displayName }
         />
          <Form.Control.Feedback type='invalid'>
            { errors.displayName }
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="button" onClick={()=>handleSubmit(findFormErrors())}>
          WELCOME
        </Button>
        
        Already a member?
        <Link to="/signIn">
        <Button variant="link" type="button" >
          Click Here
        </Button>
        </Link>
      </Form>
      </Container>
  );
}

export default Register;
