import React, { useState } from "react";
import styles from "../app/page.module.css";
import { TextField } from "@mui/material";
import { Call } from "./svg-components/Call";
import { WhatsApp } from "./svg-components/WhatsApp";

export const Homecollection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.mobile.trim() === "") {
      newErrors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      // Regular expression to validate email format
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
    }

    setErrors(newErrors);
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
      console.log("Form validation failed:", errors);
    }
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
            label="Name"
            variant="outlined"
            className={`styles.inputmodified input-field ${
              errors.name ? "error-input" : formData.name ? "input-filled" : ""
            }`}
            fullWidth
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            error={errors.name}
          />
          <TextField
            label="Mobile Number"
            variant="outlined"
            className={`styles.inputmodified input-field ${
              errors.mobile
                ? "error-input"
                : formData.mobile
                ? "input-filled"
                : ""
            }`}
            fullWidth
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Mobile"
            error={errors.mobile}
          />
          <TextField
            label="Email"
            variant="outlined"
            className={`styles.inputmodified input-field ${
              errors.email
                ? "error-input"
                : formData.email
                ? "input-filled"
                : ""
            }`}
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
        {/* <div className="col-12 float-start cta flex-center justify-content-center">
          <span className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 whatsapp">
            <WhatsApp /> <p>WhatsApp</p>
          </span>
          <span className="col-lg-5 col-xs-6 col-12 grid-center text-center gap-1 call">
            <Call /> <p>Call</p>
          </span>
        </div> */}
      </div>
    </>
  );
};
