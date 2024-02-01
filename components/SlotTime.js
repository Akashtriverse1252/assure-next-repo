import React, { useState, useEffect } from "react";
import axios from "axios";

const SlotTime = ({ timeSlots, onSlotSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSlotSelect = (time) => {
    const newSelectedTime = selectedTime === time ? null : time;
    setSelectedTime(newSelectedTime);
    onSlotSelect(newSelectedTime);
  };

  const renderTimeSlot = (label, times) => (
    <div key={label}>
      <p>{label}</p>
      <div className="app-check">
        {times.map((time) => (
          <div
            key={time}
            className={`app-border  ${selectedTime === time ? "selected" : ""}`}
          >
            <input
              className="option-input"
              id={time}
              type="radio"
              name="timeSlot"
              onChange={() => handleSlotSelect(time)}
            />
            <label
              className={`app-label ${selectedTime === time ? "selected" : ""}`}
              htmlFor={time}
            >
              {time}
            </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="Time-slot">
      <div className="app-time">
        {timeSlots.message === "error" ? (
          <p className="col-12 col-md-10 col-lg-7 slot-time-not">
            Booking is not available right now. Please contact customer care.
          </p>
        ) : (
          <>
            {timeSlots.result === "success" ? (
              Object.keys(timeSlots.available_time_slots).length > 0 ? (
                Object.entries(timeSlots.available_time_slots).map(
                  ([label, times]) => renderTimeSlot(label, times)
                )
              ) : (
                <p className="col-12 col-md-10 col-lg-7 slot-time-not">
                  Please select a date.
                </p>
              )
            ) : timeSlots.result === "no timeslot found" ? (
              <p className="col-12 col-md-10 col-lg-7 slot-time-not">
                We regret to inform you that all slots are currently occupied.
                For emergency purposes, please contact us at:
                <a href="tel:01814667555"> 0181-4667555</a>
              </p>
            ) : (
              <>
                <p className="col-12 col-md-10 col-lg-7 slot-time-not">
                  Please select a date.
                </p>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SlotTime;
