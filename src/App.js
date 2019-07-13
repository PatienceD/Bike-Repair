import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import React, { Component } from 'react';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />
     <Header />
     <Body />
    </div>
    </Router>
  );
}

export default App;
