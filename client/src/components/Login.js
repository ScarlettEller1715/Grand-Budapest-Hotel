import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import { useHistory } from "react-router-dom";
import "../styles/login.css";




function Login({ setUser, setUserVisits }){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user)
                    setUserVisits(user.visits)
                    history.push("/visits")
                });
            } else {
                r.json().then((error) => alert(error.errors));
            }
        });
    }
    
    return(

        <React.Fragment>
        <div>
            <h1> Login Here </h1>
        <form id="form" onSubmit={handleSubmit}>
            <formfield>
                <label className="loginFormLabels" htmlFor="username">Username</label>
                <input className="loginFormInputs"
                type="text" 
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </formfield>
            <formfield>
                <label className="loginFormLabels" htmlFor="password">Password</label>
                <input className="loginFormInputs"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </formfield>
            <formfield>
                <button className="loginPageButtons" type="submit" onClick={handleSubmit}>Login</button>
            </formfield>
        </form>
        </div>
        <div id="otherContent">
            <h3 id="neverStayHeader">Never stayed with us before?</h3>
            <Link className="loginPageButtons" to="/accountcreation">Create a Guest Account</Link>
        </div>
        </React.Fragment>
    ); 

}

export default Login; 

