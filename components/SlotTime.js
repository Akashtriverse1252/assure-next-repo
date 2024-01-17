import React, { useState, useEffect } from "react";

const SlotTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 600000); // Update current time every minute

    return () => clearInterval(interval);
  }, []);

  const formatTime = (hour, minute) => {
    const period = hour >= 12 ? "PM" : "AM";
    const formattedHour = hour % 12 === 0 ? 12 : hour % 12;
    const formattedMinute = minute < 10 ? `0${minute}` : minute;
    return `${formattedHour}:${formattedMinute} ${period}`;
  };

  const handleSlotSelection = (formattedTime) => {
    setSelectedSlot(formattedTime);
  };

  const generateTimeSlots = (startHour, endHour, interval) => {
    const timeSlots = [];
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentPeriod = currentHour >= 12 ? "PM" : "AM";

    for (let hour = startHour; hour <= endHour; hour += interval) {
      const period = hour >= 12 ? "PM" : "AM";
      const formattedTime = formatTime(Math.floor(hour), (hour % 1) * 60);

      const isSelected =
        selectedSlot === formattedTime &&
        (hour > currentHour || (hour === currentHour && 30 >= currentMinute));

      if (
        (hour > currentHour && period === currentPeriod) ||
        (hour > currentHour && period !== currentPeriod)
      ) {
        timeSlots.push(
          <div key={formattedTime} className="app-border">
            <input
              type="radio"
              className="option-input radio"
              name={`slot-${formattedTime.replace(":", "").replace(" ", "-")}`}
              id={`slot-${formattedTime.replace(":", "").replace(" ", "-")}`}
              checked={isSelected}
              onChange={() => handleSlotSelection(formattedTime)}
            />
            <label
              className="app-label"
              htmlFor={`slot-${formattedTime
                .replace(":", "")
                .replace(" ", "-")}`}
            >
              {formattedTime}
            </label>
          </div>
        );
      }
    }
    return timeSlots;
  };

  return (
    <>
      <div className="app-time">
        <div>
          <p>Morning Slot</p>
          <div className="app-check">{generateTimeSlots(7, 11.5, 0.5)}</div>
        </div>
        <div>
          <p>Afternoon</p>
          <div className="app-check">{generateTimeSlots(12, 15.5, 0.5)}</div>
        </div>
        <div>
          <p>Evening</p>
          <div className="app-check">{generateTimeSlots(16, 20, 0.5)}</div>
        </div>
      </div>
    </>
  );
};

export default SlotTime;
