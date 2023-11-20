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
}) => {
  return (
    <>
      <div className="col-lg-3 col-12">
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
              <li>{Test_Category} Related Test</li>
              <li>Who is it for</li>
              <li>Pre Test Requirement</li>
            </ul>
          </div>
          <div className="packageprice">
            <div className="textbtn">
              <Link href={`/test-detail/${Slug}`}>KNOW MORE +</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
