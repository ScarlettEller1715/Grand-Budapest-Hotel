import React from "react";
import Booking from "./Booking";
import { Link } from "react-router-dom";

function Visits(){
    return (
        <React.Fragment>
            <h1> Visit Page </h1>
            <Link to="/">Home</Link>
            <Link to="/booking">Book Now</Link>
        </React.Fragment>
    ); 
}

export default Visits; 