import React, { useState, useEffect } from "react";
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Visits from "./Visits";
import Room from "./Room"; 
import Amenities from "./Amenities";
import Booking from "./Booking";
import Account from "./Account";
import Login from "./Login";
import CreateAccount from "./CreateAccount";

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
                    {user ? <Account user={user} setUser={setUser}/> : <Login setUser={setUser}/>}
                </Route>

                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/booking">
                  {user ? <Booking/> : <Login setUser={setUser}/>}
                </Route>

                <Route path="/login">
                  {user ? <Account user={user} setUser={setUser} /> : <Login setUser={setUser}/>}
                </Route>

                <Route path="/accountcreation">
                  <CreateAccount setUser={setUser}/>
                </Route>

                </Switch>
            </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;