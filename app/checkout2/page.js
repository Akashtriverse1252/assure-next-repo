"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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
  const { showAlert } = useAlert();

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(3, "Name should have a minimum length of 3 characters"),
    phoneNumber: Yup.string()
      .required("Phone Number is required")
      .matches(
        /^[0-9]{10}$/,
        "Invalid Phone Number format (should be 10 digits)"
      ),
    dob: Yup.string().required("Date of birth is required"),
    gender: Yup.string().required("Gender is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNumber: "",
      dob: "",
      age: "",
      gender: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // Handle form submission
      try {
        // ... existing handleSubmit logic ...
      } catch (error) {
        console.error("Error submitting booking data:", error.message);
        // ... handle errors ...
      }
    },
  });

  const handleHomeColData = (formData) => {
    formik.setFieldValue("isHomecollection", formData.isHomecollection);
    formik.setFieldValue("address", formData.address);
    formik.setFieldValue("pincode", formData.pincode);
    formik.setFieldValue("city", formData.city);
    formik.setFieldValue("state", formData.state);
    formik.setFieldValue(
      "homeCollectionDateTime",
      formData.homeCollectionDateTime
    );
  };

  const handleRadioChange = (event) => {
    formik.setFieldValue("selectedPlan", event.target.id);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      // Update age when dob changes
      const age = calculateAge(value);
      formik.setFieldValue("age", age);
    }

    formik.handleChange(e);
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

  const handleGenderChange = (e) => {
    formik.setFieldValue("gender", e.target.id);
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
                <form onSubmit={formik.handleSubmit} noValidate>
                  <div className="user_details">
                    <div className="col-12 d-flex justify-content-between flex-column flex-md-row checkout_input">
                      <TextField
                        type="text"
                        className="col-md-3 col-10 mx-md-3"
                        variant="standard"
                        label="Name"
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                      />
                      <TextField
                        type="tel"
                        className="col-md-3 col-10 mx-md-3"
                        variant="standard"
                        label="Contact Number"
                        name="phoneNumber"
                        value={formik.values.phoneNumber}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.phoneNumber &&
                          Boolean(formik.errors.phoneNumber)
                        }
                        helperText={
                          formik.touched.phoneNumber &&
                          formik.errors.phoneNumber
                        }
                      />
                      <TextField
                        className="col-md-3 col-10 mx-md-3"
                        label="Date of Birth"
                        type="date"
                        name="dob"
                        variant="standard"
                        value={formik.values.dob}
                        onChange={formik.handleChange}
                        InputLabelProps={{ shrink: true }}
                        error={formik.touched.dob && Boolean(formik.errors.dob)}
                        helperText={formik.touched.dob && formik.errors.dob}
                      />
                    </div>
                    <div className="radio-buttons">
                      <div className="title">Choose your Gender</div>
                      <label className="custom-radio" htmlFor="male">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          checked={formik.values.gender === "male"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.gender ? "input_error" : ""
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
                          checked={formik.values.gender === "female"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.gender ? "input_error" : ""
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
                          checked={formik.values.gender === "other"}
                          onChange={handleGenderChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.gender ? "input_error" : ""
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
                      <label className="custom-radio" htmlFor="Home_collection">
                        <input
                          type="radio"
                          name="plan"
                          id="Home_collection"
                          checked={formik.values.plan === "Home_collection"}
                          onChange={handleRadioChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.plan ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            {/* <HomeCollection /> */}
                            <h3 className="">Home Collection</h3>
                          </div>
                        </span>
                      </label>

                      <label
                        className="custom-radio"
                        htmlFor="Office_collection"
                      >
                        <input
                          type="radio"
                          name="plan"
                          id="Office_collection"
                          checked={formik.values.plan === "Office_collection"}
                          onChange={handleRadioChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.plan ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            {/* <OfficeCollection /> */}
                            <h3 className="">Office Collection</h3>
                          </div>
                        </span>
                      </label>

                      <label className="custom-radio" htmlFor="Both_collection">
                        <input
                          type="radio"
                          name="plan"
                          id="Both_collection"
                          checked={formik.values.plan === "Both_collection"}
                          onChange={handleRadioChange}
                        />
                        <span
                          className={`radio-btn ${
                            formik.errors.plan ? "input_error" : ""
                          }`}
                        >
                          <i className="las la-check">
                            <FaCheck />
                          </i>
                          <div className="hobbies-icon">
                            {/* <BothCollection /> */}
                            <h3 className="">Both Collection</h3>
                          </div>
                        </span>
                      </label>
                    </div>
                  </div>
                  <Accordion
                    expanded={formik.values.selectedPlan === "Home_collection"}
                    className="shadow-none isHomeCollection"
                  >
                    {/* ... existing Accordion code ... */}
                    <AccordionDetails className="shadow-none p-0">
                      <IsHomeCollection HomeColData={handleHomeColData} />
                    </AccordionDetails>
                  </Accordion>
                  <div className="nav_button mt-5 col-12 d-flex justify-content-between">
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={onPrevStep}
                        type="button"
                      >
                        <FaArrowLeftLong className="m-2" />
                        Check Cart
                      </button>
                    </div>
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={formik.handleSubmit}
                        type="button"
                      >
                        Proceed
                        <FaArrowRightLong className="m-2" />
                      </button>
                    </div>
                  </div>
                </form>
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
