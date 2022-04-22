import '../App.css';
import ChatInput from './ChatInput';
import 'bootstrap/dist/css/bootstrap.min.css';
import Messages from './Messages'
import ChatHeader from './ChatHeader';


function Chat(props) {
  return (
    <div className='chat-wrapper'>
      <div className='chat_heder'>
        <ChatHeader 
         conversation_id={props.conversation_id} 
         conversations={props.conversations}
         online={props.online}
         users={props.users}></ChatHeader>
      </div>
      <div className='chat-flow'>
        <Messages 
        conversation_id={props.conversation_id} 
        conversations={props.conversations}
        self={props.online.displayName}></Messages>
      </div>
      <ChatInput 
      addMessage={props.addMessage}
      conversation_id={props.conversation_id}></ChatInput>
    </div>
  );
}


export default Chat;
