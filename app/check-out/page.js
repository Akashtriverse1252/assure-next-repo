"use client";

import { useState } from "react";
import { Box, Stepper, Step, StepLabel } from "@mui/material";
import ProductDetail from "@/components/ProductDetail ";
import UserDataForm from "@/components/UserDataForm";
import SuccessMessage from "@/components/SuccessMessage";

const steps = ["Cart Detail", "User Detail", "Success"];

const Page = () => {
  const [activeStep, setActiveStep] = useState(1);
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

  return (
    <>
      <div className="check_out">
        <Box sx={{ marginTop: 2, marginBottom: 2 }}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Box>
        <div className="check_out_cnt">
          {activeStep === 0 && (
            <ProductDetail
              onNextStep={handleNextStep}
              onFormData={handleFormData}
            />
          )}
          {activeStep === 1 && (
            <UserDataForm
              onPrevStep={handlePrevStep}
              onNextStep={handleNextStep}
              onFormData={handleFormData}
            />
          )}
          {activeStep === 2 && <SuccessMessage data={formData} />}
        </div>
      </div>
    </>
  );
};

export default Page;
