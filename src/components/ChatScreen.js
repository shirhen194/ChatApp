import '../App.css';
// import {Row, Col} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Conversations from './Conversations';
import  Chat from './Chat';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function ChatScreen() {
  return (
    // <Container fluid>
    //   <Row style={{
    //       height: '80%'
    //     }}>
    //     <Col sm={8}><Conversations/></Col>
    //     <Col sm={4}><Chat/></Col>
    //   </Row>
    // </Container>
    <div className='web-chat'>
      <div className='conversations'><Conversations/></div>
      <div className='chat'><Chat/></div>

    </div>
  );
}

export default ChatScreen;
