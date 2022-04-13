import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Conversations from './Conversations';
import  Chat from './Chat';
function ChatScreen(props) {
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
      <div className='conversations'><Conversations {...props} /></div>
      <div className='chat'><Chat/></div>
    </div>
  );
}

export default ChatScreen;
