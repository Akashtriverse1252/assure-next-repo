"use client";

import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { FaCheck } from "react-icons/fa6";
import { Female } from "./svg-components/Female";
import Image from "next/image";
import { OtherGender } from "./svg-components/OtherGender";
import { useData } from "@/context/context";

export const UserDetail = () => {
  const { cartState, cartDispatch } = useData();
  const [userData, setUserData] = useState({
    designation: "",
    name: "",
    phoneNumber: "",
    email: " ",
    dob: "",
    age: "",
    gender: "",
  });

  // Function to calculate age based on date of birth
  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    return age;
  };

  // Handle form field changes
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

  // Handle radio button changes
  const handleGenderChange = (e) => {
    setUserData((prevData) => ({
      ...prevData,
      gender: e.target.id,
    }));
  };

  // Use useEffect to log the state whenever it changes
  useEffect(() => {
    cartDispatch({
      type: "UPDATE_USER_DATA",
      userData: userData,
    });
    // You can perform additional actions here, such as sending data to a server.
  }, [userData]);

  return (
    <>
      <div className="col-12 d-flex justify-content-between">
        <TextField
          type="text"
          className="col-3 mx-3"
          required
          id="standard-required"
          defaultValue="Name"
          variant="standard"
          label="Name"
          name="name"
          value={userData.name}
          onChange={handleChange}
        />
        <TextField
          type="tel"
          className="col-3 mx-3"
          required
          id="standard-required"
          defaultValue="Contact Number"
          variant="standard"
          label="Contact Number"
          name="phoneNumber"
          value={userData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          className="col-3 mx-3"
          required
          label="Date of Birth"
          type="date"
          name="dob"
          variant="standard"
          value={userData.dob}
          onChange={handleChange}
          InputLabelProps={{ shrink: true }}
        />
      </div>
      <div className="container">
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
            <span className="radio-btn">
              <i className="las la-check">
                <FaCheck />
              </i>
              <div className="hobbies-icon">
                <Image
                  src="/consultant.png"
                  alt=""
                  title="Dr. Sanjay Wadhwa"
                  width="120"
                  height="120"
                />
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
            />
            <span className="radio-btn">
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
            <span className="radio-btn">
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
    </>
  );
};
