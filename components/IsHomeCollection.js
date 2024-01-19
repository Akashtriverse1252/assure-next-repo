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

const IsHomeCollection = ({ HomeColData }) => {
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
    }
    // else if (name === "timeSlot") {
    //   setSelectedTime(value === "morning" ? "10:00" : "16:00");
    // }
  };
  useEffect(() => {
    // Trigger form submission when formData changes
    HomeColData(formData);
  }, [formData, HomeColData]);

  return (
    <>
      <div
        className={`home_collection_data ${(cartState.userAddress.IsHomeCollection =
          1 ? "d-block" : "d-none")}`}
      >
        <h3>
          <strong> Home Collection Details</strong>
        </h3>
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
