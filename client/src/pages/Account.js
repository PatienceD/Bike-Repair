import React, { Component } from "react";
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import API from '../utils/API';
import { StateContext } from "../State";
import $ from 'jquery';



class Account extends Component {
    static contextType = StateContext;

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
            email: ''
        };
    }

    onFormSubmit(event) {
        event.preventDefault();
        API.createBike(this.state).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        })
        // alert(JSON.stringify(this.state, null, '  '));
        console.log(this.state);

        const { firstName, lastName, email, password, phoneNumber } = this.state;
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('phoneNumber', phoneNumber);

        const [{ user }, dispatch] = this.context;
        var fn = localStorage.getItem('firstName');
        var ln = localStorage.getItem('lastName');
        var em = localStorage.getItem('email');
        var pn = localStorage.getItem('phoneNumber');

        if (em === undefined) {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    phoneNumber: this.state.phoneNumber
                }
            });
        } else {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    firstName: fn,
                    lastName: ln,
                    email: em,
                    phoneNumber: pn
                }
            });
        }

        $('#Acc-Modal').modal('hide');
        $('.modal-backdrop').remove()

    }

    onFormClick(event) {
        event.preventDefault();
        API.createBike(this.state).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        })
        console.log(this.state);

        const { bikeType, lastWork, adult, notes, email } = this.state;
        localStorage.setItem('bikeType', bikeType);
        localStorage.setItem('lastWork', lastWork);
        localStorage.setItem('adult', adult);
        localStorage.setItem('notes', notes);
        localStorage.setItem('email', email);

        const [{ user }, dispatch] = this.context;
        var bt = localStorage.getItem('bikeType');
        var lw = localStorage.getItem('lastWork');
        var ad = localStorage.getItem('adult');
        var no = localStorage.getItem('notes');
        var em = localStorage.getItem('email');

        if (em === undefined) {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    bikeType: this.state.bikeType,
                    lastWork: this.state.lastWork,
                    adult: this.state.adult,
                    notes: this.state.notes
                }
            });
        } else {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    bikeType: bt,
                    lastWork: lw,
                    adult: ad,
                    notes: no
                }
            });
        }

        $('#AddaBikeModal').modal('hide');
        $('.modal-backdrop').remove()


    }

    componentDidMount() {
        const [{ user }, dispatch] = this.context;
        var fn = localStorage.getItem('firstName');
        var ln = localStorage.getItem('lastName');
        var em = localStorage.getItem('email');
        var pw = localStorage.getItem('password');
        var pn = localStorage.getItem('phoneNumber');

        if (em === undefined) {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    email: this.state.email,
                    password: this.state.password,
                    phoneNumber: this.state.phoneNumber
                }
            });
        } else {
            dispatch({
                type: 'currentUser',
                LoggedinUser: this.state = {
                    firstName: fn,
                    lastName: ln,
                    email: em,
                    password: pw,
                    phoneNumber: pn
                }
            });
        }
    }

    render() {
        // const [{user}, dispatch] = this.context;
        // var first = user.firstName;
        // var last = user.lastName;
        // var phone = user.phoneNumber;
        // var email = user.email;

        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');
        const phoneNumber = localStorage.getItem('phoneNumber');
        const email = localStorage.getItem('email');

        const bikeType = localStorage.getItem('bikeType');
        const lastWork = localStorage.getItem('lastWork');
        const adult = localStorage.getItem('adult');
        const notes = localStorage.getItem('notes');

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-1"></div>
                                    <div className="col-md-4">
                                        <img src="https://png.pngtree.com/svg/20160105/person_1058294.png" className="card-img-top" alt="Image"></img>
                                    </div>
                                    <div className="col-md-7">
                                        <h5 className="card-title">Account Information</h5>
                                        <p className="card-text">{firstName + " " + lastName}</p>
                                        <p className="card-text">Phone Number: {phoneNumber}</p>
                                        <p className="card-text">Email: {email} </p>

                                        {/* <!-- Button trigger modal --> */}
                                        <button type="button" className="btn btn-blue" data-toggle="modal" data-target="#Acc-Modal">
                                            Edit Account Info
                                        </button>
                                        {/* Edit info grabbed from facebook login */}

                                        {/* <!-- Modal --> */}
                                        <div className="modal fade" id="Acc-Modal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
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
                                    <div className="row">
                                        <a className="col-lg-1"></a>
                                        <div className="col-md-4">
                                            <img src="http://media.pixcove.com/C/7/6/Stickman-Matchstick-Man-Stick-Figure-Free-Image-Fi-6666.jpg" className="card-img-top" alt="Image"></img>
                                        </div>
                                        <div className="col-md-7">
                                            <h5 className="card-title">Bike Information </h5>
                                            <p className="card-text">Type of Bike: {bikeType} </p>
                                            <p className="card-text">Last Worked on: {lastWork} </p>
                                            <p className="card-text">Adult or kid Bike: {adult} </p>
                                            <p className="card-text">Additional Notes: {notes} </p>

                                            {/* <!-- Button trigger modal --> */}
                                            <button type="button" className="btn btn-blue" data-toggle="modal" data-target="#AddaBikeModal">
                                                Add Bike Info
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
                                                                            {/* <FormGroup>
                                                                                <Label>Please Verify your Email</Label>
                                                                                <Input
                                                                                    type="text"
                                                                                    name="email"
                                                                                    placeholder="johnsmith@gmail.com"
                                                                                    value={this.state.email}
                                                                                    onChange={e => this.setState({ email: e.target.value })}
                                                                                />
                                                                            </FormGroup> */}
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
                    </div>
                </div><br></br>
            </div>
        );
    }
}

export default Account;