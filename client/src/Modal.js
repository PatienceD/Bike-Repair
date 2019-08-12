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
            <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2 class="modal-title" id="exampleModalCenterTitle">Welcome to Jimmy'z Mobile Bike Repair!</h2>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div className="container">
                                <div className="row">
                                    <h5>To make sure you get the most out of Jimmy's app, be sure to sign in with Google!</h5>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;