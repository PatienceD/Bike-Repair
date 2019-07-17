import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Clients from "./pages/Clients";


function App() {
  return (
    <div className="Header">
      <Router>
        <Navbar />
        <Header />
        {/* <Body /> */}
        <Switch>
          {/* <Route exact path="/" component={Appointments} /> */}
                <Route exact path="/clients" component={Clients} />
                {/* <Route exact path="/account" component={Account} />
                <Route component={NoMatch} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
