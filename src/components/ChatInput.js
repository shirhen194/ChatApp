import '../App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, DropdownButton, Stack } from 'react-bootstrap';
import { useRef, useState } from "react";

function ChatInput(props){
    const message = useRef("");
    //const [input, setInput]= useState("");
    // const sendMessageAndClearInput= ()=>{
    //   props.addMessage(input.current.value,props.conversation_id);
    //   setInput(()=>"")
    // }

  
    return(
        <div className='message-input'>
        <>
          <Stack direction="horizontal" gap={3}>
            <Form.Control  ref={message} className="me-auto" placeholder="Type your message here..."/>
            <Button variant="secondary" onClick={()=>props.addMessage(message.current.value,props.conversation_id)} >Submit</Button>
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
    );
}

export default ChatInput;