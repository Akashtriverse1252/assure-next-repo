import React from "react";
import Link from "next/link";
import { Rupees } from "./svg-components/Rupees";
import Image from "next/image";

export const PackagCard = ({
  Test_Name,
  Test_for,
  Number_test,
  Test_info,
  Test_Amount,
  Discount_Amount,
  Test_Category,
  Test_Slug,
  Test_Description,
}) => {
  return (
    <div className="sliderbox">
      <div className="packagename">
        <span>
          <Image
            src="/svg/healthcompletewellness.svg"
            alt="Health Check-up packages"
            width={80}
            height={80}
          />
        </span>
      </div>
      <div className="packagename">
        <h4>
          <strong className="text-black">{Test_Name}</strong>
          {Test_for}
        </h4>
        <p className="m-0">
          Includes <strong className="text-black">{Number_test}</strong>{" "}
          Parameters
        </p>
      </div>
      <div className="packagedetail">
        <ul>
          {Test_info.slice(0, 3).map((test, testIndex) => (
            <li key={testIndex}>{test.testName}</li>
          ))}
        </ul>
      </div>
      <div className="packageprice">
        <div className="actualprice">
          <Rupees />
          <span>{Test_Amount}</span>
        </div>
        <div className="discountprice gradient  text-white">
          <Rupees />
          <span>{Discount_Amount}</span>
        </div>
        <div className="textbtn">
          <Link href={`/packages/${Test_Slug}`}>KNOW MORE +</Link>
        </div>
      </div>
    </div>
  );
};
