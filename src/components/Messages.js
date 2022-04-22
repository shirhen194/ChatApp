import '../App.css';


function LeftMessage(props){
    return(
        <ul>{props.content}</ul>
    );
}

function RightMessage(props){
    return(
        <ul class='RightMessage'>{props.content}</ul>
    );
}

function Messages(props){
    const c_id = (element) => element.id == props.conversation_id;
    const current_conversation_index = props.conversations.findIndex(c_id);

    const createMessage = function(self, user, content){
        if (self==user)
            return <RightMessage content={content}/>
        else
            return <LeftMessage content={content}/>
    }

    return(
        <div>
            {props.conversations[current_conversation_index].messages.map(({user, type, content}) => createMessage(props.self, user, content))}
        </div>

    );

}
export default Messages;
