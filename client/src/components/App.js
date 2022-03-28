import React, { useState, useEffect } from "react";
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Visits from "./Visits";
import Room from "./Room"; 
import Amenities from "./Amenities";
import Booking from "./Booking";
import Account from "./Account";
import Login from "./Login";

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((guest) => setUser(guest))
      }
    })
  }, []);

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
                    {user ? <Account user={user}/> : <Login/>}
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/booking">
                  {user ? <Booking/> : <Login/>}
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