import React, { useState } from "react";
import { useLocation } from "react-router-dom"
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

function VisitUpdate() {

    const [room_type, setRoom_Type] = useState("")
    const [check_in, setCheck_In] = useState("")
    const [check_out, setCheck_Out] = useState("")

    const location = useLocation();
    const rawVisit = location.state
    const visit = rawVisit.visit

    console.log(visit.id)

    return (
        <form>
        <h1>Adjust your booking...</h1>
        <select onChange={(e) => setRoom_Type(e.target.value)} value={visit.room.room_type}>
            <option value="">Select Room Class</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Grand Deluxe Room">Grand Deluxe Room</option>
            <option value="Executive Room">Executive Room</option>
            <option value="Superior Room">Superior Room</option>
            <option value="Archduchess Elizabeth Suite">Archduchess Elizabeth Suite</option>
        </select>
        <Flatpickr
        value={visit.check_in}
        data-date-format="Y-m-d"
        placeholder="Check-in"
        options={{ minDate: "today",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            enableTime: true }}
        onChange={(date) => setCheck_In(date[0])} />
        <p>-</p>
        <Flatpickr
        value={visit.check_out} 
        data-date-format="Y-m-d"
        placeholder="Check-out"
        options={{ minDate: "today",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            enableTime: true }}
        onChange={(date) => setCheck_Out(date[0])} />
        <button>Adjust booking</button>
    </form>
    )
}

export default VisitUpdate;