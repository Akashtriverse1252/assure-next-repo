import React from "react";
import EmptyCartBg from "./svg-components/EmptyCartBg";
import EmptyCartIcon from "./svg-components/EmptyCartIcon";
import Link from "next/link";
import { useData } from "@/context/context";

const EmptyCart = () => {
  const { cartState, cartDispatch } = useData();
  const isOpen = () => {
    cartDispatch({ type: "TOGGLE_CART" });

  };
  return (
    <>
      <div className="empty-cart-animation">
        <EmptyCartBg />
        <span className="empty-cart">
          <EmptyCartIcon />
        </span>
      </div>
      <div className="add_item text-center">
        <span>Your cart is empty.</span>
        <p>Add item to your cart</p>
        <div className=" ">
                      <Link
                        className="cnt_shp_btn button COL-12 button--aylen button--round-l button--text-thick text-uppercase gradient "
                        onClick={isOpen}
                        href="/individual-test"
                      >
                        Add Test/ Packages
                        {/* <span aria-hidden="true"> &rarr;</span> */}
                      </Link>
                    </div>
      </div>
    </>
  );
};

export default EmptyCart;
