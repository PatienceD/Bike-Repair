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
import Footer from "./components/Footer";
import { StateProvider } from './State';
// import Devs from "./pages/Devs";

const App = () => {
  const initialState = {
    user: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phoneNumber: ''
    }
  };

  const reducer = (state, action) => {
    console.log("reducer happened here");
    switch (action.type) {
      case 'currentUser':
        return {
          ...state,
          user: action.LoggedinUser
        };

      default:
        return state;
    }
  }

  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <div>
        <div className="wrapper">
          <Router>
            <Navbar />
            <Header />
            <Switch>
              <Route exact path="/" component={Calendly} />
              <Route exact path="/appointments" component={Calendly} />
              <Route exact path="/Clients" component={Clients} />
              <Route exact path="/account" component={Account} />
              {/* <Route exact path="/devs" component={Devs} /> */}
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    </StateProvider>
  );
}

export default App;
