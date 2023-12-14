"use client";
import { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import ProductDetail from "@/components/ProductDetail ";
import UserDataForm from "@/components/UserDataForm";
import SuccessMessage from "@/components/SuccessMessage";

// import styles from "./Page.module.css"; // Import your CSS module

const steps = ["Product Detail", "User Data", "Success"];

const Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    productDetail: {},
    userData: {},
  });

  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrevStep = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleFormData = (data) => {
    setFormData({
      ...formData,
      ...data,
    });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <ProductDetail
            onNextStep={handleNextStep}
            onFormData={handleFormData}
          />
        );
      case 1:
        return (
          <UserDataForm
            onPrevStep={handlePrevStep}
            onNextStep={handleNextStep}
            onFormData={handleFormData}
          />
        );
      case 2:
        return <SuccessMessage data={formData} />;
      default:
        return "Unknown step";
    }
  };

  return (
    <>
      <Box position="relative">
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {getStepContent(activeStep)}
    </>
  );
};

export default Page;
