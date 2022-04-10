import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import SignOn from './components/SignOn';
import ChatScreen from './components/ChatScreen';
import SignIn from './components/SignIn';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Routes go here v */}
          <Route path="/" element={<SignOn />}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
          <Route path="/signIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
