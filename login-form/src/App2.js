import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Login from './Login';
import ShowNavbar from './ShowNavbar';
import { Route, Routes } from 'react-router-dom';


class App extends Component {  
  render() {
    return (
      <>
         <ShowNavbar>
           <Navbar />
         </ShowNavbar>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/about" element={<About />} />
           <Route path="/login" element={<Login />} />
         </Routes>
     </>
    )
  }
}

export default App;