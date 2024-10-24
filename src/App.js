//import logo from './logo.svg';
import './App.css';
import React from 'react'


import Header from './components/Header.js'
import Home from './components/Home.js'
import Footer from './components/Footer.js'
import Notification from './components/Notification.js'


function App() {
  return (
    <div className='mainDiv'>
      <Header/>
      <Notification/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
