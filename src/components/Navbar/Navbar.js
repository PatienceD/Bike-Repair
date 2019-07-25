import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import Logo from "./pics/Jimmyz_new_logo_outlines.png";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (

      // < !--Navbar -- >
      <nav class="mb-1 navbar navbar-expand-lg navbar-dark blue lighten-1">
        <img src={Logo}
          alt="avatar image" height="80"></img>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-555"
          aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent-555">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i> Profile </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a class="dropdown-item" href="/Account">My account</a>
                <a class="dropdown-item" href="#">Log out</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/Appointments">Appointments
          <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Account">Account Info</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/Clients">Client Search</a>
            </li>
            <li class="nav-item">
              <a className="nav-link" target="_blank" href="https://m.me/281457917012">Messages</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavbarPage;