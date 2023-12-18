"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import testData from "../Data/test_data.json";
import { validateUserData, validateUserAddress } from "./validation";

const CartContext = createContext();

const initialState = {
  isInputNotEmpty: false,
  uploadFormVisible: false,
  cartVisible: false,
  products: [],
  removedProducts: [],
  userData: {
    designation: "",
    name: "",
    phoneNumber: "",
    email: "",
    dob: "",
    age: 0,
    gender: "",
  },
  userAddres: {
    address: "",
    pincode: "",
    city: "",
    state: "",
    homeCollectionDateTime: "",
  },
};

const updateCookies = (products) => {
  const cookiesProducts = products.map(({ id, quantity }) => ({
    id,
    quantity,
  }));

  Cookies.set("cart", JSON.stringify(cookiesProducts), {
    expires: 365,
  });
  // console.log("This is the cookies product", cookiesProducts);
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        ),
      };
    case "DECREMENT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.productId && product.quantity > 1
            ? { ...product, quantity: product.quantity - 1 }
            : product
        ),
      };
    case "REMOVE":
      const removedProduct = state.products.find(
        (product) => product.id === action.productId
      );
      if (removedProduct) {
        const updatedState = {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.productId
          ),
          removedProducts: [...state.removedProducts, removedProduct],
        };

        updateCookies(updatedState.products); // Update cookies immediately

        return updatedState;
      }
      return state;
    case "UNDO_REMOVE":
      const restoredProduct = state.removedProducts.find(
        (product) => product.id === action.productId
      );
      if (restoredProduct) {
        return {
          ...state,
          products: [...state.products, restoredProduct],
          removedProducts: state.removedProducts.filter(
            (product) => product.id !== action.productId
          ),
        };
      }
      return state;
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.product],
      };
    case "TOGGLE_CART":
      return {
        ...state,
        cartVisible: !state.cartVisible,
      };
    case "TOGGLE_UPLOD_FORM":
      return {
        ...state,
        uploadFormVisible: !state.uploadFormVisible,
      };
    case "TOOGLE_INPUT_DATA":
      return {
        ...state,
        isInputNotEmpty: action.payload,
      };
    case "INIT":
      return {
        ...state,
        products: action.products,
      };
    case "UPDATE_USER_DATA":
      return {
        ...state,
        userData: {
          ...state.userData,
          ...action.userData,
        },
      };
    case "UPDATE_USER_ADDRESS":
      return {
        ...state,
        userAddres: {
          ...state.userAddres,
          ...action.userAddres,
        },
      };
    default:
      return state;
  }
};
const submitBookingData = async (userData, userAddress, userProduct) => {
  console.log(userData);
  // Validate user data
  const userDataValidationResult = validateUserData(userData);

  console.log("this is the validation ", userDataValidationResult);
  if (userDataValidationResult == null) {
    console.error("User data validation error:", userDataValidationResult);
    console.log("user data is validated");
    // You might want to notify the user about the validation error
  } else {
    console.log("user data is invalidated");
  }

  // Validate user address
  console.log(userAddress);
  const userAddressValidationResult = validateUserAddress(userAddress);
  console.error("adress data validation error:", userAddressValidationResult);
  if (userAddressValidationResult) {
    console.error(
      "User address validation error:",
      userAddressValidationResult
    );
    console.log("address data is validated");
    // You might want to notify the user about the validation error
  } else {
    console.log("address data is invalidated");
  }

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
  }
};

const GlobalDataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedProducts = Cookies.get("cart");
    const savedUserData = Cookies.get("userData");
    const savedUserAddress = Cookies.get("userData");
    console.log("this is the data from the cookies", savedUserData);
    console.log("this is the address od the user", savedUserAddress);

    const fetchDataFromApi = async (savedProducts) => {
      try {
        const foundProducts = testData.test_data.filter((product) => {
          return savedProducts.some(
            (savedProduct) => savedProduct.id === product.id
          );
        });

        // console.log("found products", foundProducts);

        const saveCartProducts = foundProducts.map((product) => {
          const savedProduct = savedProducts.find((sp) => sp.id === product.id);
          const quantity = savedProduct ? savedProduct.quantity : 1;

          return {
            id: product.id,
            name: product.Test_Name,
            price: product.Test_Amount,
            dis_price: product.Discount_Amount,
            quantity: quantity,
            discount: (
              ((product.Test_Amount - product.Discount_Amount) /
                product.Test_Amount) *
                100 || 0
            ).toFixed(),
          };
        });

        cartDispatch({ type: "INIT", products: saveCartProducts });

        // console.log("Real-time data fetched from API:", saveCartProducts);
      } catch (error) {
        console.error("Error fetching real-time data:", error);
      }
    };

    if (savedProducts) {
      fetchDataFromApi(JSON.parse(savedProducts));
    }
    if (savedUserData) {
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: JSON.parse(savedUserData),
      });
    }
    if (savedUserAddress) {
      cartDispatch({
        type: "UPDATE_USER_DATA",
        userData: JSON.parse(savedUserAddress),
      });
    }
  }, []);

  useEffect(() => {
    updateCookies(cartState.products);
  }, [cartState.products]);

  useEffect(() => {
    updateCookies(cartState.products);
    Cookies.set("userData", JSON.stringify(cartState.userData), {
      expires: 365,
    });
  }, [cartState.products, cartState.userData]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useData = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useData must be used within a GlobalDataProvider");
  }
  return context;
};

export { GlobalDataProvider, useData, updateCookies, submitBookingData };
