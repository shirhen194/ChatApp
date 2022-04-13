import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Register from './components/Register';
import ChatScreen from './components/ChatScreen';
import SignIn from './components/SignIn';
import React from 'react';
import Conversations from './components/Conversations';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [{ userName: "Shir1", password: "a123", displayName: "Shir", contacts: ["Aviad", "Reut"] },
      { userName: "Aviad1", password: "a123", displayName: "Aviad", contacts: ["Shir", "Reut"] },
      { userName: "Reut1", password: "a123", displayName: "Reut", contacts: ["Shir", "Aviad"] }],
      conversations: [{
        users: ["Shir", "Reut"],
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
    }
  }

  componentDidMount() {
    let NewConversations = [...this.state.conversations]
    NewConversations.push({
      users: ["Shir", "Aviad"],
      messeages: [
        {
          user: "Shir",
          content: "Hi :)"
        },
        {
          user: "Reut",
          content: "Hi :)"
        },
        {
          user: "Reut",
          content: "What's up?"
        },
        {
          user: "Shir",
          content: "I'm good, doing Pesah homework"
        },
        {
          user: "Shir",
          content: "You?"
        },
        {
          user: "Reut",
          content: "I'm great, doing homework too"
        },
        {
          user: "Shir",
          content: "Good luckk I hope we'll both finish soon"
        },
        {
          user: "Reut",
          content: "Yeah me too!"
        },
      ]
    },
      {
        users: [this.state.users[0], this.state.users[1]],
        messeages: [
          {
            user: "Aviad",
            content: "Hi Shir,how's it going?"
          },
          {
            user: "Shir",
            content: "I'm great, how are you?"
          },
          {
            user: "Aviad",
            content: "Awsome, can you help me with something in github?"
          },
          {
            user: "Shir",
            content: "Sure! what do you need?"
          },
          {
            user: "Aviad",
            content: "I'm trying to solve a conflict in merging to dev"
          },
          {
            user: "Shir",
            content: "Ok, I'll go check it now"
          },
        ]
      })
  }

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
          <Route path="/chat" element={<ChatScreen />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
