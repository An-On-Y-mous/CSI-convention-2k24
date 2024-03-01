import "./timings.css";
import React, { useEffect } from "react";

const timings = () => {
  useEffect(() => {
    document.title = "Event Timings | CSI Convention 2024";
  });
  return (
    <div className="parent-timings">
      <h1 className="timings-heading">Timings</h1>
      <div className="timings-main">
        <div className="timings-container">
          <p>8:00 AM to 9:00AM - Inaugural Function</p>
          <p>9:30 AM to 12:30 PM - prelim rounds of all events</p>
          <p>12:30 PM to 1:30 PM - Lunch</p>
          <p>1:30 PM to 3:00 PM- Finale rounds of all events</p>
          <p>3:00 PM to 3:50 PM - Valedictory / Awards function</p>
        </div>
      </div>
    </div>
  );
};

export default timings;
