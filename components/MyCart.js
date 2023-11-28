"use client";

import React from "react";
import Cart from "./Cart";
import { useData } from "@/context/context";
import { LuShoppingCart } from "react-icons/lu";

export const MyCart = () => {
  const { cartState, cartDispatch } = useData();

  // Calculate the total quantity using cartState
    let totalQuantity = 0;
    for (const product of cartState.products) {
      totalQuantity += product.quantity;
    }
  // console.log(cartState.products);
  const handleToggleCart = () => {
    cartDispatch({ type: "TOGGLE_CART" });
  };

  return (
    <>
      <div className="position-relative">
        <span
          className="button button--aylen button--round-l button--text-thick my-cart"
          onClick={handleToggleCart}
        >
          <LuShoppingCart className=" " />
          Cart
        </span>
        {!totalQuantity == 0 ? (
          <i className="my-cart_cnt">{totalQuantity}</i>
        ) : null}
        {/* Use totalQuantity here */}
      </div>
    </>
  );
};
