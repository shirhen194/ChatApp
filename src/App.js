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
    this.state ={
      users: [],
    }
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
          <Route path="/" element={<SignIn users={this.state.users} setOnline={this.setOnline} />}></Route>
          <Route path="/chat" element={
            <ChatScreen
              users={this.state.users}
              online={this.state.online}
              conversations={this.state.conversations}
              setOnline={this.setOnline}
              addConversation={this.addConversation}
            />}>
          </Route>
          <Route path="/register" element={<Register addUser={this.addUser} users={this.state.users} />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
