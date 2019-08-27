import React from "react";
import Modal from "../Modal";
import { StateContext } from "../State";


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

        {/* <div className="container">
          <h4>See your Appointment Information</h4>
          <div className="card">
            <div className="card-body"> */}
        {/* <h5 className="card-title">Appointment Information</h5> */}
        {/* <h6 className="card-text">With: Jimmy Deaton</h6>
              <p className="card-text">Where: Williamsburg Starbucks</p>
              <p className="card-text">When: 09/06/2019   11:00 AM EST</p> */}
        {/* <button href="#" className="card-link">Reschedule</button> */}
        {/* <a className="btn btn-blue" type="button" target="_blank" rel="noopener noreferrer" href="https://m.me/281457917012">Ask Jimmy a Question</a>
            </div>
          </div>
        </div> */}
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/charlotterice2010/example"
            style={{ minWidth: '320px', height: '821px' }} />
        </div>
      </div>
    );
  }
}

export default Calendly;