import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import Morning from "./svg-components/Morning";
import Evening from "./svg-components/Evening";
import Calender from "./svg-components/Calender";
import Clock from "./svg-components/Clock";
import Address from "./svg-components/Address";
import { TextField } from "@mui/material";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useData } from "@/context/context";

const radioData = [
  { value: "2023-12-15", label: "15", body: "Today" },
  { value: "2023-12-16", label: "16", body: "Tomorrow" },
  { value: "2023-12-18", label: "18", body: "Monday" },
  { value: "2023-12-17", label: "17", body: "Sunday" },
];

const IsHomeCollection = () => {
  const { cartState, cartDispatch } = useData();
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  useEffect(() => {
    // console.log("Selected Date:", selectedDate);
    // console.log("Selected Time:", selectedTime);

    // Create a new Date object using the selected date and time
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

    // // Log the selectedDateTime for debugging
    // console.log("Selected DateTime:", selectedDateTime);

    // // Format the date and time in the desired format (2020-05-05T11:30:00Z)
    // // const formattedDateTime = selectedDateTime.toISOString();

    // // Log the formattedDateTime for debugging
    // console.log("Formatted DateTime:", selectedDateTime);
  }, [setSelectedDate, setSelectedTime]);

  const [formData, setFormData] = useState({
    city: "",
    pincode: "",
    state: "",
    address: "",
    isHomecollection: 1,
  });
  // console.log("this si the form data ", formData);

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error when the user starts typing in a field
    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
    if (name === "dateSelection") {
      setSelectedDate(value);
    } else if (name === "timeSlot") {
      // Set time based on the selected slot
      setSelectedTime(value === "morning" ? "10:00" : "16:00");
    }
  };

  const validateForm = () => {
    // Basic validation example, add more as needed
    const errors = {};

    if (!formData.mobile) {
      errors.mobile = "Mobile is required";
    }
    // Add more validation checks for other fields

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleFormSubmit = () => {
    // Extract only the desired fields from formData
    const { address, pincode, city, state } = formData;

    // Create a new Date object using the selected date and time
    const selectedDateTime = new Date(`${selectedDate}T${selectedTime}`);

    // Format the date and time in the desired format (2020-05-05T11:30:00Z)
    const formattedDateTime = `${selectedDateTime.getFullYear()}-${(
      selectedDateTime.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}-${selectedDateTime
      .getDate()
      .toString()
      .padStart(2, "0")}T${selectedDateTime
      .getHours()
      .toString()
      .padStart(2, "0")}:${selectedDateTime
      .getMinutes()
      .toString()
      .padStart(2, "0")}:00Z`;
    // console.log(formattedDateTime);

    // Create a new object with the extracted fields and formatted date/time
    const updatedData = {
      address,
      pincode,
      city,
      state,
      homeCollectionDateTime: formattedDateTime,
      isHomecollection: 1,
      // add more fields as needed
    };

    // Dispatch the action with the updated data
    // Replace 'cartDispatch' with your actual dispatch function and action type
    cartDispatch({
      type: "UPDATE_USER_ADDRESS",
      userAddres: updatedData,
    });

    // console.log("data is submitted");
  };
  // console.log("this is the data from th context", cartState.userData);

  return (
    <>
      <div className="home_collection_data">
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
                    {radioData.map((item, index) => (
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
                    required
                    id="standard-required"
                    variant="standard"
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
                    required
                    id="standard-required"
                    variant="standard"
                    label="pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={(e) =>
                      handleInputChange("pincode", e.target.value)
                    }
                  />
                  <TextField
                    className=" mx-3 col-3"
                    required
                    variant="standard"
                    id="standard-required"
                    label="city"
                    name="city"
                    value={formData.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                  />
                  {/* ... (your existing JSX code) */}
                  <TextField
                    required
                    label="state"
                    name="state"
                    variant="standard"
                    value={formData.state}
                    onChange={(e) => handleInputChange("state", e.target.value)}
                  />
                </div>
              </article>
              <button type="button" className="btn" onClick={handleFormSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsHomeCollection;
