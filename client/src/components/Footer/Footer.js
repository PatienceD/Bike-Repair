import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";


function Footer() {
    return (
        <MDBFooter color = "primary-color" className = "font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow>
                    <MDBCol md="6">
                        <MDBRow>
                            <MDBCol md="6">
                                <h5 className="title">Find Jimmy</h5>
                                <hr></hr>
                                <p>
                                    Jimmy is based in:
                                </p>
                                <p>
                                    Hampton Roads, Virginia
                                </p>
                            </MDBCol>
                            <MDBCol md="6">
                                <h5 className="title">Hours of Operation</h5>
                                <hr></hr>
                                <p>
                                    Monday - Sunday
                                </p>
                                <p>
                                    9:00am - 9:00pm
                                </p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title">Links</h5>
                        <hr></hr>
                        <ul>
                            <li className="list-unstyled">
                                <a href="https://www.facebook.com/Jimmyzmobile/"><i class="fab fa-facebook-square"></i> Facebook</a>
                            </li>
                            <li className="list-unstyled">
                                <a href="https://www.instagram.com/jimmyzmobile/"><i class="fab fa-instagram"></i> Instagram</a>
                            </li>
                        </ul>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright
                </MDBContainer>
            </div>
        </MDBFooter >
    );

}

export default Footer;