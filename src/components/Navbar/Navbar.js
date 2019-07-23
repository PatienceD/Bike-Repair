import React, { Component } from "react";
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";

class NavbarPage extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <MDBNavbar nav nav-tabs style={{ height: '120px' }} color="primary-color" dark expand="md">
        <ul class="navbar-nav ml-auto nav-flex-icons">
          <li class="nav-item avatar">
            <a class="nav-link p-0" href="#">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg" class="rounded-circle z-depth-0"
                alt="avatar image" style={{ height: '100px', margin: '15px' }}></img>
            </a>
          </li>
        </ul>
        <MDBNavbarBrand>
          <strong className="white-text" style={{ fontSize: '33px' }}>Jimmy'z Mobile Bike Repair</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-4" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                <i class="fas fa-user"></i> Profile </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-info" aria-labelledby="navbarDropdownMenuLink-4">
                <a class="dropdown-item" href="/Account">My account</a>
                <a class="dropdown-item" href="#">Log out</a>
              </div>
            </li>
            <MDBNavItem active>
              <MDBNavLink to="/Appointments">Appointments</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Account">Account Info</MDBNavLink>
            </MDBNavItem>

            <MDBNavItem>
              <MDBNavLink to="/Clients">Client Search</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <a className="nav-link" target="_blank" href="https://m.me/281457917012">Messages</a>
            </MDBNavItem>


          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;