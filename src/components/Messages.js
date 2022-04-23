import '../App.css';


function LeftMessage(props) {
    if (props.type === "recording") {
        return (<div className="LeftMessageWraper">
            <ul className='LeftMessage'> <audio src={props.content} controls />
            </ul>
        </div>);
    } else if (props.type === "img") {
        return (<div className="LeftMessageWraper">
            <ul className='LeftMessage'> <img src={props.content} alt="img" style={{ width: '20vh', height: '20vh' }} /></ul>
        </div>
        )
    }
    else if(props.type === "video"){
        return (<div className="LeftMessageWraper">
            <ul className='LeftMessage'> <video src={props.content} alt="vid" style={{ width: '50vh'}} controls /></ul>
        </div>
        )
    }
    else {
        return (<div className="LeftMessageWraper">
            <ul className='LeftMessage'>{props.content}</ul>
        </div>
        )
    }
}

function RightMessage(props) {
    if (props.type === "recording") {
        return (<div className="RightMessageWraper">
            <ul className='RightMessage'> <audio src={props.content} controls />
            </ul>
        </div>);
    } else if (props.type === "img") {
        return (<div className="RightMessageWraper">
            <ul className='RightMessage'> <img src={props.content} style={{ width: '20vh', height: '20vh' }}alt="img" /></ul>
        </div>
        )
    } else if (props.type === "video") {
        return (<div className="RightMessageWraper">
            <ul className='RightMessage'> <video src={props.content} alt="vid" style={{ width: '50vh'}} controls/></ul>
        </div>
        )
    }
    else {
        return (<div className="RightMessageWraper">
            <ul className='RightMessage'>{props.content}</ul>
        </div>)
    }
}

function Messages(props) {
    const c_id = (element) => element.id == props.conversation_id;
    const current_conversation_index = props.conversations.findIndex(c_id);

    const createMessage = function (self, user, content, key, type) {
        if (self == user)
            return <RightMessage key={key} content={content} type={type} />
        else
            return <LeftMessage key={key} content={content} type={type} />
    }

    return (
        <div>
            {props.conversations[current_conversation_index].messages.map(({ user, type, content }, index) => createMessage(props.self, user, content, index, type))}
        </div>

    );

}
export default Messages;
