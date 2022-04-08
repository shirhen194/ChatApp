import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import SignOn from './components/SignOn';
import ChatScreen from './components/ChatScreen';
import React from 'react';

class App extends React.Component {
  
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Routes go here v */}
          <Route path="/" element={<SignOn />}></Route>
          <Route path="/chat" element={<ChatScreen />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
