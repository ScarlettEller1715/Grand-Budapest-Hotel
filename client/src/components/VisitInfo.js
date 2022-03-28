import React from "react";

function VisitInfo({ visit }) {
    
    console.log(visit)
    
    return (<div className="VisitInfo">
                <h3>{visit.check_in}</h3>
                <li>check-In: {visit.check_in}</li>
                <li>Check-Out: {visit.check_out}</li>

                <h3>{visit.room.room_type}</h3>
                <li>Room number: {visit.room.number}</li>
                <li>Price per night: {visit.room.price}</li>
            </div>
    )
}

export default VisitInfo;