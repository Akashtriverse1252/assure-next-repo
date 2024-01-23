import React, { useState } from "react";

const SlotTime = ({ timeSlots, onSlotSelect }) => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSlotSelect = (time) => {
    // If the same slot is clicked again, deselect it
    const newSelectedTime = selectedTime === time ? null : time;
    setSelectedTime(newSelectedTime);

    // Pass the selected time information to the parent component
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
        {timeSlots &&
          timeSlots.map(({ label, times }) => renderTimeSlot(label, times))}
      </div>
    </div>
  );
};

export default SlotTime;
