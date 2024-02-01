"use client";
import React, { useState } from "react";
import {
  CircularProgress,
  Box,
  TextField,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong, FaCheck } from "react-icons/fa6";
import axios from "axios";
import { useData } from "@/context/context";
import { validateUserData, validateUserAddress } from "@/context/Validation";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { HomeCollectionData } from "@/components//HomeCollectionData";
import { Female } from "@/components/svg-components/Female";
import Image from "next/image";
import { OtherGender } from "@/components/svg-components/OtherGender";
import { Male } from "@/components/svg-components/Male";
import IsHomeCollection from "@/components/IsHomeCollection";
import homecollection from "@/components/svg-components/homecollection.svg";
import microscope from "@/components/svg-components/microscope.svg";
import { useAlert } from "@/context/AlerterContext";

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const { cartState, cartDispatch } = useData();
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  //   Data state
  const [userAddress, setUserAddress] = useState({
    isHomecollection: 1,
    address: "",
    pincode: "",
    city: "",
    state: "",
  });
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    age: "",
    gender: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    age: "",
    gender: "",
    isHomecollection: "",
    address: "",
    pincode: "",
    city: "",
    state: "",
  });
  const { showAlert } = useAlert();

  //   Validation
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (userData.name.trim() === "") {
      showAlert("Failure", "Name is required", "error");
      newErrors.name = true;
      isValid = false;
    } else if (userData.name.trim().length < 3) {
      showAlert(
        "Failure",
        "Name should have a minimum length of 3 characters",
        "error"
      );
      newErrors.name = true;
      isValid = false;
    }

    if (userData.phoneNumber.trim() === "") {
      showAlert("Failure", "Phone Number is required", "error");
      newErrors.phoneNumber = true;
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(userData.phoneNumber)) {
      showAlert(
        "Failure",
        "Invalid Phone Number format (should be 10 digits)",
        "error"
      );
      newErrors.phoneNumber = true;
      isValid = false;
    }

    // Check if the email field is empty
    // if (userData.email.trim() === "") {
    //   showAlert("Failure", "Email is required", "error");
    //   newErrors.email = true;
    //   isValid = false;
    // } else {
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(userData.email)) {
    //     showAlert("Failure", "Invalid email format", "error");
    //     newErrors.email = true;
    //     isValid = false;
    //   }
    // }

    // Check if the date of birth field is empty
    if (userData.dob.trim() === "") {
      showAlert("Failure", "Date of birth is required", "error");
      newErrors.dob = true;
      isValid = false;
    }

    // Check if the gender field is empty
    if (userData.gender.trim() === "") {
      showAlert("Failure", "Gender is required", "error");
      newErrors.gender = true;
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  //   handllers

  const handleHomeColData = (formData) => {
    // console.log("Home collection data received in parent:", formData);
    setUserAddress(formData);
  };

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();

    const age = currentDate.getFullYear() - birthDate.getFullYear();

    if (age >= 0 && age <= 150) {
      return age;
    } else {
      const wrongAgeError = {
        designation: "Enter the correct Date of birth",
      };
      setErrors(wrongAgeError);
      return 0;
    }
  };

  const handleRadioChange = (event) => {
    setSelectedPlan(event.target.id);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      // Update age when dob changes
      const age = calculateAge(value);
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
        age: age,
      }));
    } else {
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     if (validateForm()) {
  //       console.log("Form Data:", userData);
  //       console.log("user Address:", userAddress);
  //     }
  //   };

  const handlePrev = () => {
    onPrevStep();
  };

  const handleNext = (e) => {
    // onNextStep();
    e.preventDefault();
    handleSubmit(e);
  };
  const handleGenderChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      gender: e.target.id,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl =
        "https://www.assurepathlabs.com/api/algos/booking_submit_api.php";

      const apiData = {
        fullName: userData.name,
        age: userData.age,
        gender: userData.gender,
        // Only include user address if isHomecollection is 1
        // ...(userAddress.isHomecollection === 1 && {
        address: userAddress.address,
        pincode: userAddress.pincode,
        city: userAddress.city,
        state: userAddress.state,
        homeCollectionDateTime: userAddress.homeCollectionDateTime,
        // }),
        isHomecollection: userAddress.isHomecollection,
        totalAmount: 1205, // <-- Reference to 'product' is not defined
        advance: 0,
        organizationIdLH: 324559,
        testID: 3992066,
        testCode: 3992066,
        integrationCode: "-",
        dictionaryId: "-",
      };
      // console.log(apiData);

      const response = await axios.post(apiUrl, apiData);

      if (response.data && response.data.code === 200) {
        console.log("Booking submitted successfully!");
      } else {
        console.error(
          "API request failed. Error message:",
          response.data.Message
        );
      }
    } catch (error) {
      console.error("Error submitting booking data:", error.message);

      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      }
      throw error; // rethrow the error to propagate it
    }
  };

  return (
    <>
      <section className="position-relative">
        <div className="gradient-layer"></div>
        <div className="container">
          <div className="web-container">
            <div className="row gap-sm-3 gap-md-0  ">
              <div className="col-11 col-md-10 mx-auto">
                <h3>
                  <strong>User Details</strong>
                </h3>
                <form onSubmit={handleSubmit} noValidate>
                  <div className="user_details">
                    <div className="col-12 d-flex justify-content-between flex-column flex-md-row checkout_input">
                      <TextField
                        type="text"
                        className="col-md-3 col-10 mx-md-3"
                        // required
                        id="standard-required"
                        defaultValue="Name"
                        variant="standard"
                        label="Name"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        error={errors.name}
                      />
                      <TextField
                        type="tel"
                        className="col-md-3 col-10 mx-md-3"
                        // required
                        id="standard-required"
                        defaultValue="Contact Number"
                        variant="standard"
                        label="Contact Number"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        error={errors.phoneNumber}
                      />
                      <TextField
                        className="col-md-3 col-10 mx-md-3"
                        // required
                        label="Date of Birth"
                        type="date"
                        name="dob"
                        variant="standard"
                        value={userData.dob}
                        onChange={handleChange}
                        InputLabelProps={{ shrink: true }}
                        error={errors.dob}
                      />
                    </div>
                    <div className="radio-buttons">
                      <div className="title">Choose your Gender</div>
                      <label className="custom-radio" htmlFor="male">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          checked={userData.gender === "male"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={` radio-btn ${
                            errors.gender ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            <Male />
                            <h3 className="">Male</h3>
                          </div>
                        </span>
                      </label>
                      <label className="custom-radio" htmlFor="female">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          checked={userData.gender === "female"}
                          onChange={handleGenderChange}
                          error={errors.gender}
                        />
                        <span
                          className={` radio-btn ${
                            errors.gender ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            <Female />
                            <h3 className="">Female</h3>
                          </div>
                        </span>
                      </label>
                      <label className="custom-radio" htmlFor="other">
                        <input
                          type="radio"
                          name="gender"
                          id="other"
                          checked={userData.gender === "other"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={` radio-btn ${
                            errors.gender ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            <OtherGender />
                            <h3 className="">Other</h3>
                          </div>
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="plans">
                    <div className="title">Choose Test Type</div>
                    <div className="plans_selection">
                      <label className="plan basic-plan" for="Home_collection">
                        <input
                          type="radio"
                          name="plan"
                          id="Home_collection"
                          checked={selectedPlan === "Home_collection"}
                          onChange={handleRadioChange}
                        />
                        <div className="plan-content">
                          <Image
                            loading="lazy"
                            src={homecollection}
                            alt=""
                            width={72}
                            height={72}
                          />
                          <div className="plan-details">
                            <span>Home Collection</span>
                            <p>
                              For smaller business, with simple salaries and pay
                              schedules.
                            </p>
                          </div>
                        </div>
                      </label>

                      <label className="plan complete-plan" for="Walk-in">
                        <input
                          type="radio"
                          id="Walk-in"
                          name="plan"
                          checked={selectedPlan === "Walk-in"}
                          onChange={handleRadioChange}
                        />
                        <div className="plan-content">
                          <Image
                            loading="lazy"
                            src={microscope}
                            alt=""
                            height={72}
                            width={72}
                          />
                          <div className="plan-details">
                            <span>Walk In</span>
                            <p>
                              For growing business who wants to create a
                              rewarding place to work.
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>
                  </div>
                  <Accordion
                    expanded={selectedPlan === "Home_collection"}
                    className="shadow-none isHomeCollection"
                  >
                    <AccordionSummary
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      className="d-none shadow-none"
                    ></AccordionSummary>
                    <AccordionDetails className="shadow-none p-0">
                      <IsHomeCollection HomeColData={handleHomeColData} />
                    </AccordionDetails>
                  </Accordion>
                  {/* <button
                    className="edit_cart button button--wayra pull-right red tab3"
                    type="submit"
                  >
                    Proceed
                    <FaArrowRightLong className="m-2" />
                  </button> */}
                </form>
                <div className="nav_button mt-5 col-12 d-flex justify-content-between">
                  <div className=" mt-3  row text-right">
                    <button
                      className="edit_cart button button--wayra pull-right red tab3"
                      onClick={handlePrev}
                      type="submit"
                    >
                      <FaArrowLeftLong className="m-2" />
                      Check Cart
                    </button>
                  </div>
                  <div className=" mt-3  row text-right">
                    <button
                      className="edit_cart button button--wayra pull-right red tab3"
                      onClick={handleNext}
                    >
                      Proceed
                      <FaArrowRightLong className="m-2" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10" />
        <Line className="svgwidthline position-absolute opacity-10" />
      </section>
    </>
  );
};

export default UserDataForm;
