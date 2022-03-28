import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";



function Booking() {


    return (
        <div>
            <h1>Booking Page</h1>
            <select>
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
            onChange={(date) => console.log(date[0])} />
            <p>-</p>
            <Flatpickr 
            data-date-format="Y-m-d"
            placeholder="Check-out"
            options={{ minDate: "today",
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d",
                enableTime: true }}
            onChange={(date) => console.log(date[0])} />
        </div>
    );
}

export default Booking