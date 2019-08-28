import React, { Component } from "react";
import "./Header.css";
import { StateContext } from "../../State";

class Header extends Component {
    static contextType = StateContext;

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
        const firstName = localStorage.getItem('firstName');
        const lastName = localStorage.getItem('lastName');

        return (
            <div className="header">
                <h2 style={{fontSize: '45px', fontWeight: 'bolder'}}>Welcome {firstName + " " + lastName}</h2>
                <hr></hr>
            </div>
        )

    }
}

export default Header;