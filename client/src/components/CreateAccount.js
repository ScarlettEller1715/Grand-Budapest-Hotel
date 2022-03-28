import React, { useState } from "react";

function CreateAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [name, setName] = useState("");
    const [bio, setBio] = useState("");
    
    return (
        <React.Fragment>
            <form>
                <input placeholder="Full Name"
                type="text"
                id="name"
                autoComplete="off"
                value={}
                />

            </form>
        </React.Fragment>
    )
};

export default CreateAccount;