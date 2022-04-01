import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import "../styles/amenities.css";



function Amenities ({ user }) {

    return (
        <React.Fragment>
                <Nav user={user}/>

                <h1 id="amenitiesHeader">Our Amenities</h1>

                <div class="AmenitiesCard">
                    <img src="http://4.bp.blogspot.com/-yyMgdDGVvPw/U19D7wmieZI/AAAAAAAAIfs/GNiyWbSzNi8/s1600/GrandBudapest.jpg"/>
                    <p>The Grand Budapest offers nothing less than the epitome of luxury and service to our guests.</p>
                </div>

                <div class="AmenitiesCard">
                    <img src="https://cdn.vox-cdn.com/uploads/chorus_asset/file/2403036/15461985257_6584dff43c_h.0.jpg"/>

                    <div class="amenitiesInfoCard">
                        <h2 className="amenitiesSubHeader">The Palm Court</h2>
                        <p>Featuring exotic plants from around the world, the Palm Court cafe offers permiere international tea and coffee.</p>
                    </div>

                </div>

                <div class="AmenitiesCard">
                    <img src="https://cdn.80.lv/api/upload/content/14/61b313469442b.jpg"/>
                    
                    <div class="amenitiesInfoCard">
                        <h2 className="amenitiesSubHeader">The Arabian Baths</h2>
                        <p>Relaxing and discrete, the Arabian baths superior comfort in decadent surroundings.</p>
                    </div>

                </div>

                <div class="AmenitiesCard">
                    <img src="https://www.funimag.com/wordpress/wp-content/uploads/TGBH-Funicular-1.jpg" />

                    <div class="amenitiesInfoCard">
                        <h2 className="amenitiesSubHeader">The Colonnade Funicular</h2>
                        <p>Installed in 1923, this unique transportation system remains a beloved way to reach the Grand Budapest.</p>
                    </div>

                </div>

                <div class="AmenitiesCard">
                    <img src="https://apis.xogrp.com/media-api/images/3e345b96-f3ee-11e4-be0a-22000aa61a3e" />

                    <div class="amenitiesInfoCard">
                        <h2 className="amenitiesSubHeader">Mendl's Luxury Pastries</h2>
                        <p>Stuff about palm court blah blah look at me tehe</p>
                    </div>
                </div>

                <div class="AmenitiesCard">
                    <img src="https://lwlies.com/wp-content/uploads/2021/02/boy-with-apple.jpg" />

                    <div class="amenitiesInfoCard">
                        <h2 className="amenitiesSubHeader">The Gustave H. Art Collection</h2>
                        <p>Stuff about palm court blah blah look at me tehe</p>
                    </div>
                </div>
        </React.Fragment>
        
    )
}


export default Amenities;