import React, { useState } from "react";

const SlotTime = ({ timeSlots }) => {
  const [selectedSlots, setSelectedSlots] = useState({});

  const handleSlotSelect = (label, time) => {
    const newSelectedSlots = { ...selectedSlots, [label]: time };
    setSelectedSlots(newSelectedSlots);
  };

  const renderTimeSlot = (label, times) => (
    <div key={label}>
      <p>{label}</p>
      <div className="app-check">
        {times.map((time) => (
          <div
            key={time}
            className={`app-border  ${
              selectedSlots[label] === time ? "selected" : ""
            }`}
          >
            <input
              className="option-input"
              id={time}
              type="radio"
              name="timeSlot"
              onChange={() => handleSlotSelect(label, time)}
            />
            <label
              className={`app-label ${
                selectedSlots[label] === time ? "selected" : ""
              }`}
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
