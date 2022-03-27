import React from "react";
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Visits from "./Visits";
import Room from "./Room"; 
import Guest from "./Guest";
import Amenities from "./Amenities";
import Booking from "./Booking";

function App() {

  return (
    <React.Fragment>
      <BrowserRouter>
            <div className="App">
                <Switch>

                 <Route path="/amenities">
                   <Amenities />
                 </Route>

                <Route path="/visits">
                    <Visits/>
                    
                </Route>

                <Route path="/rooms">
                    <Room/>
                    
                </Route>

                <Route path="/guest">
                    <Guest/>
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/booking">
                  <Booking/>
                </Route>

                </Switch>
            </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;