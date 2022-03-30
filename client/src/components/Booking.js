import React, { Component, useState } from "react";
import { useHistory } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";



function Booking() {

    const [room_type, setRoom_Type] = useState("")
    const [check_in, setCheck_In] = useState("")
    const [check_out, setCheck_Out] = useState("")

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                room_type,
                check_in,
                check_out
            }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((visit) => {
                    console.log(visit)
                    history.push("/account")
                    window.location.reload(true)})
            } else {
                r.json().then((e) => alert(e.errors))
            }})
    }

    return (
        <form>
            <h1>Booking Page</h1>
            <select onChange={(e) => setRoom_Type(e.target.value)}>
                <option value="">Select Room Class</option>
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Grand Deluxe Room">Grand Deluxe Room</option>
                <option value="Executive Room">Executive Room</option>
                <option value="Superior Room">Superior Room</option>
                <option value="Archduchess Elizabeth Suite">Archduchess Elizabeth Suite</option>
            </select>
            <Flatpickr 
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
            data-date-format="Y-m-d"
            placeholder="Check-out"
            options={{ minDate: "today",
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                enableTime: true }}
            onChange={(date) => setCheck_Out(date[0])} />
            <button onClick={handleSubmit}>Book your trip!</button>
        </form>
    );
}

export default Booking