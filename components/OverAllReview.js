"use client";
import React, { useState } from "react";
import Google from "@/components/svg-components/Google";
import { PiCaretLeftThin, PiCaretRightThin } from "react-icons/pi";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiOutlineArrowLongLeft } from "react-icons/hi2";

const OverAllReview = ({
  currentSlide,
  goToPrevSlide,
  goToNextSlide,
  totalSide,
}) => {
  return (
    <>
      <div className="review-container position-realtive">
        <div className="google_review_logo">
          <Google />
          <p>oogle Review</p>
        </div>
        <div className="google_line_review d-flex">
          <div className="review-stars">
            <table className="review-star-table">
              <tbody>
                <tr className="review-star-row">
                  <td className="review-star-count" role="presentation">
                    5
                  </td>
                  <td className="review-star-bar">
                    <div
                      className="review-star-fill"
                      style={{ width: "100%" }}
                    ></div>
                  </td>
                </tr>
                <tr className="review-star-row">
                  <td className="review-star-count" role="presentation">
                    4
                  </td>
                  <td className="review-star-bar">
                    <div
                      className="review-star-fill"
                      style={{ width: "4.87179%" }}
                    ></div>
                  </td>
                </tr>
                <tr className="review-star-row">
                  <td className="review-star-count" role="presentation">
                    3
                  </td>
                  <td className="review-star-bar">
                    <div
                      className="review-star-fill"
                      style={{ width: "3%" }}
                    ></div>
                  </td>
                </tr>
                <tr className="review-star-row">
                  <td className="review-star-count" role="presentation">
                    2
                  </td>
                  <td className="review-star-bar">
                    <div
                      className="review-star-fill"
                      style={{ width: "2%" }}
                    ></div>
                  </td>
                </tr>
                <tr className="review-star-row">
                  <td className="review-star-count" role="presentation">
                    1
                  </td>
                  <td className="review-star-bar">
                    <div
                      className="review-star-fill"
                      style={{ width: "5%" }}
                    ></div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="review-rating">
            <div className="review-rating-number">4.8</div>
            <div className="review-rating-stars">
              <div className="review-star"></div>
              <div className="review-star"></div>
              <div className="review-star"></div>
              <div className="review-star"></div>
              <div className="review-star"></div>
            </div>
            <div className="review-rating-count">429 reviews</div>
          </div>
        </div>
        <div className="review_btns ">
          <button className="button button--aylen button--round-l button--text-thick  review_btn ">
            Write a reviews
          </button>
          <button className="button button--aylen button--round-l button--text-thick  review_btn ">
            Read all reviews
          </button>
        </div>
        <div className="currentslide-review flex-center">
          <button
            className="slider_count left flex-center "
            disabled={currentSlide === 0}
            onClick={goToPrevSlide}
          >
            <PiCaretLeftThin />
            {/* <HiOutlineArrowLongLeft /> */}
          </button>
          <span>
            {Math.round(currentSlide) + 1} - {totalSide}
          </span>
          <button
            className="slider_count  flex-center"
            onClick={goToNextSlide}
            disabled={currentSlide === totalSide - 1}
          >
            <PiCaretRightThin />
            {/* <HiOutlineArrowLongRight /> */}
          </button>
        </div>
      </div>
    </>
  );
};

export default OverAllReview;
