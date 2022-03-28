import React from "react";
import Nav from "./Nav"; 
import VisitInfo from "./VisitInfo";
import { Link } from "react-router-dom";

function Account({ user }){

    const visits = user.visits.map((visit) => {
        return <VisitInfo visit={visit} />
        })

    // console.log(user.visits)

    return (
        <React.Fragment>
            <Link to="/">Home</Link>
            <Nav/>
            <h1> Welcome, {user.name} </h1>
            <div className="CustomerInfo">
                <p>Name: {user.name}</p>
                <p>Gender: {user.gender}</p>
                <p>Profession: {user.profession}</p>
                <p>Username: {user.username}</p>
            </div>
            <div>
                <h3>Your upcoming visits</h3>
                {visits}
            </div>
            
        </React.Fragment>
    ); 
}

export default Account; 