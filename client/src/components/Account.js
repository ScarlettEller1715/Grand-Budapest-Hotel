import React from "react";
import Nav from "./Nav"; 
import VisitInfo from "./VisitInfo";
import { Link } from "react-router-dom";
import "../styles/account.css";

function Account({ user, setUser }){

    const visits = user.visits.map((visit) => {
        return <VisitInfo visit={visit} />
        })

        function handleLogoutClick() {
            fetch("/logout", {
                method: "DELETE"
            }).then((res) => {
                if (res.ok) {
                    setUser(null);
                }
            })
        }

    return (
        <React.Fragment>
                {/* <div className="accountContainer"> */}
                <Link to="/">Home</Link>
                <Nav/>
                <h1 id="accountHeader"> Welcome, {user.name} </h1>

                <div className="overallInfo">
                    <div className="CustomerInfo">
                        <h3>Guest Information:</h3>
                        <p>Name: {user.name}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Profession: {user.profession}</p>
                        <p>Username: {user.username}</p>
                        <button onClick={handleLogoutClick}>Logout</button>
                    </div>
                    <div className="VisitContainer">
                        <div className="VisitInfo">
                            <h3 id="visitTitle">Your Upcoming Visit:</h3>
                        </div>
                            {visits}
                    </div>
                </div>
            {/* </div>            */}
        </React.Fragment>
    ); 
}

export default Account; 