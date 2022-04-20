import '../App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast'
import { useRef, useState } from 'react'
import Form from 'react-bootstrap/Form';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Conversations(props, changeConversationId) {

  const [showA, setShowA] = useState(false)
  const [errorContact, setErrContact] = useState("")

  const contactName = useRef(null)

  const toggleShowA = () => setShowA(!showA)

  const signOut = () => {
    props.setOnline(null)
  }

  const addContact = () => {
    //if already has
    if (props.online.contacts.includes(contactName.current.value)) {
      setErrContact("You already have this contact!")
    }
    //if same name as myself?
    else if (props.online.userName === contactName.current.value) {
      setErrContact("You can't add yourself!")
    }
    else if (contactName.current.value === "") {
      setErrContact("Please enter a name!")
    }
    else if (!props.users.includes(contactName.current.value)) {
      setErrContact("This user does not exist!")
    }
    else {
      setErrContact("")
      props.addConversation(contactName.current.value)
      setShowA(false)
    }
  }

  return (
    <Container>
      <div className='top-convos'>
        <img
          className="profile-pic"
          src={props.online.pic}
          alt="profile_pic"
        />
        <div className="convo-btn" onClick={toggleShowA} >
          Add Conversation
        </div>
        <div className="convo-btn">
          <Link to="/" onClick={signOut} style={{
            textDecoration: 'none',
            color: 'inherit',
            fontSize: '1rem'
          }}>
            Sign Out
          </Link>
        </div>
      </div>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-3"
            alt=""
          />
          <strong className="me-auto">New contact</strong>
        </Toast.Header>
        <Toast.Body>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Enter friend's contact name (display name):</Form.Label>
            <Form.Control type="userName" placeholder="Display name" ref={contactName} />
          </Form.Group>
          <div className="error" style={{ color: 'red' }}>{errorContact}</div>
          <Button variant="primary" type="submit" onClick={addContact}>
            Add
          </Button>
        </Toast.Body>
      </Toast>
      <div className='conversations-flow'>
        {renderConvos()}
      </div>
    </Container>

  );

  function renderConvos() {
    return props.conversations.filter(c => {
      return (c.users.includes(props.online.userName));
    }).map(cf => {
      let otherUserName = cf.users[0] !== props.online.userName ? cf.users[0] : cf.users[1];
      let otherUser = props.users.find(u => u.userName === otherUserName);
      return (
        <div key={otherUser.displayName} className="convo">
          <img className="convos-pic" src={otherUser.pic} alt="profile_pic" />
          <div className="convo-message-wrap">
            <div id="convo-name">{otherUser.displayName}</div>
            {cf.messeages.length > 0 && <div id="convo-last-message">{cf.messeages.at(-1).content}</div>}
          </div>
        </div>
      );
    });
  }
}

export default Conversations;