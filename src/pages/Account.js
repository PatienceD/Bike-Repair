import React from "react";

function Account() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image"></img>
                </div>
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">User First and Last Name</h5>
                            <p className="card-text">Phone Number: (555)555-555</p>
                            <p className="card-text">Email: firstname.lastname@gmail.com</p>
                            <a href="#" className="btn btn-primary">Sign in with Facebook</a>
                        </div>
                    </div>
                </div>
            </div><br></br><br></br>

            <div className="row">
                <div className="col-md-9">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Type of Bike</h5>
                            <p className="card-text">Last Work on: 04/12/2018</p>
                            <p className="card-text">Adult or kid Bike: Adult</p>
                            <a href="#" className="btn btn-primary">Add a Bike</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <img src="https://via.placeholder.com/150" class="card-img-top" alt="Image"></img>
                </div>
            </div>
        </div >
    );
}

export default Account;