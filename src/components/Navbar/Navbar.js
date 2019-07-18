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
          <a className="nav-item nav-link active" href="/appointments">
            Appointments<span className="sr-only">(current)</span>
          </a>
          <a className="nav-item nav-link" href="/account">
            Account
          </a>
          <a className="nav-item nav-link" href="/clients">
            Clients
          </a>
          <form class="form-inline">
            <a className="btn btn-outline-success" type="button" target ="_blank" href="https://m.me/281457917012">
              Messages
            </a>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
