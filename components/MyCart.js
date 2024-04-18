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
    if (!cartState.cartVisible) {
      cartDispatch({ type: "TOGGLE_CART" });
      // console.log("is cart is open", cartState.TOOGLE_CART);
    }
  };

  return (
    <>
      <div className="position-relative">
        <div
          className="upload_btn pl-2 ___cart"
          disabled={cartState.cartVisible}
          onClick={handleToggleCart}
        >
          <div
            className="upload_btn_cnt user"
            style={{
              background: "#e5e4f4",
            }}
          >
            <LuShoppingCart className=" " />
          </div>
        </div>

        {!totalQuantity == 0 ? (
          <i
            className={`my-cart_cnt ${
              totalQuantity > 10 ? "mycart_qty_high" : ""
            }`}
          >
            {" "}
            {totalQuantity <= 10 ? totalQuantity : "9+"}

          </i>
        ) : null}
      </div>
    </>
  );
};
