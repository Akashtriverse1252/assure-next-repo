"use client";
import React, { useState, useEffect } from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { useData } from "@/context/context";
import { Rupees } from "./svg-components/Rupees";
import { FiShoppingCart } from "react-icons/fi";
import { FaArrowRightLong } from "react-icons/fa6";
import Bin from "./svg-components/Bin";
import { useAlert } from "@/context/AlerterContext";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductDetail = ({ onNextStep, onFormData }) => {
  const [productData, setProductData] = useState([]);
  const { cartState, cartDispatch } = useData();
  const { showAlert } = useAlert();
  const [isProductAvailable, setIsProductAvailable] = useState(true); // State to track if products are available

  useEffect(() => {
    setProductData(cartState.products);
    // Check if there are any products
    setIsProductAvailable(cartState.products.length > 0);
  }, [cartState.products]);

  const calculateSubtotal = () => {
    return productData.reduce((total, product) => {
      return total + product.quantity * product.dis_price;
    }, 0);
  };

  const handleRemove = (product) => {
    cartDispatch({ type: "REMOVE", productId: product.id });
  };

  const handleNext = () => {
    if (isProductAvailable) {
      onNextStep();
    } else {
      showAlert("Error", "Please add a product to proceed", "error");
    }
  };

  return (
    <section className="position-relative">
      <div className="container">
        <div className="web-container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="title col-12 float-start text-center">
                <h4 className="grid-center fw-bolder">PRODUCT DETAILS</h4>
              </div>
              <div>
                <div className="formpatient tablecenter">
                  <table>
                    {/* <caption>Product Details</caption> */}
                    <thead>
                      <tr>
                        <th>S No.</th>
                        <th>Package/Test Name</th>
                        <th>Unit Price</th>
                        <th>Discount</th>
                        {/* <th>Quantity</th> */}
                        <th>Price</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.map((product, index) => (
                        <tr key={index}>
                          <td data-label="S No.">{index + 1}</td>
                          <td
                            data-label="Package/Test Name"
                            className="text-start"
                          >
                            {product.name}
                          </td>
                          <td data-label="Unit Price">
                            <Rupees />
                            {product.quantity * product.price}
                          </td>
                          <td data-label="Discount">
                            <strong>{product.discount}%</strong>
                          </td>
                          {/* <td data-label="Quantity">{product.quantity}</td> */}
                          <td data-label="Price">
                            <Rupees />
                            {product.quantity * product.dis_price}
                          </td>
                          <td
                            className="cart-detail-page-bin"
                            data-label=""
                            onClick={() => handleRemove(product)}
                          >
                            <RiDeleteBinLine />
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td
                          colSpan={4}
                          className="px-4 text-lg text-start"
                          data-label="Subtotal"
                        >
                          SUBTOTAL
                        </td>
                        <td
                          colSpan={2}
                          className="bluecolor redcolor"
                          data-label="Price"
                        >
                          <Rupees />
                          {calculateSubtotal()}
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="d-flex gap-5 justify-content-end">
                    <div className=" mt-3  row text-right">
                      <button
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={() => cartDispatch({ type: "TOGGLE_CART" })}
                      >
                        <FiShoppingCart className="m-2" />
                        Edit Cart
                      </button>
                    </div>
                    <div className=" mt-3  row text-right">
                      <button
                        className={`edit_cart button button--wayra pull-right red tab3 ${
                          !isProductAvailable && "disabled" // Disable button if no products are available
                        }`}
                        onClick={handleNext}
                        // disabled={!isProductAvailable} // Disable button if no products are available
                      >
                        Proceed
                        <FaArrowRightLong className="m-2" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Dots className="hsection position-absolute svgwidth opacity-10 end-0 left-inherit" />
      <Line className="svgwidthline position-absolute opacity-10 bottom-0 start-0" />
    </section>
  );
};

export default ProductDetail;
