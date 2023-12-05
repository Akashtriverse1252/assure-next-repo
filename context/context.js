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
    const savedProductIds = Cookies.get("cart");
    // console.log(savedProductIds);
    if (savedProductIds) {
      // Fetch real-time data from the API using the stored product IDs
      fetchDataFromApi(savedProductIds);
    }
  }, []);

  const fetchDataFromApi = async (productIds) => {

      try {
        // Replace this with your actual API endpoint
        // const response = await fetch(`your-api-endpoint`);
        // const testData = await response.json();
  
        // Filter the test_data array based on the stored product IDs
        const filteredProducts = testData.test_data.filter(
          (product) => product.id && productIds.includes(product.id.toString())
        );
        const saveCartProduct = filteredProducts.map((product) => {
          const _discount = product?.Test_Amount
            ? (
                ((product.Test_Amount - product.Discount_Amount) /
                  product.Test_Amount) *
                100
              ).toFixed()
            : 0;
  
          return {
            id: product.id,
            name: product.Test_Name,
            price: product.Test_Amount,
            dis_price: product.Discount_Amount,
            quantity: 1,
            discount: _discount,
          };
        });

      cartDispatch({ type: "INIT", products: saveCartProduct });

      console.log("Real-time data fetched from API:", filteredProducts);
    } catch (error) {
      console.error("Error fetching real-time data:", error);
    }
  };

  const updateCookies = (products) => {
    // Log both the ID and Quantity of each product
    const cookiesProducts = products.map((product) => ({
      id: product.id,
      quantity: product.quantity,
    }));
    console.log("this si the cookies producr", cookiesProducts)

    Cookies.set("cart", JSON.stringify(cookiesProducts), {
      expires: 365,
    });
  };

  useEffect(() => {
    // Update cookies whenever the cart products change
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
