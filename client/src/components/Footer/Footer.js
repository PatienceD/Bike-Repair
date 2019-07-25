import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./Footer.css";


function Footer() {
    return (

        // <!-- Footer -->
        <footer class="page-footer font-small blue pt-4">

            {/* <!-- Footer Links --> */}
            <div class="container-fluid text-center text-md-left">

                {/* <!-- Grid row --> */}
                <div class="row">

                    {/* <!-- Grid column --> */}
                    <div class="col-md-6 mt-md-0 mt-3">

                        {/* <!-- Content --> */}
                        <h5 class="text-uppercase">Footer Content</h5>
                        <p>Here you can use rows and columns to organize your footer content.</p>

                    </div>
                    {/* <!-- Grid column --> */}

                    <hr class="clearfix w-100 d-md-none pb-3"></hr>

                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                    {/* <!-- Grid column --> */}
                    <div class="col-md-3 mb-md-0 mb-3">

                        {/* <!-- Links --> */}
                        <h5 class="text-uppercase">Links</h5>

                        <ul class="list-unstyled">
                            <li>
                                <a href="#!">Link 1</a>
                            </li>
                            <li>
                                <a href="#!">Link 2</a>
                            </li>
                            <li>
                                <a href="#!">Link 3</a>
                            </li>
                            <li>
                                <a href="#!">Link 4</a>
                            </li>
                        </ul>

                    </div>
                    {/* <!-- Grid column --> */}

                </div>
                {/* <!-- Grid row --> */}

            </div>
            {/* <!-- Footer Links --> */}

            {/* <!-- Copyright --> */}
            <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="https://mdbootstrap.com/education/bootstrap/"> MDBootstrap.com</a>
            </div>
            {/* <!-- Copyright --> */}

        </footer>
        // {/* <!-- Footer --> */ }
        // <MDBFooter color="primary-color" className="font-small pt-4 mt-4">
        //     <MDBContainer fluid className="text-center text-md-left">
        //         <MDBRow>
        //             <MDBCol md="6">
        //                 <MDBRow>
        //                     <MDBCol md="6">
        //                         <h5 className="title">Find Jimmy</h5>
        //                         <hr></hr>
        //                         <p>
        //                             Jimmy is based in:
        //                         </p>
        //                         <p>
        //                             Hampton Roads, Virginia
        //                         </p>
        //                     </MDBCol>
        //                     <MDBCol md="6">
        //                         <h5 className="title">Hours of Operation</h5>
        //                         <hr></hr>
        //                         <p>
        //                             Monday - Sunday
        //                         </p>
        //                         <p>
        //                             9:00am - 9:00pm
        //                         </p>
        //                     </MDBCol>
        //                 </MDBRow>
        //             </MDBCol>
        //             <MDBCol md="6">
        //                 <h5 className="title">Links</h5>
        //                 <hr></hr>
        //                 <ul>
        //                     <li className="list-unstyled">
        //                         <a href="https://www.facebook.com/Jimmyzmobile/"><i class="fab fa-facebook-square"></i> Facebook</a>
        //                     </li>
        //                     <li className="list-unstyled">
        //                         <a href="https://www.instagram.com/jimmyzmobile/"><i class="fab fa-instagram"></i> Instagram</a>
        //                     </li>
        //                 </ul>
        //             </MDBCol>
        //         </MDBRow>
        //         <hr></hr>
        //         {/* <!-- Social buttons --> */}
        //         <ul class="list-unstyled list-inline text-center">
        //             <li class="list-inline-item">
        //                 <a class="btn-floating btn-fb mx-1">
        //                     <i class="fab fa-facebook-f"> </i>
        //                 </a>
        //             </li>
        //             <li class="list-inline-item">
        //                 <a class="btn-floating btn-tw mx-1">
        //                     <i class="fab fa-twitter"> </i>
        //                 </a>
        //             </li>
        //             <li class="list-inline-item">
        //                 <a class="btn-floating btn-gplus mx-1">
        //                     <i class="fab fa-google-plus-g"> </i>
        //                 </a>
        //             </li>
        //             <li class="list-inline-item">
        //                 <a class="btn-floating btn-li mx-1">
        //                     <i class="fab fa-linkedin-in"> </i>
        //                 </a>
        //             </li>
        //             <li class="list-inline-item">
        //                 <a class="btn-floating btn-dribbble mx-1">
        //                     <i class="fab fa-dribbble"> </i>
        //                 </a>
        //             </li>
        //         </ul>
        //         {/* <!-- Social buttons --> */}
        //     </MDBContainer>
        //     <div className="footer-copyright text-center py-3">
        //         <MDBContainer fluid>
        //             &copy; {new Date().getFullYear()} Copyright
        //         </MDBContainer>
        //     </div>
        // </MDBFooter>
    );

}

export default Footer;