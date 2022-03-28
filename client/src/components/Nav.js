import React from "react"; 
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav(){
    return(
        <React.Fragment>
                <div className="navBarContainer">
                    <Link className="Link" to="/visits">Visits</Link>
                    <Link className="Link" to="/account">Account</Link>
                    <Link className="Link" to="/rooms">Rooms</Link>
                    <Link className="Link" to="/amenities">Amenities</Link>
                    <Link className="Link" to="/login">Log In</Link>
                </div>
        </React.Fragment>
    ); 

}

export default Nav; 

