import React from "react";
import Nav from "./Nav"
import { Link } from "react-router-dom";
import "../styles/visits.css"

function Visits({ user }){
    return (
        <React.Fragment>
            <Nav user={user}/>
            <div>
                <h1 class="accomodations"> Our Accomodations - </h1>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Deluxe Room</h2>
                    <div class="cardSubtext">
                        <p>Quiet and cozy, our Deluxe rooms feature spacious living quarters and a luxurious bedroom, with quick access to our hotel amenities.</p>
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
                        <p>Embrace the Sudetenwaltz in it's purest mountain style. Featuring beautiful forest views and a charming interior, the Grand Deluxe rooms are a welcome retreat for any occasion.</p>
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
                    <div class="cardSubtext">
                    <p>Experience the Alpine Sudetenwaltz with classic Zubrowkan flair. Bathed in natural light, our luxurious Executive rooms come with exquisite bathrooms and a spacious balcony.</p>
                    <Link to={{
                        pathname: "/booking", 
                        state: { room_type: "Executive Room" }}}>
                        Book Now
                    </Link>
                    </div>
                </div>
                <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/france/paris/ritz-paris-suite-imperiale-xlarge.jpg" />
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Superior Room</h2>
                    <div class="cardSubtext">
                        <p>Featuring marble fireplaces, elaborate mirrors and sumptuous bathrooms, the Superior room ensures an unforgettable stay in the height of luxury.</p>
                        <Link to={{
                            pathname: "/booking", 
                            state: { room_type: "Superior Room" }}}>
                            Book Now
                        </Link>
                        </div>
                    </div>
                <img src="https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/ireland1/cong/ashford-castle-bedroom-state-ireland-xlarge.jpg"/>
            </div>
            <div class="roomCard">
                <div>
                    <h2>The Archduchess Elizabeth Suite</h2>
                    <div class="cardSubtext">
                        <p>A truly opulent selection for only our most distinguished guests, this charming suite features a lavish bathroom, living room filled with art treasures, and awe-inspiring views of the Alpine Sudetenwaltz. The best Zubrowka has to offer.</p>
                        <Link to={{
                            pathname: "/booking", 
                            state: { room_type: "Archduchess Elizabeth Suite" }}}>
                            Book Now
                        </Link>
                    </div>
                </div>
                <img src="https://insonduboiswood.com/wp-content/uploads/2018/08/MAIN-CHATEAU-SALON-DE-COMPAGNIE-1920x1200.jpg" />
            </div>
        </React.Fragment>
    ); 
}

export default Visits; 