import '../App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Conversations(props) {
  return (
    <Container>
      <Row className='self'>
        <Col>my pic</Col>
        <Col xs={4}></Col>
        <Col>new chat</Col>
        <Col>
          <Link to="/signIn">
            <Button variant="link" type="button" >
              Sign Out
            </Button>
          </Link>
        </Col>
      </Row>
      <div>here goes the conversations</div>
    </Container>

  );
}

export default Conversations;
