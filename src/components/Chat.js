import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Chat() {
  return (
    <div className='chat-wrapper'>
      <div className='chat-flow'>
        here goes chat
      </div>
      <div className='message-input'>
        message input
      </div>
    </div>
  );
}

export default Chat;
