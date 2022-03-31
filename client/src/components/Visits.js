import React from "react";
import Nav from "./Nav"
import { Link } from "react-router-dom";

function Visits({ user }){
    return (
        <React.Fragment>
            <Nav user={user}/>
            <div>
                <h1> Our Accomodations - </h1>
                <p>Descrption paragraph to come</p>
            </div>
            <div>
                <h2>The Deluxe Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to={{
                    pathname: "/booking", 
                    state: { room_type: "Deluxe Room" }}}>
                    Book Now
                </Link>
            </div>
            <div>
                <h2>The Grand Deluxe Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to={{
                    pathname: "/booking", 
                    state: { room_type: "Grand Deluxe Room" }}}>
                    Book Now
                </Link>
            </div>
            <div>
                <h2>The Executive Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to={{
                    pathname: "/booking", 
                    state: { room_type: "Executive Room" }}}>
                    Book Now
                </Link>
            </div>
            <div>
                <h2>The Superior Room</h2>
                <p>Descrption paragraph to come</p>
                <Link to={{
                    pathname: "/booking", 
                    state: { room_type: "Superior Room" }}}>
                    Book Now
                </Link>
            </div>
            <div>
                <h2>The Archduchess Elizabeth Suite</h2>
                <p>Descrption paragraph to come</p>
                <Link to={{
                    pathname: "/booking", 
                    state: { room_type: "Archduchess Elizabeth Suite" }}}>
                    Book Now
                </Link>
            </div>
        </React.Fragment>
    ); 
}

export default Visits; 