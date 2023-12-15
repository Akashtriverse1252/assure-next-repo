import React, { useState } from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { TextField } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import GenderRadiobutton from "./GenderRadiobutton";
import {HomeCollectionData} from "./HomeCollectionData";

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const [userData, setUserData] = useState({
    name: "",
    phoneNumber: "",
    dob: "",
    gender: "",
  });

  const handlePrev = () => {
    // Handle any other actions if needed
    onPrevStep();
  };

  const handleNext = () => {
    // Handle form validation or other actions if needed
    // For simplicity, directly moving to the next step
    onNextStep();
    // Pass the collected user data to the parent component
    onFormData({ userData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <section className="position-relative">
        <div className="gradient-layer"></div>
        <div className="container">
          <div className="web-container">
            <div className="row gap-sm-3 gap-md-0  ">
              <div className="col-10 mx-auto">
                <h3>
                  <strong>User Details</strong>
                </h3>
                <form>
                  <div className="col-12 d-flex justify-content-between">
                    <TextField
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
                  <GenderRadiobutton />
                  <HomeCollectionData/>
                </form>
                <div className="nav_button mt-5 col-12 d-flex justify-content-between">
                  <div className=" mt-3  row text-right">
                    <button
                      className="edit_cart button button--wayra pull-right red tab3"
                      onClick={handlePrev}
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
                {/* <button onClick={handlePrev}>Previous</button>
                <button onClick={handleNext}>Next</button> */}
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
