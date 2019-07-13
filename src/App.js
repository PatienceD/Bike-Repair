import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React, { Component } from 'react';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
    <Router>
      <div className="Nav">
        <Navbar />
      </div>
      {/* <div className="Header">
        <Header />
      </div> */}
      <div className="Body">
        <Body />
      </div>
    </Router>
  );
}

export default App;
