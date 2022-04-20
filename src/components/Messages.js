import '../App.css';


function Messages(props){
    const c_id = (element) => element.id == props.conversation_id;
    const current_conversation_index = props.conversations.findIndex(c_id);
    return(
        <div>
            {props.conversations[current_conversation_index].messages.map(({user, type, content}) => <ul>{content}</ul>)}
        </div>
    );

}
export default Messages;






/**
 *  {props.conversations[current_conversation_index].messages.map(({user, type, content}) => <ul>{content}</ul>)}
 * 
 * 
 */