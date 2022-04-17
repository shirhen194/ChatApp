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
  const password_confirmation = useRef(null)
  const displayName = useRef(null)
  const pic = useRef(null)

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
    const { name, password, displayName, pic } = form
    const newErrors = {}
    // userName errors
    if ( !name || name === '' ) newErrors.name = 'enter username!'
    // password errors
    if ( !password && password === '') newErrors.password = 'enter password!'
    else if ( !(/[^0-9]+/.test(password) && /[^A-Za-z]+/.test(password))) newErrors.password = 'password must include numbers and letters!'
    // password confirmation errors
    if ( password.value !== password_confirmation.value) newErrors.password_confirmation = 'passwords do not match'
    // dispalyName errors
    if ( !displayName || displayName === '' ) setField('displayName', name)
    //profile pic errors TODO
    if ( !pic ) setField('pic', "aviad_cat.png")
    else if ( !pic.match(/\.(jpg|jpeg|png|gif)$/)) newErrors.pic = 'enter profile pic'
    
    return newErrors
  }
  
  const handleSubmit = e => {
    const newErrors = findFormErrors()
    if ( Object.keys(newErrors).length > 0 ) {
      setErrors(newErrors)
    } else {
      let newUsers = [...props.users]
      newUsers.push({                                    
            userName:userName.current.value,
            password: password.current.value,
            displayName: displayName.current.value,
            pic: pic.current.value,
            contacts:[]
          });

          props.setUsers(newUsers)


          for(var i = 0; i < (props.users).length; i++) {
            console.log(props.users[i])
        }
        window.location.href = '/chat' 
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

        <Form.Group className="mb-3">
          <Form.Label>Password confirmation</Form.Label>
          <Form.Control 
            type="password" 
            ref={password_confirmation} 
            placeholder="confirm password" 
            onChange={ e => setField('password_confirmation', e.target.value) } 
            isInvalid={ !!errors.password_confirmation }
            />
          <Form.Control.Feedback type='invalid'>
            { errors.password_confirmation }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control 
            type="name" 
            ref={displayName} 
            placeholder="Enter display name" 
            onChange={ e => setField('displayName', e.target.value) }
            isInvalid={ !!errors.displayName }
         />
          <Form.Control.Feedback type='invalid'>
            { errors.displayName }
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label >profile_pic</Form.Label>
          <Form.Control 
            type="file" 
            ref={pic} 
            placeholder="Enter profile picture" 
            onChange={ e => setField('pic', e.target.value) }
            isInvalid={ !!errors.pic }
         />
          <Form.Control.Feedback type='invalid'>
            { errors.pic }
          </Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="button" onClick={()=>handleSubmit(findFormErrors())}>
          WELCOME
        </Button>
        
        Already a member?
        <Link to="/">
        <Button variant="link" type="button" >
          Click Here
        </Button>
        </Link>
      </Form>
      </Container>
  );
}

export default Register;
