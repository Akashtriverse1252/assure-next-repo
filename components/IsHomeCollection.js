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

const radioData = [
  { value: "2023-12-15", label: "15", body: "Today" },
  { value: "2023-12-16", label: "16", body: "Tomorrow" },
  { value: "2023-12-18", label: "18", body: "Monday" },
  { value: "2023-12-17", label: "17", body: "Sunday" },
];

const IsHomeCollection = () => {
  const [selectedValue, setSelectedValue] = useState(radioData[0]?.value);

  useEffect(() => {
    // Add your client-side logic here
    // For example, handling changes in selected radio button
  }, [selectedValue]);

  const [date, setData] = useState({
    selectedDate: "", // Store the selected date here
    timeSlot: "", // Store the selected time slot here
  });
  const [formData, setFormData] = useState({
    mobile: "",
    email: "",
    designation: "",
    fullName: "",
    age: 0,
    gender: "",
    area: "",
    city: "",
    patientType: "",
    labPatientId: "",
    pincode: "",
    dob: "",
    nationality: "",
    ethnicity: "",
    location: "",
    address: "",
    // Add more fields as needed
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear validation error when the user starts typing in a field
    setValidationErrors({
      ...validationErrors,
      [name]: "",
    });
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
    if (validateForm()) {
      // Dispatch the action to update the context state with the form data
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: formData,
      });

      // Additional logic as needed
    }
  };

  const handleDateChange = (e) => {
    setFormData({
      ...formData,
      selectedDate: e.target.value,
    });
  };

  const handleTimeSlotChange = (e) => {
    setFormData({
      ...date,
      timeSlot: e.target.id,
    });
  };

  const handleSubmit = () => {
    // Concatenate the selected date and time slot
    const selectedOutput = `${date.selectedDate} - ${date.timeSlot}`;
    console.log(selectedOutput);
    // Perform any other actions with the concatenated output
  };
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
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    className="hcd_date_seection"
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
                            name=""
                            id={`radio${index}`}
                          />
                          <span className="radio-btn" >
                            <i className="las la-check">
                              <IoCheckmarkCircleSharp />
                            </i>
                            <div className="hobbies-icon">
                              <div className="slot-option">
                                <span className="day-picker-month ">Dec</span>
                                <span className="day-picker-day ">
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
                <div className="col-12 d-flex justify-content-between">
                  <TextField
                    className=" mx-3"
                    required
                    id="standard-required"
                    variant="standard"
                    label="Address line 1"
                    name="name"
                    fullWidth="true"
                  />
                  <TextField
                    className=" mx-3"
                    fullWidth="true"
                    required
                    id="standard-required"
                    variant="standard"
                    label="Address line 2"
                    name="phoneNumber"
                  />
                  <TextField
                    fullWidth="true"
                    className=" mx-3"
                    required
                    label="Land Mark"
                    name="dob"
                    variant="standard"
                  />
                </div>
                <div className="col-8 mt-5 d-flex justify-content-between">
                  <TextField
                    className=" mx-3 col-3"
                    required
                    id="standard-required"
                    variant="standard"
                    label="pincode"
                    name="name"
                  />
                  <TextField
                    className=" mx-3 col-3"
                    required
                    id="standard-required"
                    variant="standard"
                    label="city"
                    name="city"
                  />
                  <TextField
                    fullWidth="true"
                    required
                    label="state"
                    name="dob"
                    variant="standard"
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
