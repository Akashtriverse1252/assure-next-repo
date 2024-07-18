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
      <div className="add_item text-center gap-3">
        <span>Your cart is empty</span>
        <p>Add Test/ Packages to your cart</p>
        <div className=" ">
          <Link
            className="cnt_shp_btn button col-12 button--aylen button--round-l button--text-thick text-uppercase gradient mt-3 "
            onClick={isOpen}
            href="/individual-test"
          >
            Add Test/ Packages
          </Link>
        </div>
      </div>
    </>
  );
};

export default EmptyCart;
