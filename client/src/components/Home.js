import React from "react";
import Nav from "./Nav"
import "../styles/home.css";

function Home(){ 
    return (
        <React.Fragment>
            <div className="entireItemContainer">
                <div id="leftContainer">
                <h1>The <br/> Grand <br/> Budapest <br/> Hotel</h1> 
                    <Nav/>
                </div>

                <div id="rightContainer">
                <img src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/574/27/574-27-101L/The-Grand-Budapest-Hotel-Pink-Mat-Voyce-Poster.jpg"/>

                </div>
            </div>
        </React.Fragment> 
    ); 

}

export default Home; 