import React, { useEffect, useState } from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { Box, CircularProgress, TextField } from "@mui/material";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HomeCollectionData } from "./HomeCollectionData";
import { FaCheck } from "react-icons/fa6";
import { Female } from "./svg-components/Female";
import Image from "next/image";
import { OtherGender } from "./svg-components/OtherGender";
import { UserDetail } from "./UserDetail";
import { useData } from "@/context/context";
import axios from "axios";
import { validateUserData, validateUserAddress } from "@/context/Validation";

const UserDataForm = ({ onPrevStep, onNextStep, onFormData }) => {
  const { cartState, cartDispatch } = useData();
  const [loading, setLoading] = useState(false);

  const submitBookingData = async (userData, userAddress, userProduct) => {
    setLoading(true);
    // console.log(userData);
    // // Validate user data
    // const userDataValidationResult = validateUserData(userData);

    // console.log("this is the validation ", userDataValidationResult);
    // if (userDataValidationResult == null) {
    //   console.error("User data validation error:", userDataValidationResult);
    //   console.log("user data is validated");
    //   // You might want to notify the user about the validation error
    // } else {
    //   console.log("user data is invalidated");
    // }

    // // Validate user address
    // console.log(userAddress);
    // const userAddressValidationResult = validateUserAddress(userAddress);
    // console.error("adress data validation error:", userAddressValidationResult);
    // if (userAddressValidationResult) {
    //   console.error(
    //     "User address validation error:",
    //     userAddressValidationResult
    //   );
    //   console.log("address data is validated");
    //   // You might want to notify the user about the validation error
    // } else {
    //   console.log("address data is invalidated");
    // }

    try {
      const apiUrl =
        "https://www.assurepathlabs.com/api/algos/booking_submit_api.php";
      console.log("API URL:", apiUrl);
      console.log(userData.name);

      const response = await axios.post(apiUrl, {
        fullName: "Kjsasaf",
        age: 24,
        gender: "male",
        address: "skhefgjegnnkajshkabg",
        pincode: 2820101,
        city: "noida",
        state: "up",
        homeCollectionDateTime: "2023-12-18T08:00:00",
        isHomecollection: true,
        totalAmount: 500,
        advance: 0,
        organizationIdLH: 324559,
        testID: 3992066,
        testCode: 3992066,
        integrationCode: "-",
        dictionaryId: "-",
        // fullName: userData.name,
        // age: userData.age,
        // gender: userData.gender,
        // address: userAddress.address,
        // pincode: userAddress.pincode,
        // city: userAddress.city,
        // state: userAddress.state,
        // homeCollectionDateTime: userAddress.homeCollectionDateTime,
        // isHomecollection: userAddress.isHomecollection,
        // totalAmount: product.Test_Amount,
        // advance: 0,
        // organizationIdLH: 324559,
        // testID: 3992066,
        // testCode: 3992066,
        // integrationCode: "-",
        // dictionaryId: "-",
      });

      console.log("Response Status:", response.status);

      if (response.status >= 200 && response.status < 300) {
        const responseData = response.data;
        console.log("Response from the server:", responseData);
        // Handle the response as needed
      } else {
        console.error("API request failed with status:", response.status);
        // Handle non-successful response (4xx, 5xx, etc.) here
      }
    } catch (error) {
      console.error("Error submitting booking data:", error);

      if (error.response) {
        // The request was made, but the server responded with a status code
        // that falls out of the range of 2xx
        console.error(
          "Server responded with error status:",
          error.response.status
        );
        console.log("Response data:", error.response.data);
        console.log("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error("No response received from the server");
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error in setting up the request:", error.message);
      }
      // Handle errors gracefully
    } finally {
      // Set loading back to false when the API request completes (either success or failure)
      setLoading(false);
    }
  };
  const handleButtonClick = () => {
    submitBookingData();
  };
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

  return (
    <>
      {loading ? (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      ) : (
        <section className="position-relative">
          <div className="gradient-layer"></div>
          <div className="container">
            <div className="web-container">
              <div className="row gap-sm-3 gap-md-0  ">
                <div className="col-10 mx-auto">
                  <h3>
                    <strong>User Details</strong>
                  </h3>
                  <form onSubmit={handleButtonClick}>
                    <UserDetail />
                    <HomeCollectionData />
                    <button
                      type="submit"
                      className="btn"
                      onClick={handleButtonClick}
                    >
                      Submit the data
                    </button>
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
      )}
    </>
  );
};

export default UserDataForm;
