import React from 'react';
import Landing from './components/landing/landing';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
