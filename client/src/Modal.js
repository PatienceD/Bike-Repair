import React from 'react';
import $ from 'jquery';
import 'bootstrap';

class Modal extends React.Component {

    componentDidMount = () => {
        $(document).ready(function () {
            $('#myModal').modal('show');
        });
    }

    render() {
        return (
            <div>
                <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                    aria-hidden="true" >
                    <div class="modal-dialog" role="document">
                        <div class="modal-body">
                            {/* <!--Modal: Contact form--> */}
                            <div class="modal-dialog cascading-modal" role="document">

                                {/* <!--Content--> */}
                                <div class="modal-content">

                                    {/* <!--Header--> */}
                                    <div class="modal-header info-color white-text">
                                        <h4 class="title">
                                            <i class="fa fa-pencil-alt"></i> Sign in</h4>
                                        <button type="button" class="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    {/* <!--Body--> */}
                                    <div class="modal-body">

                                        <form class="text-center border border-light p-5" action="#!">

                                            <p class="h4 mb-4">Sign in</p>

                                            <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">

                                                <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">

                                                    <div class="d-flex justify-content-around">
                                                        <div>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember"></input>
                                                                <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <a href="">Forgot password?</a>
                                                        </div>
                                                    </div>

                                                    <button class="btn btn-info btn-block my-4" type="submit">Sign in</button>

                                                    <p>Not a member?
                                                    <a href="">Register</a>
                                                    </p>

                                                    <p>or sign in with:</p>

                                                    <a type="button" class="light-blue-text mx-2">
                                                        <i class="fab fa-facebook-f"></i>
                                                    </a>
                                                    <a type="button" class="light-blue-text mx-2">
                                                        <i class="fab fa-twitter"></i>
                                                    </a>
                                                    <a type="button" class="light-blue-text mx-2">
                                                        <i class="fab fa-linkedin-in"></i>
                                                    </a>
                                                    <a type="button" class="light-blue-text mx-2">
                                                        <i class="fab fa-github"></i>
                                                    </a>
                                                </input>
                                            </input>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;