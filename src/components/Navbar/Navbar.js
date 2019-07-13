import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Appointments</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Clients</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Messages</a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;