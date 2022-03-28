import React from "react";

function VisitInfo({ visit }) {
    
    const checkIn = { time: visit.check_in }
    const checkOut = { time: visit.check_out }
    
    console.log(new Date(checkOut.time).toLocaleString())

    
    return (<div className="VisitInfo">
                <h3>{new Date(checkIn.time).toLocaleDateString()}</h3>
                <li>Check-In: {new Date(checkIn.time).toLocaleString()}</li>
                <li>Check-Out: {new Date(checkOut.time).toLocaleString()}</li>

                <h3>{visit.room.room_type}</h3>
                <li>Room number: {visit.room.number}</li>
                <li>Price per night: {visit.room.price}</li>
            </div>
    )
}

export default VisitInfo;