"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import { Call } from "./svg-components/Call";
import { WhatsApp } from "./svg-components/WhatsApp";

export const Homecollection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });

  const [isErrorOpen, setIsErrorOpen] = useState(false); // New state to manage error Snackbar

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      // Update age when dob changes
      const age = calculateAge(value);
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
        age: age,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Check if the name field is empty or has less than 3 characters
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Check if the name field has a minimum length of 3 characters
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name should have a minimum length of 3 characters";
      isValid = false;
    }

    // Check if the phoneNumber field is empty or has an invalid format
    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone Number number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Invalid Phone Number number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      // Check if the email format is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
    }

    // Update the component state with the new error messages
    setErrors(newErrors);

    // Return the overall validity of the form
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Make the API call to submit the data
      fetch("https://www.assurepathlabs.com/api/algos/request_a_call_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((response) => response.json())
        .then((data) => {
          setIsSubmitting(false);
          if (data.success) {
            setShowThankYou(true);
            onStateChange(true);
            // Reset the form fields by setting the form data to an empty object
            setFormData({
              name: "",
              email: "",
              mobile: "",
            });
          } else {
            // Handle server errors here and display an error message to the user.
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Error:", error);
          // Handle network errors here and display an error message to the user.
        });
    } else {
      setIsErrorOpen(true);
      console.log("Form validation failed:", errors);
    }
  };
  const handleCloseError = () => {
    setIsErrorOpen(false);
  };

  return (
    <>
      <div className="enquireform col-12 float-start">
        <div className={styles.equireheading}>
          <h2>
            <span className="pb-md-2">BOOK HOME COLLECTION</span>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            required
            id="standard-required"
            defaultValue="Name"
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            fullWidth
            className={`styles.inputmodified input-field `}
          />
          <TextField
            type="tel"
            required
            id="standard-required"
            defaultValue="Contact Number"
            variant="outlined"
            label="Contact Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            error={errors.phoneNumber}
            fullWidth
            className={`styles.inputmodified input-field `}
          />
          <TextField
            name="email"
            defaultValue=""
            label="Email"
            variant="outlined"
            className={`styles.inputmodified input-field `}
            fullWidth
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            error={errors.email}
          />
          <button
            type="submit"
            className="col-12 col-md-12 mx-md-auto button button--aylen button--round-l button--text-thick"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "SUBMIT"}
          </button>
        </form>
        <div className="col-12 float-start cta flex-center justify-content-center">
          <div className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 whatsapp">
            <WhatsApp /> <p>WhatsApp</p>
          </div>
          <div className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 call">
            <Call /> <p>Call</p>
          </div>
        </div>
      </div>

      <Stack spacing={2} sx={{ width: "100%" }}>
        {Object.values(errors).some((error) => error !== "") && (
          <Snackbar
            open={isErrorOpen}
            autoHideDuration={400000}
            onClose={handleCloseError}
          >
            <Alert
              onClose={handleCloseError}
              severity="error"
              sx={{ width: "100%" }}
            >
              {Object.values(errors).map(
                (error, index) => error !== "" && <div key={index}>{error}</div>
              )}
            </Alert>
          </Snackbar>
        )}
      </Stack>
    </>
  );
};
