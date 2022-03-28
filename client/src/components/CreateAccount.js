import React, { useState } from "react";

function CreateAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [profession, setProfession] = useState("");
    const [gender, setGender] = useState("")

    console.log(gender)
    
    return (
        <React.Fragment>
            <form>
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
                <input placeholder="Username"
                />

            </form>
        </React.Fragment>
    )
};

export default CreateAccount;