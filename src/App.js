import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import ChatScreen from './components/ChatScreen';
import SignIn from './components/SignIn';
import React from 'react';
import Conversations from './components/Conversations';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [{ userName: "Shir1", password: "a123", displayName: "Shir", pic: "cat_shir.jpg", contacts: ["Aviad", "Reut"] },
      { userName: "Aviad1", password: "a123", displayName: "Aviad", pic: "cat_aviad.png", contacts: ["Shir", "Reut"] },
      { userName: "Reut1", password: "a123", displayName: "Reut", pic: "cat_reut.jpg", contacts: ["Shir", "Aviad"] }],
      conversations: [{
        users: ["Shir", "Reut"],
        id: "1",
        messeages: [
          {
            user: "Shir",
            type: "text",
            content: "Hi :)"
          },
          {
            user: "Reut",
            type: "text",
            content: "Hi :)"
          },
          {
            user: "Reut",
            type: "text",
            content: "What's up?"
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm good, doing Pesah homework"
          },
          {
            user: "Shir",
            type: "text",
            content: "You?"
          },
          {
            user: "Reut",
            type: "text",
            content: "I'm great, doing homework too"
          },
          {
            user: "Shir",
            type: "text",
            content: "Good luckk I hope we'll both finish soon"
          },
          {
            user: "Reut",
            type: "text",
            content: "Yeah me too!"
          },
        ]
      },
      {
        users: ["Aviad", "Shir"],
        id: "2",
        messeages: [
          {
            user: "Aviad",
            type: "text",
            content: "Hi Shir,how's it going?"
          },
          {
            user: "Shir",
            type: "text",
            content: "I'm great, how are you?"
          },
          {
            user: "Aviad",
            type: "text",
            content: "Awsome, can you help me with something in github?"
          },
          {
            user: "Shir",
            type: "text",
            content: "Sure! what do you need?"
          },
          {
            user: "Aviad",
            type: "text",
            content: "I'm trying to solve a conflict in merging to dev"
          },
          {
            user: "Shir",
            type: "text",
            content: "Ok, I'll go check it now"
          },
        ]
      }],
      online: "Shir",
    }
  }

  // componentDidMount(){
  //   this.setState({
  //     online: this.state.users[0]
  //   })
  // }

  addUser = (user) => {
    let newUsers = [...this.state.users, user]
    this.setState({
      users: newUsers
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Routes go here v */}
          <Route path="/" element={<Register addUser={this.addUser} />}></Route>
          <Route path="/chat" element={
            <ChatScreen
              users={this.state.users}
              online={this.state.online}
              conversations={this.state.conversations} />}>
          </Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
