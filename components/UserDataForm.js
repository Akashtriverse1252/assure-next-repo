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
  // console.log(cartState.userData);
  // console.log(cartState.userAddres);
  // console.log(cartState.products);

  // const submitBookingData = async (userData, userAddress, userProduct) => {
  //   e.preventDefault();
  //   try {
  //     const apiUrl =
  //       "http://assure.triverseadvertising.com/api/booking_submit_api.php";

  //     const jsonData = {
  //       fullName: userData.name,
  //       age: userData.age,
  //       gender: userData.gender,
  //       address: userAddress.address,
  //       pincode: userAddress.pincode,
  //       city: userAddress.city,
  //       state: userAddress.state,
  //       homeCollectionDateTime: userAddress.homeCollectionDateTime,
  //       isHomecollection: userAddress.isHomecollection,
  //       totalAmount: userProduct.Test_Amount, // <-- Reference to 'product' is not defined
  //       advance: 0,
  //       organizationIdLH: 324559,
  //       testID: 3992066,
  //       testCode: 3992066,
  //       integrationCode: "-",
  //       dictionaryId: "-",
  //     };

  //     const response = await axios.post(apiUrl, jsonData);

  //     if (response.data && response.data.code === 200) {
  //       // Handle success
  //       console.log("Booking submitted successfully!");
  //     } else {
  //       // Handle API request failure
  //       console.error(
  //         "API request failed. Error message:",
  //         response.data.Message
  //       );
  //     }
  //   } catch (error) {
  //     // Handle other errors
  //     console.error("Error submitting booking data:", error.message);

  //     // Log the detailed error information if available
  //     if (error.response) {
  //       console.error("Response data:", error.response.data);
  //       console.error("Response status:", error.response.status);
  //       console.error("Response headers:", error.response.headers);
  //     }
  //   }
  // };

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

    // console.log(userData);
    // console.log(userAddress);
    // console.log(userProduct);
    try {
      const apiUrl =
        "https://www.assurepathlabs.com/api/algos/booking_submit_api.php";
      console.log("API URL:", apiUrl);
      const apiData = {
        fullName: userData.name,
        age: userData.age,
        gender: userData.gender,
        address: userAddress.address,
        pincode: userAddress.pincode,
        city: userAddress.city,
        state: userAddress.state,
        homeCollectionDateTime: userAddress.homeCollectionDateTime,
        isHomecollection: userAddress.isHomecollection,
        totalAmount: userProduct.Test_Amount, // <-- Reference to 'product' is not defined
        advance: 0,
        organizationIdLH: 324559,
        testID: 3992066,
        testCode: 3992066,
        integrationCode: "-",
        dictionaryId: "-",
      };
      console.log("this is the api datas", apiData);

      const response = await axios.post(apiUrl, apiData);

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

  // Example calling function
  const handleSubmit = async (e) => {
    try {
      await submitBookingData(
        cartState.userData,
        cartState.userAddres,
        cartState.products
      );
      // Additional logic after successful form submission
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
      console.error("Error in form submission:", error);
    }
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
                  <form>
                    <UserDetail />
                    <HomeCollectionData />
                  </form>
                  <button type="submit" className="btn" onClick={handleSubmit}>
                    Submit the data
                  </button>

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
