import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'


import Header from './components/Header.js'
import Home from './components/Home.js'
import Nav from './components/Nav.js'


function App() {
  return (
    <div className="container">
      <Nav/>
      <Header/>
      <Routes>
        <Route path="/palvelut" element={<div style={{marginTop: 200}}>palveluit xd</div>} />
        <Route path="/" element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
