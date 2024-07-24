"use client";

import React, { useEffect, useState } from "react";
import { Rupees } from "./svg-components/Rupees";
import { Cart } from "./svg-components/Cart";
import Bin from "./svg-components/Bin";
import NoData from "./svg-components/NoData";
import DNALoader from "./svg-components/DNALoader";
import { useData } from "@/context/context";
import data from "../Data/test_data.json";
import { Faq } from "./Faq";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Helmet } from "react-helmet";
import { AccordionComponent } from "@/components/Accordian";
import { ChooseAssure } from "@/components/ChooseAssure";
import { useAlert } from "@/context/AlerterContext";

export const Test_details_logic = ({ Slug, Category }) => {
  const router = useRouter();
  const { cartState, cartDispatch } = useData();
  const [isInCart, setIsInCart] = useState(false);
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { showAlert } = useAlert();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://triverseadvertising.com/assure_website/api/algos/fetch_details.php?category=${Category}&slug=${Slug}&hits=1`
        );

        const data = await response.json();
        setProject(data.test_data[0]);
        if (data.test_data.length === 0) {
          showAlert("info", "no data is found", "info");
        }
      } catch (error) {
        showAlert("Error", "network Error", "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [Slug]);
  const _discount = project?.Test_Amount
    ? (
        ((project.Test_Amount - project.Discount_Amount) /
          project.Test_Amount) *
        100
      ).toFixed()
    : 0;
  const cartIds = cartState.products.map((cartproduct) => cartproduct.id);

  const handleToggleCart = () => {
    if (cartIds.includes(project.id)) {
      // Remove product from cart logic here
      cartDispatch({ type: "REMOVE", productId: project.id });
    } else {
      // Add product to cart logic here
      const product = {
        id: project.id,
        name: project.Test_Name,
        price: project.Test_Amount,
        dis_price: project.Discount_Amount,
        quantity: 1,
        discount: _discount,
      };
      const existingProduct = cartState.products.find(
        (p) => p.id === product.id
      );

      if (existingProduct) {
        // If the product exists, update its quantity
        // cartDispatch({
        //   type: "INCREMENT",
        //   productId: product.id,
        // });
      } else {
        // If the product doesn't exist, add it to the cart
        cartDispatch({
          type: "ADD_TO_CART",
          product,
        });
      }
      if (!cartState.cartVisible) {
        cartDispatch({ type: "TOGGLE_CART" });
      }
    }

    // Toggle the state to update the button text and functionality
    setIsInCart(!isInCart);
  };
  const handleBookHomeCollectionClick = () => {
    if (cartIds.includes(project.id)) {
      // Redirect to checkout page
      router.push("/check-out");
    } else {
      // Add product to cart logic here
      const product = {
        id: project.id,
        name: project.Test_Name,
        price: project.Test_Amount,
        dis_price: project.Discount_Amount,
        quantity: 1,
        discount: _discount,
      };

      cartDispatch({
        type: "ADD_TO_CART",
        product,
      });
      // }

      // Redirect to checkout page
      router.push("/check-out");
    }
  };

  const metaDescription = `Book the ${project?.Test_Name} package now and save up to ${_discount}% with our exclusive offer. Discover vital health insights today.`;
  // const metaDescription = `Book the ${
  //   project?.Test_Name
  // } package now and save up to ${_discount}% with our exclusive offer. This package includes vital health parameters like ${project?.TestInfo?.map(
  //   (param) => param.Parameter_Name
  // ).join(", ")}.`;

  return (
    <>
      <Helmet>
        <title>{`Book a ${
          project?.Test_Name.charAt(0).toUpperCase() +
          project?.Test_Name.slice(1).toLowerCase()
        } | Assure Pathlabs`}</title>
        <meta name="description" content={metaDescription} />
        <link
          rel="canonical"
          href={`https://www.assurepathlabs.com/${
            Category == "test" ? "all-test" : "packages"
          }/${Slug}`}
        />
        <meta
          property="og:url"
          href={`https://www.assurepathlabs.com/${
            Category == "test" ? "all-test" : "packages"
          }/${Slug}`}
        />
        <link
          rel="canonical"
          href={`https://www.assurepathlabs.com/${
            Category == "test" ? "all-test" : "packages"
          }/${Slug}`}
        />{" "}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`Book a ${project?.Test_Name}`} />
        <meta name="og:description" content={metaDescription} />
      </Helmet>
      {loading ? (
        <div className="_loader_cnt col-12 d-flex justify-content-center">
          <div className="_loader"></div>
        </div>
      ) : // <>
      //   <DNALoader />
      // </>
      project ? (
        <>
          <div
            className="row"
            data-aos="fade-up"
            data-aos-duration={500}
            data-aos-once="true"
          >
            <div className="title col-12 float-start text-center">
              <h1>{project.Test_Name}</h1>
              {/* {!project.Test_Category ? (
                  <>
                  </>
                ) : (
                  <h2>{project.Test_Category}-test</h2>
                )} */}
            </div>
            <div className="col-lg-11 m-auto col-12 float-start grey-background pt-4 px-0">
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <h2>
                      <strong>Package Name</strong>
                    </h2>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12">
                    <p>
                      <strong>{project.Test_Name}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <h2>
                      <strong>About Package</strong>
                    </h2>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12">
                    <p>{project.Test_Description}</p>
                  </div>
                </div>
              </div>
              {/* <div className="detailrow">
                        <div className="row">
                          <div className="detailtitle col-lg-3 col-md-4 col-12">
                            <p>
                              <strong>Parameters Included</strong>
                            </p>
                          </div>
                          <div className="detaildescrp col-lg-9 col-md-8 col-12">
                            <p>26</p>
                          </div>
                        </div>
                      </div> */}
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle  col-lg-3 col-md-4 col-12">
                    <h2>
                      <strong>Exclusive Offer</strong>
                    </h2>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                    <div className="packageprice d-flex align-items-center gap-5">
                      {project.Discount_Amount != 0 ? (
                        <>
                          <div className="actualprice">
                            <Rupees /> <span>{project.Test_Amount}</span>
                          </div>
                          <div className="discountprice gradient  text-white m-0">
                            <Rupees /> <span>{project.Discount_Amount}</span>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="discountprice gradient  text-white m-0">
                            <Rupees /> <span>{project.Test_Amount}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {_discount !== "100" && (
                <div className="detailrow">
                  <div className="row">
                    <div className="detailtitle  col-lg-3 col-md-4 col-12">
                      <h2>
                        <strong>Discount</strong>
                      </h2>
                    </div>
                    <div className="detaildescrp Discount col-lg-9 col-md-8 col-12 ">
                      <p>
                        UPTO <strong>{Math.round(_discount)}%</strong>{" "}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              {project.Who_is_it_for && (
                <div className="detailrow">
                  <div className="row align-item-start">
                    <div className="detailtitle col-lg-3 col-md-4 col-12">
                      <h2>
                        <strong>Who is it for</strong>
                      </h2>
                    </div>
                    <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                      <div className="highlights whoIs flex-center flex-wrap gap-3 justify-content-start">
                        <p>{project.Who_is_it_for}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {project.Turn_around_time && (
                <div className="detailrow">
                  <div className="row">
                    <div className="detailtitle col-lg-3 col-md-4 col-12">
                      <h2>
                        <strong>Turn around time</strong>
                      </h2>
                    </div>
                    <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                      <div className="highlights turn_around flex-center flex-wrap gap-3 justify-content-start">
                        <p>{project.Turn_around_time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {project.Pre_test_information && (
                <div className="detailrow">
                  <div className="row">
                    <div className="detailtitle  align-items-lg-start col-lg-3 col-md-4 col-12">
                      <h2>
                        <strong>Pre test information</strong>
                      </h2>
                    </div>
                    <div className="detaildescrp col-lg-9 col-md-8 col-12 ">
                      <div className="highlights pre_test flex-center flex-wrap gap-3 justify-content-start">
                        <p>{project.Pre_test_information}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className="detailrow ">
                <div className="row gap-md-2 gap-lg-0 justify-content-start align-items-start">
                  <div className="detailtitle col-lg-3 col-12">
                    <h2>
                      <strong>Highlights</strong>
                    </h2>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-11 col-12 ">
                    <div className="highlights _points flex-center  flex-wrap gap-3 justify-content-start">
                      {/* {project.TestInfo.length ? (
                            <p>
                              <strong>{project.TestInfo.length} </strong>
                              Parameters
                            </p>
                          ) : null} */}

                      {project.high_param > 0 ? (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_param,
                          }}
                        ></p>
                      ) : null}
                      {project.high_sample && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_sample,
                          }}
                        ></p>
                      )}
                      {project.high_report && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_report,
                          }}
                        ></p>
                      )}
                      {project.high_test_booking && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_test_booking,
                          }}
                        ></p>
                      )}
                      {project.high_report_time && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_report_time,
                          }}
                        ></p>
                      )}
                      {project.high_recommended_for && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: project.high_recommended_for,
                          }}
                        ></p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              {project.TestInfo && (
                <div className="detailrow ">
                  <div className="row justify-content-start align-items-start">
                    <div className="detailtitle col-lg-3 col-12">
                      <h2>
                        <strong>
                          Test Parameters <br />
                          {/* (Parameters included : {lengthOfTestInfo}) */}
                        </strong>
                      </h2>
                    </div>
                    <div className="detaildescrp col-lg-9 col-md-11  col-12">
                      <AccordionComponent ParameterData={project.TestInfo} />
                    </div>
                  </div>
                </div>
              )}
              <div className="detailrow">
                <div className="row">
                  <div className="detailtitle col-lg-3 col-md-4 col-12">
                    <p>
                      <strong>Book Now</strong>
                    </p>
                  </div>
                  <div className="detaildescrp col-lg-9 col-md-8 col-12">
                    <div className="col-12 flex-center mt-5 mb-2 mb-sm-5 justify-content-center justify-content-sm-start flex-wrap gap-3 m-auto">
                      <button
                        className={`button button--aylen button--round-l button--text-thick gradient col-xxl-3 col-lg-4 col-md-5 col-11  ${
                          isInCart ? "button--remove" : ""
                        }`}
                        onClick={handleToggleCart}
                      >
                        {cartIds.includes(project.id) ? (
                          <>
                            <Bin />
                            Remove from Cart
                          </>
                        ) : (
                          <>
                            <Cart /> Add to Cart
                          </>
                        )}
                      </button>
                      <button
                        className="button button--aylen button--round-l button--text-thick  gradient col-xxl-3 col-lg-4 col-md-5 col-11 "
                        onClick={handleBookHomeCollectionClick}
                      >
                        Book Home Collection
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row pt-80">
            <div
              className="title col-12 float-start text-center"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={400}
              data-aos-once="true"
            >
              <h2 className="">Frequently Asked Questions.</h2>
            </div>
            <div
              className="col-lg-11 col-12 m-auto float-start"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={400}
              data-aos-once="true"
            >
              <Faq className="minusbottom  " />
            </div>
          </div> */}
        </>
      ) : (
        <div className="No_Data d-flex justify-content-center col-12">
          <NoData />
        </div>
      )}
    </>
  );
};
