import React from "react";
import Nav from "./Nav"
import { Link } from "react-router-dom";
import "../styles/visits.css"

function Visits({ user }){
    return (
        <React.Fragment>
            <Nav user={user}/>
            <div>
                <h1> Our Accomodations - </h1>
                <p>Descrption paragraph to come</p>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Deluxe Room</h2>
                    <div class="cardSubtext">
                        <p>Descrption paragraph to come</p>
                        <Link to={{
                            pathname: "/booking", 
                            state: { room_type: "Deluxe Room" }}}>
                            Book Now
                        </Link>
                    </div>
                </div>
                <img src="https://www.pendrayinnandteahouse.com/uploads/1/0/6/8/106825145/garden-suite-2_1_orig.jpg"/>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Grand Deluxe Room</h2>
                    <div class="cardSubtext">
                    <p>Descrption paragraph to come</p>
                    <Link to={{
                        pathname: "/booking", 
                        state: { room_type: "Grand Deluxe Room" }}}>
                        Book Now
                    </Link>
                    </div>
                </div>
                <img src="https://nuvomagazine.scdn2.secure.raxcdn.com/wp-content/uploads/2014/12/St_Regis_NY-Grand-Luxe-Guestroom-01.jpg"/>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Executive Room</h2>
                    <p>Descrption paragraph to come</p>
                    <Link to={{
                        pathname: "/booking", 
                        state: { room_type: "Executive Room" }}}>
                        Book Now
                    </Link>
                </div>
                <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/ritz-paris-suite-imperiale-xlarge.jpg" />
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Superior Room</h2>
                    <p>Descrption paragraph to come</p>
                    <Link to={{
                        pathname: "/booking", 
                        state: { room_type: "Superior Room" }}}>
                        Book Now
                    </Link>
                </div>
                <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/ireland1/cong/ashford-castle-bedroom-state-ireland-xlarge.jpg"/>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Archduchess Elizabeth Suite</h2>
                    <p>Descrption paragraph to come</p>
                    <Link to={{
                        pathname: "/booking", 
                        state: { room_type: "Archduchess Elizabeth Suite" }}}>
                        Book Now
                    </Link>
                </div>
                <img src="https://insonduboiswood.com/wp-content/uploads/2018/08/MAIN-CHATEAU-SALON-DE-COMPAGNIE-1920x1200.jpg" />
            </div>
        </React.Fragment>
    ); 
}

export default Visits; 