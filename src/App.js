import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
<<<<<<< HEAD
import Clients from "./pages/Clients";
=======
>>>>>>> 01da2329c01b6324864f77fe926df1b63ae53e96

import Calendly from "./pages/Appointments";
import NoMatch from "./pages/NoMatch";

<<<<<<< HEAD
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
=======
    function App() {
        return (
        <div className ="Header">
            <Router>
              <Navbar />
              <Header />
              <Switch>
                <Route exact path="/" component={Calendly} />
                <Route exact path="/appointments" component={Calendly} />
                {/* <Route exact path="/clients" component={Clients} />
                <Route exact path="/account" component={Account} /> */}
                <Route component={NoMatch} />
               </Switch>
            </Router>
          </div>
        );
      }
      
      export default App;
>>>>>>> 01da2329c01b6324864f77fe926df1b63ae53e96

