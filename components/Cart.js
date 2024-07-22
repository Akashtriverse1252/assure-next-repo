"use client";

import { useData } from "@/context/context";
import React, { Fragment, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RiCloseFill, RiDeleteBinLine } from "react-icons/ri";
import { LuX } from "react-icons/lu";
import EmptyCart from "./EmptyCart";
import Link from "next/link";

export default function Cart() {
  const { cartState, cartDispatch } = useData(); // Access cart state and dispatch from CartContext
  // console.log("this si the cart data" , cartState.products)

  // Function to convert string numbers to actual numbers
  const convertToNumber = (value) => {
    return parseFloat(value);
  };
  // console.log("cart is empty ", cartState.products.length == 0)

  // Calculate subtotal, totalDiscount, and discountedPrice
  const calculateTotals = (products) => {
    let subtotal = 0;
    let totalDiscount = 0;
    let totalFinalPrice = 0;

    if (Array.isArray(products) && products.length > 0) {
      products.forEach((product) => {
        const price = convertToNumber(product.price);
        const quantity = convertToNumber(product.quantity);
        const disPrice = convertToNumber(product.dis_price);

        subtotal += price * quantity;
        totalFinalPrice += disPrice * quantity;
      });
    }

    totalDiscount = subtotal - totalFinalPrice;

    return { subtotal, totalDiscount, totalFinalPrice };
  };
  const { subtotal, totalDiscount, totalFinalPrice } = calculateTotals(
    cartState.products
  );

  const handleIncrement = (product) => {
    cartDispatch({ type: "INCREMENT", productId: product.id });
  };
  const handleDecrement = (product) => {
    cartDispatch({ type: "DECREMENT", productId: product.id });
  };
  const handleRemove = (product) => {
    cartDispatch({ type: "REMOVE", productId: product.id });
  };
  const isOpen = () => {
    cartDispatch({ type: "TOGGLE_CART" });
  };

  return (
    <Fragment>
      <>
        <div
          className={`_cart fixed-top inset-0 overflow-hidden ${
            cartState.cartVisible ? "__visible " : null
          }`}
        >
          <div className="h-100 absolute-top inset-0 overflow-hidden _shadow">
            <div className="h-100 cart_container ">
              <div className="d-flex flex-column h-100 bg-white shadow-xl">
                <div className="flex-grow-1 cart_lisiting_area overflow-auto px-sm-4 py-6 px-6">
                  <div className="_cart_header d-flex justify-content-between align-items-center flex-row-reverse ">
                    <div className="ml-3 d-flex h-7 align-items-center">
                      <button
                        type="button"
                        className=" _cart_back_icon"
                        onClick={isOpen}
                      >
                        <RiCloseFill />
                      </button>
                    </div>
                    <div className="_cart_heading">My Cart</div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      {cartState.products.length === 0 ? (
                        <div className="empty_cart col-12 d-flex justify-content-center flex-column align-items-center">
                          <EmptyCart />
                        </div>
                      ) : null}

                      <ul className="list-unstyled _cart_test ">
                        {cartState.products.map((product) => (
                          <li
                            key={product.id}
                            className="_cart_list d-flex  position-relative"
                          >
                            <div className="ml-4 d-flex flex-column flex-grow-1">
                              <div>
                                <div className="_cart_test_detail d-flex justify-content-between text-base font-medium text-gray-900">
                                  <span>{product.name}</span>

                                  <button
                                    type="button"
                                    className="btn _cart_cross"
                                    onClick={() => handleRemove(product)}
                                  >
                                    <RiDeleteBinLine />
                                  </button>
                                </div>
                                {/* <p className="cart_itam_qnt">
                                  Quantity:{" "}
                                  <button
                                    type="button"
                                    className="btn px-2 py-0"
                                    onClick={() => handleDecrement(product)}
                                  >
                                    -
                                  </button>
                                  <span className="px-1 px-sm-0 ">
                                    {product.quantity}
                                  </span>
                                  <button
                                    type="button"
                                    className="btn px-2 py-0"
                                    onClick={() => handleIncrement(product)}
                                  >
                                    +
                                  </button>
                                </p> */}
                                <p className="mt-sm-1 text-sm text-gray-500 cart_dis">
                                  Discount: <strong>{product.discount}%</strong>
                                </p>
                              </div>
                              <div className="org_price d-flex flex-grow-1 align-items-end justify-content-between text-sm">
                                <p className="text-gray-500">
                                  Original Price:{" "}
                                  <span className="font-weight-600">
                                    {product.price}
                                  </span>
                                </p>

                                <div className="d-flex dis_price">
                                  <p className="ml-4">{product.dis_price}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {cartState.products && cartState.products.length > 0 && (
                  <div className="border-top border-gray-200 px-sm-4 px-0 py-6 sm:px-6">
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Subtotal</p>
                      <p className="mb-0 rupee">{subtotal.toFixed(2)}</p>
                    </div>
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Total Discount</p>
                      <p className="mb-0 rupee">{totalDiscount.toFixed(2)}</p>
                    </div>
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Subtotal After Discount</p>{" "}
                      {/* Updated label */}
                      <p className="mb-0 rupee">
                        <p className="mb-0 rupee">
                          {totalFinalPrice.toFixed(2)}
                        </p>
                      </p>{" "}
                      {/* Updated variable name */}
                    </div>

                    <div className="mt-sm-6 mt-2  cart_btn">
                      <Link
                        href="/check-out"
                        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                        className="button button--aylen button--round-l button--text-thick mt-sm-3"
                      >
                        Checkout
                      </Link>
                    </div>
                    <div className="mt-sm-6 mt-2 mb-2 d-flex justify-content-center text-center text-sm text-gray-500">
                      <Link
                        className="cnt_shp_btn textbtn"
                        onClick={isOpen}
                        href="/individual-test"
                      >
                        Add Test/Packages
                        {/* <span aria-hidden="true"> &rarr;</span> */}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </Fragment>
  );
}
