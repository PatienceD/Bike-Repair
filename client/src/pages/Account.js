import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

class Account extends Component {

    constructor() {
        super();
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
        };
        this.onFormClick = this.onFormClick.bind(this);
        this.state = {
            bikeType: '',
            lastWork: '',
            adult: '',
            notes: '',
        };
    }

    onFormSubmit(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state, null, '  '));
        console.log(this.state);
    }

    onFormClick(event) {
        event.preventDefault();
        alert(JSON.stringify(this.state, null, '  '));
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="https://png.pngtree.com/svg/20160105/person_1058294.png" className="card-img-top" alt="Image"></img>
                                    </div>
                                    <div className="col-md-9">
                                        <h5 className="card-title">User First and Last Name</h5>
                                        <p className="card-text">Phone Number: (555)555-555</p>
                                        <p className="card-text">Email: firstname.lastname@gmail.com</p>

                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="btn btn-blue" data-toggle="modal" data-target="#AccountEditModal">
                                            Edit Account Info
                                        </button>
                                        {/* Edit info grabbed from facebook login */}

                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="AccountEditModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-body">
                                                    {/* <!--Modal: Contact form--> */}
                                                    <div className="modal-dialog cascading-modal" role="document">

                                                        {/* <!--Content--> */}
                                                        <div className="modal-content">

                                                            {/* <!--Header--> */}
                                                            <div className="modal-header info-color white-text">
                                                                <h4 className="title">
                                                                    <i className="fa fa-pencil-alt"></i> Edit Account Information</h4>
                                                                <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            {/* <!--Body--> */}
                                                            <Container className="p-5">
                                                                <Form onSubmit={this.onFormSubmit}>
                                                                    <FormGroup>
                                                                        <Label>New First Name:</Label>
                                                                        <Input
                                                                            type="text"
                                                                            name="text"
                                                                            placeholder="John"
                                                                            value={this.state.firstName}
                                                                            onChange={e => this.setState({ firstName: e.target.value })}
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <Label>New Last Name:</Label>
                                                                        <Input
                                                                            type="text"
                                                                            name="text"
                                                                            placeholder="Smith"
                                                                            value={this.state.lastName}
                                                                            onChange={e => this.setState({ lastName: e.target.value })}
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <Label>New Email:</Label>
                                                                        <Input
                                                                            type="text"
                                                                            name="email"
                                                                            placeholder="johnsmith@gmail.com"
                                                                            value={this.state.email}
                                                                            onChange={e => this.setState({ email: e.target.value })}
                                                                        />
                                                                    </FormGroup>
                                                                    <FormGroup>
                                                                        <Label>New Phone Number:</Label>
                                                                        <Input
                                                                            type="text"
                                                                            name="phone number"
                                                                            placeholder="(407)673-9999"
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
                                        </div>
                                        {/* END MODAL */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br></br>

                <div className="row">
                <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-3">
                                        <img src="http://media.pixcove.com/C/7/6/Stickman-Matchstick-Man-Stick-Figure-Free-Image-Fi-6666.jpg" className="card-img-top" alt="Image"></img>
                                    </div>
                                    <div className="col-md-9">
                                        <h5 className="card-title">Bike Information</h5>
                                        <p className="card-text">Type of Bike: Mountain or Road</p>
                                        <p className="card-text">Last Worked on: 04/12/2018</p>
                                        <p className="card-text">Adult or kid Bike: Adult</p>
                                        <p className="card-text">Additional Notes:</p>

                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="btn btn-blue" data-toggle="modal" data-target="#AddaBikeModal">
                                            Add your Bike Information
                                        </button>



                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="AddaBikeModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                            aria-hidden="true">
                                            <div className="modal-dialog" role="document">
                                                <div className="modal-body">
                                                    {/* <!--Modal: Contact form--> */}
                                                    <div className="modal-dialog cascading-modal" role="document">

                                                        {/* <!--Content--> */}
                                                        <div className="modal-content">

                                                            {/* <!--Header--> */}
                                                            <div className="modal-header info-color white-text">
                                                                <h4 className="title">
                                                                    <i className="fas fa-bicycle" style={{ fontSize: '1.5em' }}></i> Tell us about your bike</h4>
                                                                <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                                                    <span aria-hidden="true">×</span>
                                                                </button>
                                                            </div>
                                                            {/* <!--Body--> */}
                                                            <div className="modal-body" style={{ padding: '.5px' }}>
                                                                <Container className="p-5">
                                                                    <Form onSubmit={this.onFormClick}>
                                                                        <FormGroup>
                                                                            <Label>Mountain or Road Bike?</Label>
                                                                            <Input
                                                                                type="text"
                                                                                name="text"
                                                                                placeholder="Mountain or Road"
                                                                                value={this.state.bikeType}
                                                                                onChange={e => this.setState({ bikeType: e.target.value })}
                                                                            />
                                                                        </FormGroup>
                                                                        <FormGroup>
                                                                            <Label>Last Date Worked On:</Label>
                                                                            <Input
                                                                                type="date"
                                                                                name="date"
                                                                                placeholder="MM/DD/YYYY"
                                                                                value={this.state.lastWork}
                                                                                onChange={e => this.setState({ lastWork: e.target.value })}
                                                                            />
                                                                        </FormGroup>
                                                                        <FormGroup>
                                                                            <Label>Adult and Childrens Bike?</Label>
                                                                            <Input
                                                                                type="text"
                                                                                name="text"
                                                                                placeholder="Adult"
                                                                                value={this.state.adult}
                                                                                onChange={e => this.setState({ adult: e.target.value })}
                                                                            />
                                                                        </FormGroup>
                                                                        <FormGroup>
                                                                            <Label>Additional Notes</Label>
                                                                            <Input
                                                                                type="textarea"
                                                                                name="text"
                                                                                placeholder="I'm in need of a new tire."
                                                                                value={this.state.notes}
                                                                                onChange={e => this.setState({ notes: e.target.value })}
                                                                            />
                                                                        </FormGroup>
                                                                        <Button type="submit" color="primary">Submit</Button>
                                                                    </Form>
                                                                </Container>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="modal-footer">
                                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* END MODAL */}
                                            {/* add a modal once they want to add a bike */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><br></br>
            </div>
        );
    }
}

export default Account;