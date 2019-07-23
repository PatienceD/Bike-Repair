import React from "react";

function Clients() {

    const search = {
        paddingTop: '50px',
    }

    return (

        <div className="container">
            <div className="search" style={search}>
                <div class="input-group md-form form-sm form-2 pl-0">
                    <input class="form-control my-0 py-1 red-border" type="text" placeholder="Look for a client" aria-label="Search"></input>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-light">Search</button>
                    </div>
                </div>
            </div> <br></br>
            <div class='table-responsive'>
                <table id="tablePreview" class="table table-striped table-hover table-borderless">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Profile</th>
                            <th>Bike Type</th>
                            <th>A / C</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Mountain</td>
                            <td>Child</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Road</td>
                            <td>Adult</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Road</td>
                            <td>Adult</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Road</td>
                            <td>Adult</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Mountain</td>
                            <td>Child</td>
                        </tr>
                        <tr>
                            <th scope="row"></th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <a href="/Account"><td>Information</td></a>
                            <td>Road</td>
                            <td>Adult</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Clients;