import React from "react";
import Nav from "./Nav"; 
import VisitInfo from "./VisitInfo";
import "../styles/account.css";

function Account({ user, setUser, userVisits, deleteVisit }){

    const visits = userVisits.map((visit) => {
        return <VisitInfo visit={visit}  deleteVisit={deleteVisit}/>
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
                <Nav user={user}/>
                <h1 id="accountHeader"> Welcome, {user.name} </h1>

                <div className="overallInfo">
                    <div className="CustomerInfo">
                        <h3>Guest Information:</h3>
                        <p>Name: {user.name}</p>
                        <p>Gender: {user.gender}</p>
                        <p>Profession: {user.profession}</p>
                        <p>Username: {user.username}</p>
                        <button id="accountButton" onClick={handleLogoutClick}>Logout</button>
                    </div>
                    <div className="VisitContainer">
                        <div className="VisitInfo">
                            <h3 id="visitTitle">Your Upcoming Visit:</h3>
                        </div>
                        {visits}
                    </div>
                </div>
        </React.Fragment>
    ); 
}

export default Account; 