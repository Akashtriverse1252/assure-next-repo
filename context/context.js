"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";
import Cookies from "js-cookie";

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
    const savedCart = JSON.parse(Cookies.get("cart") || "[]");
    if (savedCart) {
      cartDispatch({ type: "INIT", products: savedCart });
      console.log("Data loaded from cookies:", savedCart);
    } else {
      console.log("No saved data found in cookies.");
    }
  }, []);

  useEffect(() => {
    // Store the cart in cookies with an expiration of 365 days
    Cookies.set("cart", JSON.stringify(cartState.products), { expires: 365 });
    console.log("Data saved to cookies:", cartState.products);
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
