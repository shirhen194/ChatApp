import '../App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import {useRef, useState} from 'react'
import Form from 'react-bootstrap/Form';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Conversations(props) {

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const signOut = () => {
    props.setOnline(null)
    window.location.href = '/'
  }

  
  return (
    <Container>
      <Row className='self'>
        <Col>my pic</Col>
        <Col xs={4}></Col>
        <Col>
        <Button onClick={toggleShowA} className="mb-2">
          new chat
        </Button>
        <Toast show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-3"
              alt=""
            />
            <strong className="me-auto">Enter friend's username</strong>
          </Toast.Header>
          <Toast.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="username" placeholder="Enter username" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
          </Toast.Body>
        </Toast>
        </Col>
        <Col>
          <Link to="/">
            <Button variant="link" type="button" onClick={signOut}>
              Sign Out
            </Button>
          </Link>
        </Col>
      </Row>
      <div className='conversations-flow'>
        {newFunction()}
      </div>
    </Container>

  );

  function newFunction() {
    return props.conversations.filter(c => {
      return (c.users.includes(props.online));
    }).map(cf => {
      let otherUserName = cf.users[0] !== props.online ? cf.users[0] : cf.users[1];
      let otherUser = props.users.find(u => u.userName === otherUserName);
      // console.log()
      return (
        <div key={otherUser.displayName} className="convo">
          <img className="convos-pic" src={otherUser.pic} alt="profile_pic" />
          <div className="convo-message-wrap">
            <div id="convo-name">{otherUser.displayName}</div>
            <div id="convo-last-message">{cf.messeages.at(-1).content}</div>
          </div>
        </div>
      );
    });
  }
}

export default Conversations;
