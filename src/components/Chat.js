import '../App.css';
import ChatInput from './ChatInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './Messages'



function Chat(props) {

  return (
    <div className='chat-wrapper'>
      <div className='chat_heder'> chat heder</div>
      <div className='chat-flow'>
        <Messages conversation_id={props.conversation_id} conversations={props.conversations}></Messages>
      </div>
      <ChatInput {...props}></ChatInput>
    </div>
  );
}


export default Chat;
