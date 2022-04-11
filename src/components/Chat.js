import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import { InputGroup, Dropdown, DropdownButton, FormControl, Stack } from 'react-bootstrap';

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Chat(props) {
  return (
    <div className='chat-wrapper'>
      <div className='chat-flow'>
        here goes chat
      </div>
      <div className='message-input'>
        <>

          <Stack direction="horizontal" gap={3}>
            <Form.Control className="me-auto" placeholder="Type your message here..." />
            <Button variant="secondary">Submit</Button>
            <div className="vr" />
            <DropdownButton
              variant="outline-secondary"
              title="Attach"
              id="input-group-dropdown-2"
              align="end"
            >
              <Dropdown.Item href="#">Audio</Dropdown.Item>
              <Dropdown.Item href="#">Image</Dropdown.Item>
              <Dropdown.Item href="#">Video</Dropdown.Item>
            </DropdownButton>
          </Stack>

        </>
      </div>
    </div>
  );
}

export default Chat;
