"use client";
import React, { useState } from "react";
import styles from "../app/page.module.css";
import { Alert, Snackbar, TextField } from "@mui/material";
import { Call } from "./svg-components/Call";
import { WhatsApp } from "./svg-components/WhatsApp";
import { useAlert } from "@/context/AlerterContext";
import Link from "next/link";

export const Homecollection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
  });
  const { showAlert } = useAlert();
  const [redirectTo, setRedirectTo] = useState(null);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
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

    if (formData.name.trim() === "") {
      showAlert("Failure", "Name is required", "error");
      newErrors.name = true;
      isValid = false;
    } else if (formData.name.trim().length < 3) {
      showAlert(
        "Failure",
        "Name should have a minimum length of 3 characters",
        "error"
      );
      newErrors.name = true;
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      showAlert("Failure", "Phone Number is required", "error");
      newErrors.phone = true;
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      showAlert(
        "Failure",
        "Invalid Phone Number format (should be 10 digits)",
        "error"
      );
      newErrors.phone = true;
      isValid = false;
    }

    if (formData.email.trim() === "") {
      showAlert("Failure", "Email is required", "error");
      newErrors.email = true;
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showAlert("Failure", "Invalid email format", "error");
        newErrors.email = true;
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch("https://triverseadvertising.com/assure_website/api/algos/booking_submit_api.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response;
        console.log("this is the data", data);

        setIsSubmitting(false);
        if (data.status === 201) {
          if (typeof window !== "undefined") {
            window.location.href = "/enquiry-submitted";
          }
          showAlert("Success", "Our team will contact you soon", "success");
          setFormData({
            name: "",
            phone: "",
            email: "",
          });
        } else {
          showAlert(
            "Failure",
            "Error in submitting inquiry, contact us on call or email",
            "error"
          );
          console.error("Server response indicates failure:", data);
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error during fetch:", error);
      }
    } else {
      setIsErrorOpen(true);
    }
  };

  const handleCloseError = () => {
    setIsErrorOpen(false);
  };
  const generateAOSAttributes = (index, baseDelay = 150, step = 30) => {
    const delay = baseDelay + index * step;
    return {
      "data-aos": "fade-up",
      "data-aos-delay": delay,
      "data-aos-duration": 200,
      "data-aos-once": true,
      "data-aos-offset": delay,
      "data-aos-easing": "cubic-bezier(.57,.21,.69,3.25)",
    };
  };

  return (
    <>
      <div className="enquireform col-12 mx-auto">
        <div className={styles.equireheading}>
          <article className="col-12 mx-auto">
            <span className="pb-md-2 ">BOOK HOME COLLECTION</span>
          </article>
        </div>
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            required
            id="name"
            variant="outlined"
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            fullWidth
            autoComplete="username"
            className={`styles.inputmodified input-field `}
          />
          <TextField
            type="tel"
            required
            id="phone_number"
            variant="outlined"
            label="Contact Number"
            autoComplete="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
            fullWidth
            className={`styles.inputmodified input-field `}
          />
          <TextField
            name="email"
            label="Email"
            autoComplete="email"
            variant="outlined"
            required
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
          <div className="col-lg-5 col-xs-6 col-6 grid-center text-center text-black gap-1 whatsapp">
            <Link href="https://api.whatsapp.com/send/?phone=%2B919716664040&text=Hello%21+assurepathlabs.com%2C+I+am+looking+for+Support.&type=phone_number&app_absent=0">
              <WhatsApp /> <p className="text-black">WhatsApp</p>
            </Link>
          </div>
          <div className="col-lg-5 col-xs-6 col-6 grid-center text-center text-black gap-1 call">
            <Link href="tel:0181-4667555">
              <Call /> <p className="text-black">Call</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
