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
            <Link to="/">Home</Link>
            <Nav/>

            {/* <div className="portraitContainer">
            <img className="portrait"src="https://www.yimmaukun.com/wp-content/uploads/2019/06/125_%E7%B6%A0%E8%A1%A3%E5%A5%B3%E5%AD%9060.5x50cm2003%E8%89%B2%E6%A8%99.jpg"/>
            <img className="frame"src="https://o.remove.bg/downloads/9f4b0dc4-1f34-44df-865f-0e4aa259796a/png-transparent-computer-file-gold-pattern-frame-gold-ornate-frame-template-miscellaneous-frame-golden-frame-removebg-preview.png"/>
            </div> */}

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

            {/* <button onClick={handleLogoutClick}>Logout</button> */}
            
        </React.Fragment>
    ); 
}

export default Account; 