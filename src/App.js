import './App.css';

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'
import SignOn from './components/SignOn';
import Chat from './components/Chat';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes go here v */}
        <Route path="/" element={<SignOn/>}></Route>
        <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
