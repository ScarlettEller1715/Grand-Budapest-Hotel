import React from "react"; 

import { Link } from "react-router-dom";

function Nav(){
    return(
        <React.Fragment>
                    <Link to="/visits">Visits</Link>
                    <Link to="/account">Account</Link>
                    <Link to="/rooms">Rooms</Link>
                    <Link to="/amenities">Amenities</Link>
                    <Link to="/login">Log In</Link>
        </React.Fragment>
    ); 

}

export default Nav; 

