import React from "react";
import { useHistory, Link } from "react-router-dom";


function VisitInfo({ visit, deleteVisit }) {
    
    const checkIn = { time: visit.check_in }
    const checkOut = { time: visit.check_out }

    const history = useHistory();

    
    function handleDelete() {
        fetch(`/cancellation/${visit.id}`, {
            method: "DELETE",
        }).then(() => {
            deleteVisit(visit.id)
            history.push('/account')
        })
    }

    return (<div className="VisitInfo">
                <h3>{new Date(checkIn.time).toLocaleDateString()}</h3>
                <li>Check-In: {new Date(checkIn.time).toLocaleString()}</li>
                <li>Check-Out: {new Date(checkOut.time).toLocaleString()}</li>

                <h3>{visit.room.room_type}</h3>
                <li>Room number: {visit.room.number}</li>
                <li>Price per night: {visit.room.price}</li>
                <button onClick={handleDelete}>Cancel this Booking</button>
                <Link to={{
                    pathname: "/bookingupdate", 
                    state: { visit: visit }
                }}>Adjust this Booking</Link>
            </div>
    )
}

export default VisitInfo;