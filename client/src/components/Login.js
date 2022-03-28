import React from "react"; 
import { Link } from "react-router-dom";


function Login(){
    return(
        <React.Fragment>
            <Link to="/">Home</Link>
            <p> Login Here </p>

            <div className="SignIn">
                <h3>Sign In</h3>
                <label>Email:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
            </div>
            <div className="SignUp">
                <h3>Sign Up</h3>
                <label>Email:</label>
                <input type="text"/>
                <label>Password:</label>
                <input type="text"/>
            </div>

        </React.Fragment>
    ); 

}

export default Login; 

