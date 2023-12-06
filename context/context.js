"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";
import testData from "../Data/test_data.json";

const CartContext = createContext();

const initialState = {
  uploadFormVisible: false,
  cartVisible: false,
  products: [],
  removedProducts: [],
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
        return {
          ...state,
          products: state.products.filter(
            (product) => product.id !== action.productId
          ),
          removedProducts: [...state.removedProducts, removedProduct],
        };
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
    case "INIT":
      return {
        ...state,
        products: action.products,
      };
    default:
      return state;
  }
};

const GlobalDataProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const savedProducts = Cookies.get("cart");
    console.log("this is the data from the cookies", savedProducts);

    const fetchDataFromApi = async (savedProducts) => {
      try {
        // Replace this with your actual API endpoint
        // const response = await fetch(`your-api-endpoint`);
        // const testData = await response.json();

        // Assuming testData is available globally or imported
        const foundProducts = testData.test_data.filter((product) => {
          // Check if the product ID is included in the savedProducts array
          return savedProducts.some(
            (savedProduct) => savedProduct.id === product.id
          );
        });

        console.log("found products", foundProducts);

        const saveCartProducts = foundProducts.map((product) => ({
          id: product.id,
          name: product.Test_Name,
          price: product.Test_Amount,
          dis_price: product.Discount_Amount,
          quantity: 1, // You may want to set the quantity based on the savedProducts data
          discount: (
            ((product.Test_Amount - product.Discount_Amount) /
              product.Test_Amount) *
              100 || 0
          ).toFixed(),
        }));

        cartDispatch({ type: "INIT", products: saveCartProducts });

        console.log("Real-time data fetched from API:", saveCartProducts);
      } catch (error) {
        console.error("Error fetching real-time data:", error);
      }
    };

    if (savedProducts) {
      fetchDataFromApi(JSON.parse(savedProducts));
    }
  }, []);

  const updateCookies = (products) => {
    const cookiesProducts = products.map(({ id, quantity }) => ({
      id,
      quantity,
    }));

    Cookies.set("cart", JSON.stringify(cookiesProducts), {
      expires: 365,
    });
    console.log("This is the cookies product", cookiesProducts);
  };

  useEffect(() => {
    updateCookies(cartState.products);
  }, [cartState.products]);

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

export { GlobalDataProvider, useData };
