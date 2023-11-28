import React from "react";
import Link from "next/link";
import { Rupees } from "./svg-components/Rupees";

export const TestCard = ({
  Slug,
  Test_Name,
  Test_Amount,
  Discount_Amount,
  Test_Category,
  Test_ID,
  Test_Description,
  Who_is_it_for,
  Pre_test_information,
  Turn_around_time,
  widthFull,
  BaseDirectory,
}) => {
  return (
    <>
      <div
        className={
          widthFull ? "col-lg-12 col-12 test_card" : "col-lg-3 test_card"
        }
      >
        <Link href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
          <div className="sliderbox">
            <div className="packagename_test">
              <h5>{Test_Name}</h5>
            </div>
            <div className="packageprice">
              <div className="actualprice">
                <Rupees /> <span>{Test_Amount}</span>
              </div>
              <div className="discountprice gradient text-white">
                <Rupees /> <span>{Discount_Amount}</span>
              </div>
            </div>
            <div className="packagename">
              <p className="m-0">
                Included <strong className="text-black"></strong> Parameters
              </p>
            </div>
            <div className="packagedetail">
              <ul>
                {Test_Category && <li>{Test_Category} Related Test</li>}
                {Turn_around_time && (
                  <li>Turn Around Time: {Turn_around_time}</li>
                )}
                {Pre_test_information && <li>{Pre_test_information}</li>}
              </ul>
            </div>
            <div className="packageprice">
              <div className="textbtn">
                <span href={`/${BaseDirectory || "test-detail"}/${Slug}`}>
                  KNOW MORE +
                </span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
