import React, { useState } from "react"; 
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";
import { useHistory } from "react-router-dom";



function Login({ setUser }){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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
                    history.push("/account")
                });
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }
    
    return(

        <React.Fragment>
            <Link to="/">Home</Link>
        <div>
            <p> Login Here </p>
        <form onSubmit={handleSubmit}>
            <formfield>
                <label htmlFor="username">Username</label>
                <input 
                type="text" 
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </formfield>
            <formfield>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
            </formfield>
            <formfield>
                <button type="submit">Login</button>
            </formfield>
        </form>
        </div>
        <div>
            <h3>Never stayed with us before?</h3>
            <Link to="/accountcreation">Create a Guest Account</Link>
        </div>
        </React.Fragment>
    ); 

}

export default Login; 

