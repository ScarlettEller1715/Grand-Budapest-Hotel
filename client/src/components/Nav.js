import React from "react"; 
import { Link } from "react-router-dom";
import "../styles/nav.css";

function Nav({ user }){

    const logInOrAccount = (user ? <Link className="Link" to="/account">Your Account</Link> : <Link className="Link" to="/login">Log In</Link>)

    return(
        <React.Fragment>
                <div className="navBarContainer">
                    <Link className="Link" to="/amenities">Our Amenities</Link>
                    <Link className="Link" to="/visits">Visit Us</Link>
                    {logInOrAccount}
                </div>
        </React.Fragment>
    ); 

}

export default Nav; 

