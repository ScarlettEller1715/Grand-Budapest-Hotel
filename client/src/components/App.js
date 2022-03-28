import React from "react";
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Visits from "./Visits";
import Room from "./Room"; 
import Amenities from "./Amenities";
import Booking from "./Booking";
import Account from "./Account";
import Login from "./Login";

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

                <Route path="/account">
                    <Account/>
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/booking">
                  <Booking/>
                </Route>

                <Route path="/login">
                  <Login/>
                </Route>

                </Switch>
            </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;