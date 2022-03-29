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
                {/* <img src="https://assets1.ignimgs.com/2014/03/04/gbh0303141280jpg-df102f_160w.jpg?width=2280"/> */}
                {/* <img src="../images/grandBudapest.png"/> */}
                <img src="https://product-image.juniqe-production.juniqe.com/media/catalog/product/seo-cache/x800/574/27/574-27-101L/The-Grand-Budapest-Hotel-Pink-Mat-Voyce-Poster.jpg"/>

                </div>
            </div>

        </React.Fragment> 
    ); 

}

export default Home; 