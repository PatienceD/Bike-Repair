import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import React, { Component } from 'react';
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Header from "./components/Header";


function App() {
  return (
    <Router>
       <div className="Header">
     <Header />
     </div>
    <div className="Navbar">
     <Navbar />
     <Switch>
          {/* <Route exact path="/" component ={Account} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/clients:id" component={Account} /> */}

        </Switch>
     </div>
     <div className="Body">
     <Body />
    </div>
    </Router>
  );
}

export default App;
