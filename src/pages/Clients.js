import React from "react";

function Clients() {

    const search = {
        paddingTop: '50px',
    }

    return (

        <div className="container">
            <div className="search" style={search}>
                <div class="input-group">
                    <input type="text" class="form-control" aria-label="Text input with segmented dropdown button"></input>
                    <div class="input-group-append">
                        <button type="button" class="btn btn-outline-secondary">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Clients;