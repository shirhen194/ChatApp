import '../App.css';
import ChatInput from './ChatInput';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton, Stack } from 'react-bootstrap';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import useState from 'react'
import Message from './Message'

function Chat(props) {

  //const [MesssgeArray, setMessageArray]= useState('');

  //const sendMessage = function(message){
    //setMessageArray(message)
  //}



  return (
    <div className='chat-wrapper'>
      <div className='chat-flow'>
        here goes chat
      </div>
      <ChatInput>
         </ChatInput>
    </div>
  );
}


export default Chat;
