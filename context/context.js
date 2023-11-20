"use client";

import React, { createContext, useContext, useEffect, useReducer } from "react";

// Create a context for the cart
const CartContext = createContext();

// Define the initial state for the cart
const initialState = {
  products: [
    // {
    //   id: 1,
    //   name: "PLEURAL FLUID ANALYSIS",
    //   price: 300,
    //   quantity: 2,
    //   discount: 10,
    // },
    // {
    //   id: 2,
    //   name: "COMPLETE BLOOD COUNT",
    //   price: 220,
    //   quantity: 3,
    //   discount: 15,
    // },
  ],
  removedProducts: [], // Initialize an array for removed products
};

// Define the actions for the cart
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
    default:
      return state;
  }
};

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  // Load cart data from local storage when the component mounts
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      cartDispatch({ type: "INIT", products: savedCart });
    }
  }, []);

  // Save cart data to local storage whenever the cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartState.products));
  }, [cartState.products]);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the cart context
const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
