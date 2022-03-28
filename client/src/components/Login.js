import React, { useState } from "react"; 
import { Link } from "react-router-dom";
// import Input from "react-select/dist/declarations/src/components/Input";


function Login({ setUser }){
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

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
                r.json().then((user) => setUser(user));
            } else {
                r.json().then((error) => setErrors(error.errors));
            }
        });
    }
    
    return(

        <React.Fragment>
            <Link to="/">Home</Link>
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
        </React.Fragment>
    ); 

}

export default Login; 

