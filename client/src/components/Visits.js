import React from "react";
import { Link } from "react-router-dom";

function Visits(){
    return (
        <React.Fragment>
            <h1> Visit Page </h1>
            <Link to="/">Home</Link>
        </React.Fragment>
    ); 
}

export default Visits; 