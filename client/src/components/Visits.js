import React from "react";
import Nav from "./Nav"
import { Link } from "react-router-dom";

function Visits(){
    return (
        <React.Fragment>
            <Nav />
            <div>
                <h1> Our Accomodations - </h1>
                <p>Descrption paragraph to come</p>
            </div>
            <div>
                <h2>The Deluxe Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to="/booking">Book Now</Link>
            </div>
            <div>
                <h2>The Grand Deluxe Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to="/booking">Book Now</Link>
            </div>
            <div>
                <h2>The Executive Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to="/booking">Book Now</Link>
            </div>
            <div>
                <h2>The Superior Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to="/booking">Book Now</Link>
            </div>
            <div>
                <h2>The Archduchess Elizabeth Suite</h2>
                <p>Descrption paragraph to come</p>
                <Link to="/booking">Book Now</Link>
            </div>
            <Link to="/">Home</Link>
        </React.Fragment>
    ); 
}

export default Visits; 