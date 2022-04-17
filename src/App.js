import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Register from './components/Register';
import ChatScreen from './components/ChatScreen';
import SignIn from './components/SignIn';
import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state ={
      users: [],
    }
  }

  addUser=(user)=>{
    let newUsers=[...this.state.users, user]
    this.setState({
      users: newUsers 
    })
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Routes go here v */}
          <Route path="/chat" element={<ChatScreen />}></Route>
          <Route path="/" element={<Register addUser={this.addUser}/>}></Route>
          
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
