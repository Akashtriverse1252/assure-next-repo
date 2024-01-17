"use client";

import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Morning from "./svg-components/Morning";
import Evening from "./svg-components/Evening";
import Calender from "./svg-components/Calender";
import Clock from "./svg-components/Clock";
import Address from "./svg-components/Address";
import { TextField } from "@mui/material";
import { useData } from "@/context/context";
import { CleaningServices } from "@mui/icons-material";
import SlotTime from "./SlotTime";
import slotTimes from "@/Data/slot_time.json";

const IsHomeCollection = () => {
  const { cartState, cartDispatch } = useData();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [removedDates] = useState([""]);

  const bookingDate = generateRadioData(removedDates).map((date) => ({
    value: date.value,
    label: date.label,
    body: date.body,
    month: date.month,
  }));
  console.log(bookingDate);

  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "dateSelection") {
      setSelectedDate(value);
    } else if (name === "timeSlot") {
      setSelectedTime(value === "morning" ? "10:00" : "16:00");
    }
  };

  const handleFormSubmit = () => {
    const { address, pincode, city, state } = formData;
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

    const formattedDateTime = `${
      selectedDateTime.toISOString().split("T")[0]
    }T${selectedDateTime.toTimeString().split(" ")[0]}Z`;
    // console.log(formattedDateTime);

    const updatedData = {
      address,
      pincode,
      city,
      state,
      homeCollectionDateTime: formattedDateTime,
    };

    cartDispatch({
      type: "UPDATE_USER_ADDRESS",
      userAddress: updatedData,
    });
  };
  // console.log(cartState.userAddress.IsHomeCollection);
  return (
    <>
      <div
        className={`home_collection_data ${(cartState.userAddress.IsHomeCollection =
          1 ? "d-block" : "d-none")}`}
      >
        <h5>
          <strong> Home Collection Details</strong>
        </h5>
        <div className="hcd_time">
          <div className="hcd_time_date">
            <div className="hcd_select_date">
              <article className=" slots-content">
                <div className=" day-picker mb-5">
                  <section className="date-header mb-2">
                    <div className="title">
                      <Calender />
                      Select Date
                    </div>
                  </section>
                  <div
                    className="hcd_date_seection"
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    tabIndex="0"
                  >
                    {bookingDate.map((item, index) => (
                      <div className="radio-buttons" key={index}>
                        <label
                          className="custom-radio"
                          htmlFor={`radio${index}`}
                        >
                          <input
                            type="radio"
                            name="dateSelection"
                            id={`radio${index}`}
                            onChange={() =>
                              handleInputChange("dateSelection", item.value)
                            }
                            checked={selectedDate === item.value}
                          />
                          <span className="radio-btn">
                            <i className="las la-check">
                              <FaCheck />
                            </i>
                            <div className="hobbies-icon">
                              <div className="slot-option">
                                <span className="day-picker-month">
                                  {item.month}
                                </span>
                                <span className="day-picker-day">
                                  <strong>{item.label}</strong>
                                </span>
                                <h3 className="">{item.body}</h3>
                              </div>
                            </div>
                          </span>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <SlotTime timeSlots={slotTimes.timeSlots} />
                {/* <div className="Time-slot">
                  <div className="app-time">
                    <div>
                      <p>Morning Slot</p>
                      <div className="app-check">
                        <div className="app-border app-730AM">
                          <input
                            className="option-input "
                            id="730AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="730AM">
                            7:30 AM
                          </label>
                        </div>
                        <div className="app-border app-800AM">
                          <input
                            className="option-input "
                            id="800AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="800AM">
                            8:00 AM
                          </label>
                        </div>
                        <div className="app-border app-830AM">
                          <input
                            className="option-input "
                            id="830AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="830AM">
                            8:30 AM
                          </label>
                        </div>
                        <div className="app-border app-900AM">
                          <input
                            className="option-input "
                            id="900AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="900AM">
                            9:00 AM
                          </label>
                        </div>
                        <div className="app-border app-930AM">
                          <input
                            className="option-input "
                            id="930AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="930AM">
                            9:30 AM
                          </label>
                        </div>
                        <div className="app-border app-1000AM">
                          <input
                            className="option-input "
                            id="1000AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1000AM">
                            10:00 AM
                          </label>
                        </div>
                        <div className="app-border app-1030AM">
                          <input
                            className="option-input "
                            id="1030AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1030AM">
                            10:30 AM
                          </label>
                        </div>
                        <div className="app-border app-1100AM">
                          <input
                            className="option-input "
                            id="1100AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1100AM">
                            11:00 AM
                          </label>
                        </div>
                        <div className="app-border app-1130AM">
                          <input
                            className="option-input "
                            id="1130AM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1130AM">
                            11:30 AM
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Afternoon</p>
                      <div className="app-check">
                        <div className="app-border app-1200PM">
                          <input
                            className="option-input "
                            id="1200PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1200PM">
                            12:00 PM
                          </label>
                        </div>
                        <div className="app-border app-1230PM">
                          <input
                            className="option-input "
                            id="1230PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="1230PM">
                            12:30 PM
                          </label>
                        </div>
                        <div className="app-border app-100PM">
                          <input
                            className="option-input "
                            id="100PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="100PM">
                            1:00 PM
                          </label>
                        </div>
                        <div className="app-border app-130PM">
                          <input
                            className="option-input "
                            id="130PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="130PM">
                            1:30 PM
                          </label>
                        </div>
                        <div className="app-border app-200PM">
                          <input
                            className="option-input "
                            id="200PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="200PM">
                            2:00 PM
                          </label>
                        </div>
                        <div className="app-border app-230PM">
                          <input
                            className="option-input "
                            id="230PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="230PM">
                            2:30 PM
                          </label>
                        </div>
                        <div className="app-border app-300PM">
                          <input
                            className="option-input "
                            id="300PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="300PM">
                            3:00 PM
                          </label>
                        </div>
                        <div className="app-border app-330PM">
                          <input
                            className="option-input "
                            id="330PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="330PM">
                            3:30 PM
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Evening</p>
                      <div className="app-check">
                        <div className="app-border app-400PM">
                          <input
                            className="option-input "
                            id="400PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="400PM">
                            4:00 PM
                          </label>
                        </div>
                        <div className="app-border app-430PM">
                          <input
                            className="option-input "
                            id="430PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="430PM">
                            4:30 PM
                          </label>
                        </div>
                        <div className="app-border app-500PM">
                          <input
                            className="option-input "
                            id="500PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="500PM">
                            5:00 PM
                          </label>
                        </div>
                        <div className="app-border app-530PM">
                          <input
                            className="option-input "
                            id="530PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="530PM">
                            5:30 PM
                          </label>
                        </div>
                        <div className="app-border app-600PM">
                          <input
                            className="option-input "
                            id="600PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="600PM">
                            6:00 PM
                          </label>
                        </div>
                        <div className="app-border app-630PM">
                          <input
                            className="option-input "
                            id="630PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="630PM">
                            6:30 PM
                          </label>
                        </div>
                        <div className="app-border app-700PM">
                          <input
                            className="option-input "
                            id="700PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="700PM">
                            7:00 PM
                          </label>
                        </div>
                        <div className="app-border app-730PM">
                          <input
                            className="option-input "
                            id="730PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="730PM">
                            7:30 PM
                          </label>
                        </div>
                        <div className="app-border app-800PM">
                          <input
                            className="option-input "
                            id="800PM"
                            type="radio"
                            name="timeSlot"
                          />
                          <label className="app-label" htmlFor="800PM">
                            8:00 PM
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </article>
              <article className="address mt-5">
                <div className="title">
                  <Address className="mx-2" />
                  Fill your address
                </div>
                <div className="col-11 d-flex justify-content-between">
                  <TextField
                    className=" mx-3 col-6"
                    id="standard-required"
                    variant="standard"
                    defaultValue="Address"
                    label="Address line 1"
                    name="Address line 1"
                    value={formData.address}
                    onChange={(e) =>
                      handleInputChange("address", e.target.value)
                    }
                  />
                </div>
                <div className="col-7 mt-5 d-flex ">
                  <TextField
                    className=" mx-3 col-2"
                    id="standard-required"
                    variant="standard"
                    label="pincode"
                    name="pincode"
                    value={formData.pincode}
                    defaultValue="pincode"
                    onChange={(e) =>
                      handleInputChange("pincode", e.target.value)
                    }
                  />
                  <TextField
                    className=" mx-3 col-3"
                    variant="standard"
                    id="standard-required"
                    defaultValue="city"
                    label="city"
                    name="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                  {/* ... (your existing JSX code) */}
                  <TextField
                    label="state"
                    name="state"
                    defaultValue="state"
                    variant="standard"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </div>
                {/* <div
                  type="button"
                  className="textbtn px-3"
                  onClick={handleFormSubmit}
                >
                  Add Your Address
                </div> */}
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsHomeCollection;

const generateRadioData = (removedDates) => {
  const today = new Date();
  const radioData = [];
  let currentDate = today;

  for (let i = 0; i < 4; i++) {
    let date = new Date(currentDate);
    while (removedDates.includes(date.toISOString().split("T")[0])) {
      date.setDate(date.getDate() + 1); // Skip removed dates
    }

    const formattedDate = date.toISOString().split("T")[0];

    radioData.push({
      value: formattedDate,
      label: date.getDate().toString(),
      month: date.toLocaleDateString("en-US", { month: "long" }),
      body:
        i === 0
          ? "Today"
          : i === 1
          ? "Tomorrow"
          : date.toLocaleDateString("en-US", { weekday: "long" }),
      isRemoved: removedDates.includes(formattedDate),
    });

    currentDate.setDate(date.getDate() + 1);
  }

  return radioData;
};
