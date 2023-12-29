"use client"
import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";
import { useData } from "@/context/context";
import { Rupees } from "./svg-components/Rupees";
import { FiShoppingCart } from "react-icons/fi";  
import { PiShoppingCartSimple, PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";

const ProductDetail = ({ onNextStep, onFormData }) => {
  const [productData, setProductData] = useState([]);
  const { cartState, cartDispatch } = useData();

  useEffect(() => {
    setProductData(cartState.products);
  }, [cartState.products]);

  // console.log("this is the data", cartState.products);
  const calculateSubtotal = () => {
    return productData.reduce((total, product) => {
      return total + product.quantity * product.price;
    }, 0);
  };

  const handleNext = () => {
    // Handle form validation or other actions if needed
    // For simplicity, directly moving to the next step
    onNextStep();
  };

  return (
    <section className="position-relative">
      <div className="container">
        <div className="web-container">
          <div className="row">
            <div className="col-md-12 col-12">
              <div className="title col-12 float-start text-center">
                <h4 className="grid-center lh-1">PRODUCT DETAILS</h4>
              </div>
              <div>
                <div className="formpatient tablecenter">
                  <TableContainer component={Paper}>
                    <Table className="">
                      <TableHead>
                        <TableRow>
                          <TableCell className="redcolor">S No.</TableCell>
                          <TableCell>Package/Test Name</TableCell>
                          <TableCell>Unit Price ()</TableCell>
                          <TableCell>Discount</TableCell>
                          <TableCell>Quantity</TableCell>
                          <TableCell>Price</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {productData.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="redcolor">
                              {index + 1}
                            </TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>
                              <Rupees />
                              {product.quantity * product.price}
                              {/* {unitPrice} */}
                            </TableCell>
                            <TableCell>{product.discount}%</TableCell>
                            <TableCell>{product.quantity}</TableCell>
                            <TableCell className="bluecolor">
                              <Rupees />
                              {product.quantity * product.dis_price}
                            </TableCell>
                          </TableRow>
                        ))}
                        <TableRow>
                          <TableCell
                            colSpan={5}
                            className="px-4 text-lg"
                          >
                            Subtotal
                          </TableCell>
                          <TableCell className="bluecolor redcolor">
                            <Rupees />
                            {calculateSubtotal()}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>

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
                        className="edit_cart button button--wayra pull-right red tab3"
                        onClick={handleNext}
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
