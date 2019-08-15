import React, { Component } from "react";
import SearchableClients from "../components/SearchClientInfo";
import API from "../utils/API";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Clients: [],
      name: ""
    };
  }

  componentDidMount = () => {
    console.log("did mount");
    API.getAllClients().then(db => {
      this.setState({
        Clients: db.data
      });
    });
  };

  handleInput = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    API.getOne(this.state.name).then(click => {
      if (click.data.length < 1) {
        alert("This user doesn't exist. Please try another search.");
      } else {
        this.setState({
          Clients: click.data
        });
      }
    });
  };

  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <div className="search">
              <div className="input-group md-form form-sm form-2 pl-0">
                <input
                  className="form-control my-0 py-1 red-border"
                  type="text"
                  placeholder="Search for a client"
                  aria-label="Search"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInput}
                />
                <div className="input-group-append">
                  <button
                    type="button"
                    className="btn btn-light"
                    onClick={this.handleOnClick}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>{" "}
            <br />
            <div className="table-responsive">
              <table
                id="tablePreview"
                className="table table-striped table-hover table-borderless"
              >
                <thead>
                  <tr>
                    <th />
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Profile</th>
                    <th>Bike Type</th>
                    <th>A / C</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.Clients.map(client => {
                    return (
                      <SearchableClients
                        key={client.id}
                        firstname={client.firstName}
                        lastname={client.lastName}
                        biketype={client.bikeType}
                        adult={client.adult}
                      />
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Clients;
