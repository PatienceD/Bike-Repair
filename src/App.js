import "./App.css";
// import "./components/Header/Header.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Clients from "./pages/Clients";
import Calendly from "./pages/Appointments";
import Account from "./pages/Account";
import NoMatch from "./pages/NoMatch";

    function App() {
        return (
        <div className ="Header">
            <Router>
              <Navbar />
              <Header />
              <Switch>
                <Route exact path="/" component={Calendly} />
                <Route exact path="/appointments" component={Calendly} />
                 <Route exact path="/clients" component={Clients} />
                <Route exact path="/account" component={Account} />
                <Route component={NoMatch} /> 
               </Switch>
            </Router>
          </div>
        );
      }
      
      export default App;

