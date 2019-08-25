import React from 'react';
import $ from 'jquery';
import 'bootstrap';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import API from './utils/API'


class Modal extends React.Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            phoneNumber: ''
        };
    }

    onFormSubmit(event) {
        event.preventDefault();
        API.createUser(this.state).then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        })
        console.log(this.state);
    }

    componentDidMount = () => {
        $(document).ready(function () {
            $('#myModal').modal('show');
        });
    }

    render() {
        return (
            <div className="modal fade" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true" >
                <div className="modal-dialog" role="document">
                    <div className="modal-body">
                        {/* <!--Modal: Contact form--> */}
                        <div className="modal-dialog cascading-modal" role="document">
                            {/* <!--Content--> */}
                            <div className="modal-content">
                                <div className="modal-header info-color white-text">
                                    <h4 className="title">
                                        <i className="fa fa-pencil-alt"></i> Sign Up with us</h4>
                                    <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                    </button>
                                </div>
                                <Container className="p-5">
                                    <Form onSubmit={this.onFormSubmit}>
                                        <FormGroup>
                                            <Label>First Name:</Label>
                                            <Input
                                                type="text"
                                                name="text"
                                                placeholder="First Name"
                                                value={this.state.firstName}
                                                onChange={e => this.setState({ firstName: e.target.value })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Last Name:</Label>
                                            <Input
                                                type="text"
                                                name="text"
                                                placeholder="Last Name"
                                                value={this.state.lastName}
                                                onChange={e => this.setState({ lastName: e.target.value })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Email:</Label>
                                            <Input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={this.state.email}
                                                onChange={e => this.setState({ email: e.target.value })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Password:</Label>
                                            <Input
                                                type="password"
                                                name="password"
                                                placeholder="Password"
                                                value={this.state.password}
                                                onChange={e => this.setState({ password: e.target.value })}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label>Phone Number:</Label>
                                            <Input
                                                type="text"
                                                name="text"
                                                placeholder="(407)324-9999"
                                                value={this.state.phoneNumber}
                                                onChange={e => this.setState({ phoneNumber: e.target.value })}
                                            />
                                        </FormGroup>
                                        <Button type="submit" color="primary">Submit</Button>
                                    </Form>
                                </Container>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
                {/* END MODAL */}
                {/* add a modal once they want to add a bike */}
            </div >
        );
    }
}

export default Modal;