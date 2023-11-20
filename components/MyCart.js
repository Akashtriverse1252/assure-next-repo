import React from "react";
import Cart from "./Cart";
import { useCart } from "@/context/context";

export const MyCart = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const { cartState, cartDispatch } = useCart();

  // Calculate the total quantity using cartState
  let totalQuantity = 0;
  for (const product of cartState.products) { 
    totalQuantity += product.quantity;
  }
  console.log(cartState.products);

  return (
    <>
      {isCartOpen ? <Cart /> : null}
      <div className="position-relative">
        <span
          className="button button--aylen button--round-l button--text-thick my-cart"
          onClick={() => {
            setIsCartOpen(!isCartOpen);
          }}
        >   
          My Cart
        </span>
        {!totalQuantity == 0 ? (
          <i className="my-cart_cnt">{totalQuantity}</i>
        ) : null}
        {/* Use totalQuantity here */}
      </div>
    </>
  );
};
