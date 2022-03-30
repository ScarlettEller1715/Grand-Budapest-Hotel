import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom"
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

function VisitUpdate() {

    const [room_type, setRoom_Type] = useState("")
    const [check_in, setCheck_In] = useState("")
    const [check_out, setCheck_Out] = useState("")

    const history = useHistory();

    const location = useLocation();
    const rawVisit = location.state
    const visit = rawVisit.visit

    function handleSubmit(e) {
        const updatedRoom = (room_type ? room_type : visit.room.room_type)
        const updatedCheck_In = (check_in ? check_in : visit.check_in)
        const updatedCheck_Out = (check_out ? check_out : visit.check_out)

        e.preventDefault();
        fetch(`/bookingupdate/${visit.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                check_in: updatedCheck_In,
                check_out: updatedCheck_Out,
                room_type: updatedRoom
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((visit) => {
                    history.push("/account")
                    window.location.reload(true)
                    })
            } else {
                r.json().then((e) => alert(e.errors))
            }})
    }

    return (
        <form>
        <h1>Adjust your booking...</h1>
        <select onChange={(e) => setRoom_Type(e.target.value)} defaultValue={visit.room.room_type} >
            <option value="">Select Room Class</option>
            <option value="Deluxe Room">Deluxe Room</option>
            <option value="Grand Deluxe Room">Grand Deluxe Room</option>
            <option value="Executive Room">Executive Room</option>
            <option value="Superior Room">Superior Room</option>
            <option value="Archduchess Elizabeth Suite">Archduchess Elizabeth Suite</option>
        </select>
        <Flatpickr
        defaultValue={visit.check_in}
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
        defaultValue={visit.check_out} 
        data-date-format="Y-m-d"
        placeholder="Check-out"
        options={{ minDate: "today",
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            enableTime: true }}
        onChange={(date) => setCheck_Out(date[0])} />
        <button onClick={handleSubmit}>Adjust Booking</button>
    </form>
    )
}

export default VisitUpdate;