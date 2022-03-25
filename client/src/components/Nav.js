import React from "react"; 

import { Link } from "react-router-dom";

function Nav(){
    return(
        <React.Fragment>
                    <Link to="/visits">visits</Link>
                    <Link to="/guest">guest</Link>
                    <Link to="/rooms">rooms</Link>
        </React.Fragment>
    ); 

}

export default Nav; 

