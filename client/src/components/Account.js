import React from "react";
import Nav from "./Nav"; 
import { Link } from "react-router-dom";

function Account(){
    return (
        <React.Fragment>
            <Link to="/">Home</Link>
            <Nav/>
            <h1> Welcome, *Name* </h1>
            <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c9c0cd75-e41a-4c8b-862c-12b4cdc9ec28/d491eum-dfce1527-bf0f-494e-8ab3-99139d2e7466.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2M5YzBjZDc1LWU0MWEtNGM4Yi04NjJjLTEyYjRjZGM5ZWMyOFwvZDQ5MWV1bS1kZmNlMTUyNy1iZjBmLTQ5NGUtOGFiMy05OTEzOWQyZTc0NjYuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.U-XlPLuIUwLreBvmpuTjvCu0wm8CCop1aswmwOr7nak"/>

            
            <div className="CustomerInfo">
                <p>Name:</p>
                <p>Gender:</p>
                <p>Profession:</p>
                <p>Username:</p>
            </div>

            <div className="VisitInfo">
                <h3>Visit Information</h3>
                <li>Check-In:</li>
                <li>Check-Out:</li>

                <h3>Room Information</h3>
                <li>Room_Type</li>
                <li>Number</li>
                <li>Price</li>
            </div>


        </React.Fragment>
    ); 
}

export default Account; 