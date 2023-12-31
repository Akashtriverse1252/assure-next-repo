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

const IsHomeCollection = () => {
  const { cartState, cartDispatch } = useData();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [removedDates] = useState(["2023-12-29"]);

  const bookingDate = generateRadioData(removedDates).map((date) => ({
    value: date.value,
    label: date.label,
    body: date.body,
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
  console.log(cartState.userAddress.IsHomeCollection);
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
                                <span className="day-picker-month">Dec</span>
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
                <div className="time-picker mt-6">
                  <div className="title">
                    <Clock className="mx-2" />
                    {/* <MdOutlineAccessTime className="mx-2" /> */}
                    Select preferred time slot
                  </div>
                  <div
                    className="time_slots d-flex"
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    tabIndex="0"
                  >
                    <label className="" htmlFor="morning">
                      <input
                        type="radio"
                        name="timeSlot"
                        id="morning"
                        className="d-none"
                        onChange={() =>
                          handleInputChange("timeSlot", "morning")
                        }
                        checked={selectedTime === "10:00"}
                      />
                      <div className="slot-wrapper">
                        <Morning />
                        Afternoon
                      </div>
                    </label>
                    <label className="" htmlFor="evening">
                      <input
                        type="radio"
                        name="timeSlot"
                        id="evening"
                        className="d-none"
                        onChange={() =>
                          handleInputChange("timeSlot", "evening")
                        }
                        checked={selectedTime === "16:00"}
                      />
                      <div className="slot-wrapper">
                        <Evening />
                        Evening
                      </div>
                    </label>
                  </div>
                </div>
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
                <div
                  type="button"
                  className="textbtn px-3"
                  onClick={handleFormSubmit}
                >
                  Add Your Address
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
