import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../styles/createAccount.css";

function CreateAccount({ setUser }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [gender, setGender] = useState("")

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                profession,
                gender,
                username,
                password,
                password_confirmation: passwordConfirmation,
            }),
        }).then((r) => { 
            if (r.ok) {
                r.json().then((user) => {setUser(user)
                history.push("/visits")})
            } else {
                r.json().then((e) => alert(e.errors))
            }
        })
    }
    
    return (
        <React.Fragment>
            <h1 id="accountHeader">Create An Account</h1>
            <form id="form" onSubmit={handleSubmit}>

                <div className="personalInfo">
                <input placeholder="Full Name"
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <select onChange={(e) => setProfession(e.target.value)}>
                    <option value="">Select Your Profession</option>
                    <option value="Aristocrat">Aristocrat</option>
                    <option value="Heir/Heiress">Heir or Heiress</option>
                    <option value="Industrialist">Industrialist</option>
                    <option value="Famous Artist">Famous Artist</option>
                    <option value="Capitalist">Capitalist</option>
                </select>
                <select onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Your Gender</option>
                    <option value="M">M</option>
                    <option value="F">F</option>
                    <option value="X">X</option>
                </select>
                </div>

                <div className="loginInfo">
                <input placeholder="Username"
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input placeholder="Password"
                type="password"
                id="password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <input placeholder="Password Confirmation"
                type="password"
                id="password_confirmation"
                autoComplete="off"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                />
                <button className="createAccountButton" onClick={handleSubmit}>Create an Account</button>
                </div>
            </form>

        </React.Fragment>
    )
};

export default CreateAccount;