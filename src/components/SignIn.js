import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function SignIn() {
  return (
      <Container className='register_signIn'>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Link to="/chat">
        <Button variant="primary" type="button">
          WELCOME
        </Button>
        </Link>
        Not a member?
        <Link to="/">
        <Button variant="link" type="button" >
          Click Here
        </Button>
        </Link>
      </Form>
      </Container>
  );
}

export default SignIn;
