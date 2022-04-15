import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import {useRef, useState} from 'react'
import { propTypes } from 'react-bootstrap/esm/Image';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function SignIn() {
  
  const userName = useRef(null)
  const password = useRef(null)

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

  const findMatch = () => {
    const { name, password } = form
    const newErrors = {}
    for (const user of this.props.users) {
      console.log(user)
      if (user.userName === name && user.password === password) return user
    }
    
    newErrors.notUser = 'no account with these credentials!'
  
    return newErrors
  }
  
  const handleSubmit = e => {
    const newErrors = findMatch()
    if ( Object.keys(newErrors).length === 0 ) {
      
      window.location.href = '/chat'
    } else {
      setErrors(newErrors)  
    }
    return false;
  }

  return (
      <Container className='register_signIn'>
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

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Link to="/chat">
        <Button variant="primary" type="button" onClick={()=>handleSubmit(findMatch())}>
          WELCOME
        </Button>
        </Link>
        Not a member?
        <Link to="/register">
        <Button variant="link" type="button" >
          Click Here
        </Button>
        </Link>
      </Form>
      </Container>
  );
}

export default SignIn;
