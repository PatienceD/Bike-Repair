import React from "react";

function SearchableClients(props) {
    return (
        <tr>
            <th scope="row"></th>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>Information</td>
            <td>{props.biketype}</td>
            <td>{props.adult ? "Adult" : "Child"}</td>
        </tr>
    )
}

export default SearchableClients;