import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import Register from './components/Register';
import ChatScreen from './components/ChatScreen';
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
          <Route path="/" element={<Register addUser={this.addUser}/>}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
