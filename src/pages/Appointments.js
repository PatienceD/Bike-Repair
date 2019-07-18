import React from "react";


class Calendly extends React.Component {
  componentDidMount() {
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute('src', 'https://assets.calendly.com/assets/external/widget.js');
    head.appendChild(script);
  }

  render() {
    return (
      <div>
        <div id="schedule_form">
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/charlotterice2010/example"
            style={{ minWidth: '320px', height: '580px' }} />
        </div>
        <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Appointment Information</h5>
              <h6 className="card-text">With: Jimmy Deaton</h6>
              <p className="card-text">Where: Desired Location</p>
              <p className="card-text">When: 08/20/2019 10:00am</p>
              <button href="#" className="card-link">Reschedule</button>
              <button href="#" className="card-link">Ask Jimmy a Question</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calendly;