import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Conversations from './Conversations';
import  Chat from './Chat';
import React from 'react';

class ChatScreen extends React.Component {

  constructor() {
    super()
    this.state = {conversation_id:1}
    this.changeConversationId = this.changeConversationId.bind(this)
  }
  
  changeConversationId =(c_id)=>{
    this.setState({conversation_id:c_id});
  } 
  

  render() {
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
      <div className='conversations'><Conversations changeConversationId={this.changeConversationId} {...this.props} /></div>
      <div className='chat'><Chat conversation_id={this.state.conversation_id} conversations={this.props.conversations}  /></div>
    </div>
    );
  }
}

export default ChatScreen;
