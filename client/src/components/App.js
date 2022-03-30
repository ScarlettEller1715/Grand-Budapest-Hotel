import React, { useState, useEffect } from "react";
import Home from "./Home";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Visits from "./Visits";
import Amenities from "./Amenities";
import Booking from "./Booking";
import Account from "./Account";
import Login from "./Login";
import CreateAccount from "./CreateAccount";
import VisitUpdate from "./VisitUpdate";

function App() {

  const [user, setUser] = useState(null);
  const [userVisits, setUserVisits] = useState([])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((guest) => {
          setUser(guest)
          setUserVisits(guest.visits)
        })
      }
    })
  }, []);

  function addNewVisit(newVisit) {
    setUserVisits([
      ...userVisits,
      newVisit
    ])
  }

  function deleteVisit(id) {
    const updatedData = userVisits.filter((visit) => {
      if (visit.id === id) {
        return null
      } else {
        return visit
      }
    })
    setUserVisits(updatedData)
  }

  function updateVisit(adjustedVisit) {
    const updatedVisits = userVisits.map((visit) => {
      if (visit.id === adjustedVisit.id) {
        return adjustedVisit;
      } else {
        return visit;
      }
    });
    setUserVisits(updatedVisits)
  }

  return (
    <React.Fragment>
      <BrowserRouter>
            <div className="App">
                <Switch>

                 <Route path="/amenities">
                   <Amenities user={user}/>
                 </Route>

                <Route path="/visits">
                    <Visits user={user}/>
                    
                </Route>

                <Route path="/account">
                    {user ? <Account user={user} 
                                     setUser={setUser} 
                                     userVisits={userVisits}
                                     deleteVisit={deleteVisit}/> : <Login setUser={setUser}/>}
                </Route>

                <Route exact path="/">
                    <Home user={user}/>
                </Route>

                <Route path="/booking">
                  {user ? <Booking addNewVisit={addNewVisit}/> : <Login setUser={setUser}/>}
                </Route>

                <Route path="/login">
                  {user ? <Account user={user} setUser={setUser} /> : <Login setUser={setUser}/>}
                </Route>

                <Route path="/accountcreation">
                  <CreateAccount setUser={setUser}/>
                </Route>

                <Route path="/bookingupdate">
                  <VisitUpdate updateVisit={updateVisit}/>
                </Route>

                </Switch>
            </div>
      </BrowserRouter>
    </React.Fragment>
    
  );
}

export default App;