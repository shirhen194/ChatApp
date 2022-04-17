import '../App.css';
import ChatInput from './ChatInput';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Stack } from 'react-bootstrap';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Chat(props) {
  return (
    <div className='chat-wrapper'>
      <div className='chat-flow'>
        here goes chat
      </div>
      <ChatInput> </ChatInput>
    </div>
  );
}


export default Chat;
