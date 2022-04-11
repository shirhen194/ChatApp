import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import {useRef} from 'react'
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Register(props) {
  const userName = useRef(null)
  const password = useRef(null)
  const displayName = useRef(null)

  return (
      <Container>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" ref={userName} placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" ref={password} placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Display Name</Form.Label>
          <Form.Control type="name" ref={displayName} placeholder="Enter display name" />
        </Form.Group>
        <Link to="/chat">
        <Button variant="primary" type="button" onClick={()=> {
          props.addUser({userName:userName.current.value,
              password: password.current.value,
              displayName: displayName.current.value,
              contacts:[]})
        }}>
          WELCOME
        </Button>
        </Link>
      </Form>
      </Container>
  );
}

export default Register;
