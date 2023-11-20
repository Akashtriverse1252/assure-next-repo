"use client";

import { useCart } from "@/context/context";
import React, { Fragment, useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export default function page() {
  const [open, setOpen] = useState(true);
  const { cartState, cartDispatch } = useCart(); // Access cart state and dispatch from CartContext
  const { cart, incrementQuantity } = useCart();
  // Function to convert string numbers to actual numbers
  const convertToNumber = (value) => {
    return parseFloat(value);
  };

  // Calculate subtotal, totalDiscount, and discountedPrice
  const calculateTotals = () => {
    let subtotal = 0;
    let totalDiscount = 0;

    if (cartState.products && cartState.products.length > 0) {
      cartState.products.forEach((product) => {
        const price = convertToNumber(product.price);
        const quantity = convertToNumber(product.quantity);
        const discount = convertToNumber(product.discount);

        subtotal += price * quantity;
        totalDiscount += (price * quantity * discount) / 100;
      });
    }

    const discountedPrice = subtotal - totalDiscount;

    return { subtotal, totalDiscount, discountedPrice };
  };

  const { subtotal, totalDiscount, discountedPrice } = calculateTotals();

  const handleIncrement = (product) => {
    cartDispatch({ type: "INCREMENT", productId: product.id });
  };
  const handleDecrement = (product) => {
    cartDispatch({ type: "DECREMENT", productId: product.id });
  };
  const handleRemove = (product) => {
    cartDispatch({ type: "REMOVE", productId: product.id });
  };

  return (
    <Fragment>
      {open && (
        <div>
          <div className="_cart fixed-top inset-0 overflow-hidden">
            <div className="h-100 absolute-top inset-0 overflow-hidden _shadow">
              <div className="h-100 ">
                <div className="d-flex flex-column h-100 bg-white shadow-xl">
                  <div className="flex-grow-1 overflow-auto px-4 py-6 sm:px-6">
                    <div className="_cart_header d-flex justify-content-between align-items-center">
                      <div className="ml-3 d-flex h-7 align-items-center">
                        <button
                          type="button"
                          className="btn _cart_back_icon"
                          onClick={() => setOpen(false)}
                        >
                          <IoIosArrowRoundBack className="" />
                        </button>
                      </div>
                      <div className="_cart_heading">My Cart</div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul className="list-unstyled _cart_test">
                          {cartState.products.map((product) => (
                            <li
                              key={product.id}
                              className="_cart_list d-flex  position-relative"
                            >
                              <div className="ml-4 d-flex flex-column flex-grow-1">
                                <div>
                                  <div className="_cart_test_detail d-flex justify-content-between text-base font-medium text-gray-900">
                                    <h5>{product.name}</h5>

                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() => handleRemove(product)}
                                    >
                                      <MdOutlineRemoveShoppingCart />
                                    </button>
                                  </div>
                                  <p className="cart_itam_qnt">
                                    Quantity:{" "}
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() => handleDecrement(product)}
                                    >
                                      -
                                    </button>
                                    <span>{product.quantity}</span>
                                    <button
                                      type="button"
                                      className="btn"
                                      onClick={() => handleIncrement(product)}
                                    >
                                      +
                                    </button>
                                  </p>
                                  <p className="my-1 text-sm text-gray-500">
                                    Discount: {product.discount}%
                                  </p>
                                </div>
                                <div className="org_price d-flex flex-grow-1 align-items-end justify-content-between text-sm">
                                  <p className="text-gray-500">
                                    Original Price: <span>{product.price}</span>
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

                  <div className="border-top border-gray-200 px-4 py-6 sm:px-6">
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Subtotal</p>
                      <p className="mb-0 rupee">{subtotal.toFixed(2)}</p>
                    </div>
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Total Discount</p>
                      <p className="mb-0 rupee">{totalDiscount.toFixed(2)}</p>
                    </div>
                    <div className="sub_total d-flex justify-content-between text-base font-medium text-gray-900">
                      <p className="mb-0">Discounted Price</p>
                      <p className="mb-0 rupee">{discountedPrice.toFixed(2)}</p>
                    </div>
                    <div className="mt-6 cart_btn">
                      <a
                        href="#"
                        className="button button--aylen button--round-l button--text-thick mt-3"
                      >
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 mb-2 d-flex justify-content-center text-center text-sm text-gray-500">
                      <button
                        type="button"
                        className="cnt_shp_btn textbtn"
                        onClick={() => setOpen(false)}
                      >
                        Continue Search
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
