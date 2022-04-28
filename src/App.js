import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import ChatScreen from './components/ChatScreen';
import SignIn from './components/SignIn';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [{ userName: "Shir1", password: "a123", displayName: "Shir", pic: "cat_shir.jpg", contacts: ["Aviad", "Reut", "Sam", "Daniel", "Dana"] },
      { userName: "Aviad1", password: "a123", displayName: "Aviad", pic: "cat_aviad.jpg", contacts: ["Shir"] },
      { userName: "Daniel1", password: "a123", displayName: "Daniel", pic: "cat_daniel.jpeg", contacts: ["Reut", "Sam"] },
      { userName: "Sam1", password: "a123", displayName: "Sam", pic: "cat_sam.jpeg", contacts: ["Daniel", "Sam"] },
      { userName: "Reut1", password: "a123", displayName: "Reut", pic: "cat_reut.jpg", contacts: ["Shir"] },
      { userName: "Dana1", password: "a123", displayName: "Dana", pic: "black-cat.webp", contacts: ["Shir"] }],
      conversations: [{
        users: ["", ""],
        id: 0,
        messages: []
      },
      {
        users: ["Shir1", "Reut1"],
        id: 1,
        messages: [
          {
            user: "Shir",
            type: "img",
            content: "hello.jpg",
            timeStamp: new Date(
              2022, 4, 20, 14, 30).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "Hi :)",
            timeStamp: new Date(
              2022, 4, 20, 14, 31).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "What's up?",
            timeStamp: new Date(
              2022, 4, 20, 14, 32).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm good, doing Pesah homework",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "You?",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()

          },
          {
            user: "Reut",
            type: "text",
            content: "I'm great, doing homework too",
            timeStamp: new Date(
              2022, 4, 20, 14, 35).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Good for you, i'm watching cat videos",
            timeStamp: new Date(
              2022, 4, 20, 14, 36).toDateString()
          },
          {
            user: "Shir",
            type: "recording",
            content: "please-take-your-seats.mp3",
            timeStamp: new Date(
              2022, 4, 20, 14, 53).toDateString()
          },
          {
            user: "Shir",
            type: "video",
            content: "pianoCat.mp4",
            timeStamp: new Date(
              2022, 4, 20, 14, 54).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "wow! so sweet!",
            timeStamp: new Date(
              2022, 4, 20, 14, 59).toDateString()
          },
        ]
      },
      {
        users: ["Aviad1", "Shir1"],
        id: 2,
        messages: [
          {
            user: "Aviad",
            type: "text",
            content: "Hi Shir,how's it going?",
            timeStamp: new Date(
              2022, 4, 22, 16, 31).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm great, how are you?",
            timeStamp: new Date(
              2022, 4, 22, 17, 31).toDateString()
          },
          {
            user: "Aviad",
            type: "text",
            content: "Awsome, can you help me with something in github?",
            timeStamp: new Date(
              2022, 4, 22, 17, 32).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Sure! what do you need?",
            timeStamp: new Date(
              2022, 4, 22, 17, 33).toDateString()
          },
          {
            user: "Aviad",
            type: "text",
            content: "I'm trying to solve a conflict in merging to dev",
            timeStamp: new Date(
              2022, 4, 22, 17, 34).toDateString()
          },
          {
            user: "Aviad",
            type: "video",
            content: "gitConflict.mp4",
            timeStamp: new Date(
              2022, 4, 22, 17, 34).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Ok, I'll go check it now",
            timeStamp: new Date(
              2022, 4, 22, 17, 35).toDateString()
          },
          {
            user: "Aviad",
            type: "recording",
            content: "thank-you.mp3",
            timeStamp: new Date(
              2022, 4, 22, 17, 37).toDateString()
          },
        ]
      },
      {
        users: ["Daniel1", "Reut1"],
        id: 3,
        messages: [
          {
            user: "Daniel",
            type: "text",
            content: "Hi :)",
            timeStamp: new Date(
              2022, 4, 22, 18, 10).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "Hi :)",
            timeStamp: new Date(
              2022, 4, 22, 18, 11).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "What's up?",
            timeStamp: new Date(
              2022, 4, 22, 18, 13).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "all good",
            timeStamp: new Date(
              2022, 4, 22, 18, 15).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "how are you?",
            timeStamp: new Date(
              2022, 4, 22, 18, 15).toDateString()
          },
          {
            user: "Reut",
            type: "text",
            content: "I'm great, thanks for asking",
            timeStamp: new Date(
              2022, 4, 22, 18, 16).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "Check out this new cat!",
            timeStamp: new Date(
              2022, 4, 22, 18, 16).toDateString()
          },
          {
            user: "Daniel",
            type: "img",
            content: "chatCat.jpg",
            timeStamp: new Date(
              2022, 4, 22, 18, 16).toDateString()
          },
        ]
      },
      {
        users: ["Sam1", "Daniel1"],
        id: 4,
        messages: [
          {
            user: "Sam",
            type: "text",
            content: "Hey man",
            timeStamp: new Date(
              2022, 4, 25, 6, 42).toDateString()
          },
          {
            user: "Sam",
            type: "text",
            content: "I think you and I are just Bots",
            timeStamp: new Date(
              2022, 4, 25, 6, 43).toDateString()
          },
          {
            user: "Sam",
            type: "img",
            content: "robots.jpg",
            timeStamp: new Date(
              2022, 4, 25, 6, 44).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "I can't believe it!",
            timeStamp: new Date(
              2022, 4, 25, 6, 46).toDateString()
          },
          {
            user: "Sam",
            type: "text",
            content: "Well, better start finding another job",
            timeStamp: new Date(
              2022, 4, 25, 6, 48).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "Know anyone looking to buy instagram followers?",
            timeStamp: new Date(
              2022, 4, 25, 6, 53).toDateString()
          },
          {
            user: "Daniel",
            type: "recording",
            content: "laugh.mp3",
            timeStamp: new Date(
              2022, 4, 25, 6, 53).toDateString()
          },
        ]
      },
      {
        users: ["Shir1", "Sam1"],
        id: 1,
        messages: [
          {
            user: "Shir",
            type: "img",
            content: "hello.jpg",
            timeStamp: new Date(
              2022, 4, 20, 14, 30).toDateString()
          },
          {
            user: "Sam",
            type: "text",
            content: "Hi :)",
            timeStamp: new Date(
              2022, 4, 20, 14, 31).toDateString()
          },
          {
            user: "Sam",
            type: "text",
            content: "What's up?",
            timeStamp: new Date(
              2022, 4, 20, 14, 32).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm good, doing Pesah homework",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "You?",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()

          },
          {
            user: "Sam",
            type: "text",
            content: "I'm great, doing homework too",
            timeStamp: new Date(
              2022, 4, 20, 14, 35).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Good for you, i'm watching cat videos",
            timeStamp: new Date(
              2022, 4, 20, 14, 36).toDateString()
          },
          {
            user: "Shir",
            type: "recording",
            content: "please-take-your-seats.mp3",
            timeStamp: new Date(
              2022, 4, 20, 14, 53).toDateString()
          },
          {
            user: "Shir",
            type: "video",
            content: "pianoCat.mp4",
            timeStamp: new Date(
              2022, 4, 20, 14, 54).toDateString()
          },
          {
            user: "Sam",
            type: "text",
            content: "wow! so sweet!",
            timeStamp: new Date(
              2022, 4, 20, 14, 59).toDateString()
          },
        ]
      },
      {
        users: ["Shir1", "Daniel1"],
        id: 4,
        messages: [
          {
            user: "Shir",
            type: "text",
            content: "Hey man",
            timeStamp: new Date(
              2022, 4, 25, 6, 42).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "I think you and I are just Bots",
            timeStamp: new Date(
              2022, 4, 25, 6, 43).toDateString()
          },
          {
            user: "Shir",
            type: "img",
            content: "robots.jpg",
            timeStamp: new Date(
              2022, 4, 25, 6, 44).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "I can't believe it!",
            timeStamp: new Date(
              2022, 4, 25, 6, 46).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Well, better start finding another job",
            timeStamp: new Date(
              2022, 4, 25, 6, 48).toDateString()
          },
          {
            user: "Daniel",
            type: "text",
            content: "Know anyone looking to buy instagram followers?",
            timeStamp: new Date(
              2022, 4, 25, 6, 53).toDateString()
          },
          {
            user: "Daniel",
            type: "recording",
            content: "laugh.mp3",
            timeStamp: new Date(
              2022, 4, 25, 6, 53).toDateString()
          },
        ]
      },
      {
        users: ["Shir1", "Dana1"],
        id: 1,
        messages: [
          {
            user: "Shir",
            type: "img",
            content: "hello.jpg",
            timeStamp: new Date(
              2022, 4, 20, 14, 30).toDateString()
          },
          {
            user: "Dana",
            type: "text",
            content: "Hi :)",
            timeStamp: new Date(
              2022, 4, 20, 14, 31).toDateString()
          },
          {
            user: "Dana",
            type: "text",
            content: "What's up?",
            timeStamp: new Date(
              2022, 4, 20, 14, 32).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm good, doing Pesah homework",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "You?",
            timeStamp: new Date(
              2022, 4, 20, 14, 33).toDateString()

          },
          {
            user: "Dana",
            type: "text",
            content: "I'm great, doing homework too",
            timeStamp: new Date(
              2022, 4, 20, 14, 35).toDateString()
          },
          {
            user: "Shir",
            type: "text",
            content: "Good for you, i'm watching cat videos",
            timeStamp: new Date(
              2022, 4, 20, 14, 36).toDateString()
          },
          {
            user: "Shir",
            type: "recording",
            content: "please-take-your-seats.mp3",
            timeStamp: new Date(
              2022, 4, 20, 14, 53).toDateString()
          },
          {
            user: "Shir",
            type: "video",
            content: "pianoCat.mp4",
            timeStamp: new Date(
              2022, 4, 20, 14, 54).toDateString()
          },
          {
            user: "Dana",
            type: "text",
            content: "wow! so sweet!",
            timeStamp: new Date(
              2022, 4, 20, 14, 59).toDateString()
          },
        ]
      },
      ],
      online: "",
    }
    this.addMessage = this.addMessage.bind(this)
  }

  // componentDidMount = () => {
  //   this.setState({
  //     online: this.state.users[0]
  //   })
  // }


  // add message to the array of messages to the right conversation.
  addMessage = function (message, c_id, type) {
    // TODO: change c_index to find the right index by c_id
    //TODO: add user information to new message
    //time and date stamp
    let timeStamp = new Date().toLocaleTimeString()
    let timeWithootSeconds = timeStamp.substring(0, timeStamp.length - 6)
    let dateStamp = new Date().toLocaleDateString()
    let dateWithootYear = dateStamp.substring(0, dateStamp.length - 5)
    let c_index = c_id;
    let conversations = [...this.state.conversations];
    let new_message = {
      user: this.state.online.displayName,
      type: type, content: message,
      timeStamp: dateWithootYear + " " + timeWithootSeconds
    }
    if (c_index !== -1 && new_message.content !== '') {
      let updated_conversation = {
        ...conversations[c_index],
        messages: [...conversations[c_index].messages, new_message]
      }
      conversations[c_index] = updated_conversation
      this.setState({ conversations })
    }
    else {
      console.log("A bug occured! Trying to add a message to an undefined conversation!")
    }
  }

  setOnline = (user) => {
    let userObj = this.state.users.find(u => u.userName === user)
    this.setState({
      online: userObj
    })
  }

  addUser = (user) => {
    let newUsers = [...this.state.users, user]
    this.setState({
      users: newUsers
    })
  }

  addConversation = (otherUserName) => {
    let newUsers = [...this.state.users].map((u) => {
      if (u.displayName === this.state.online.displayName) {
        u.contacts.push(otherUserName)
      }
      else if (u.displayName === otherUserName) {
        u.contacts.push(this.state.online.displayName)
      }
      return u
    })
    let otherUser = newUsers.find(u => u.displayName === otherUserName)
    let newConversations = [...this.state.conversations, {
      users: [this.state.online.userName, otherUser.userName],
      id: this.state.conversations.at(-1).id + 1,
      messages: []
    }]
    this.setState({
      users: newUsers,
      conversations: newConversations
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Routes go here v */}
          <Route path="/" element={
            <SignIn
              users={this.state.users}
              setOnline={this.setOnline}
            />}>
          </Route>
          {!this.state.online && <Route path="/chat" element={
            <SignIn
              users={this.state.users}
              setOnline={this.setOnline}
            />}>
          </Route>}
          {this.state.online && <Route path="/chat" element={
            <ChatScreen
              users={this.state.users}
              online={this.state.online}
              conversations={this.state.conversations}
              setOnline={this.setOnline}
              addConversation={this.addConversation}
              addMessage={this.addMessage}
            />}>
          </Route>}
          <Route path="/register" element={
            <Register
              addUser={this.addUser}
              users={this.state.users}
              setOnline={this.setOnline}
            />}>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;