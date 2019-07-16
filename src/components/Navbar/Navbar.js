import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Jimmy'z Mobile Bike Repair
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            Appointments<span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="#">
            Account
          </a>
          <a className="nav-item nav-link" href="#">
            Clients
          </a>
          <form class="form-inline">
            <button class="btn btn-outline-success" type="button">
              Messages
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
