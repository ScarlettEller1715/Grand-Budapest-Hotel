import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";



function Booking() {

    return (
        <div>
            <h1>Booking Page</h1>
            <Flatpickr 
            data-date-format="Y-m-d"
            options={{ minDate: "today",
                altInput: true,
                altFormat: "F j, Y",
                dateFormat: "Y-m-d" }}
            onChange={(date) => console.log(date[0])} />
        </div>
    );
}

export default Booking