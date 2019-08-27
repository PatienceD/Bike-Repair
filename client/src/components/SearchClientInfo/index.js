import React from "react";

function SearchableClients(props) {
    return (
        <tr>
            <th scope="row"></th>
            <td>{props.firstname}</td>
            <td>{props.lastname}</td>
            <td>Client</td>
            <td>{props.email}</td>
            <td>{props.adult ? "Child" : "Adult"}</td>
        </tr>
    )
}

export default SearchableClients;