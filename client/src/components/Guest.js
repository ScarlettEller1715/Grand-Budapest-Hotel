import React from "react";
import { Link } from "react-router-dom";

function Guest(){
    return (
        <React.Fragment>
            <h1> Guest Page </h1>
            <Link to="/">Home</Link>
        </React.Fragment>
    ); 
}

export default Guest; 