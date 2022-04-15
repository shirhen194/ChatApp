import '../App.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'

// import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Conversations(props) {

  
  return (
    <Container>
      <Row className='self'>
        <Col>my pic</Col>
        <Col xs={4}></Col>
        <Col>new chat</Col>
        <Col>
          <Link to="/signIn">
            <Button variant="link" type="button" >
              Sign Out
            </Button>
          </Link>
        </Col>
      </Row>
      <div className='conversations-flow'>
        {newFunction()}
      </div>
    </Container>

  );

  function newFunction() {
    return props.conversations.filter(c => {
      return (c.users.includes(props.online));
    }).map(cf => {
      let otherUserName = cf.users[0] !== props.online ? cf.users[0] : cf.users[1];
      let otherUser = props.users.find(u => u.displayName === otherUserName);
      // console.log()
      return (
        <div key={otherUser.displayName} className="convo">
          <img className="convos-pic" src={otherUser.pic} alt="profile_pic" />
          <div className="convo-message-wrap">
            <div id="convo-name">{otherUser.displayName}</div>
            <div id="convo-last-message">{cf.messeages.at(-1).content}</div>
          </div>
        </div>
      );
    });
  }
}

export default Conversations;
