import React from "react";
import Modal from "../Modal";
import { StateContext } from "../State";
import Bike from "./pic/bike.png";
import Jimmy from "./pic/jimmy.jpg";
import Truck from "./pic/truck.jpg";
import Customer from "./pic/customer.png";


class Calendly extends React.Component {
  static contextType = StateContext;

  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);

    const [{ user }, dispatch] = this.context;
    var fn = localStorage.getItem('firstName');
    var ln = localStorage.getItem('lastName');
    var em = localStorage.getItem('email');
    var pw = localStorage.getItem('password');
    var pn = localStorage.getItem('phoneNumber');

    if (em === undefined) {
      dispatch({
        type: 'currentUser',
        LoggedinUser: this.state = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          email: this.state.email,
          password: this.state.password,
          phoneNumber: this.state.phoneNumber
        }
      });
    } else {
      dispatch({
        type: 'currentUser',
        LoggedinUser: this.state = {
          firstName: fn,
          lastName: ln,
          email: em,
          password: pw,
          phoneNumber: pn
        }
      });
    }
  }

  render() {
    return (

      <div>
        {/* GOOGLE MODAL LOGIN */}
        <Modal />
        {/* GOOGLE MODAL LOGIN */}

        <div className="container">
          <div className="row" style={{ marginRight: '35px'}}>
            <div className="col-md-3">
              <img src={Bike} style={{ height: '200px', width: '200px', border: '4px solid #9dc83e', boxShadow: '2px 2px 5px #000', margin: '7px' }}></img>
            </div>
            <div className="col-md-4">
              <img src={Jimmy} style={{ height: '200px', width: '320px', border: '4px solid #9dc83e', boxShadow: '2px 2px 5px #000', margin: '7px' }}></img>
            </div>
            <div className="col-md-4">
              <img src={Truck} style={{ height: '200px', width: '300px', border: '4px solid #9dc83e', boxShadow: '2px 2px 5px #000', margin: '7px' }}></img>
            </div>
            <div className="col-md-1">
              <img src={Customer} style={{ height: '200px', width: '200px', border: '4px solid #9dc83e', boxShadow: '2px 2px 5px #000', margin: '7px' }}></img>
            </div>
          </div><br></br>
          <hr></hr>
          <div className="row">
            <h2>Schedule an Appointment</h2>
          </div>
        </div>

        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/patience-deaton"
            style={{ minWidth: '320px', height: '821px' }} />
        </div>
      </div>
    );
  }
}

export default Calendly;