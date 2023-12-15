"use client";

import React, { useEffect, useState } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const radioData = [
  { value: "2023-12-15", label: "15", body: "Today" },
  { value: "2023-12-16", label: "16", body: "Tomorrow" },
  { value: "2023-12-18", label: "18", body: "Monday" },
  { value: "2023-12-17", label: "17", body: "Sunday" },
];
export const HomeCollectionData = () => {
  const [selectedValue, setSelectedValue] = useState(radioData[0]?.value);

  useEffect(() => {
    // Add your client-side logic here
    // For example, handling changes in selected radio button
  }, [selectedValue]);

  return (
    <>
      <div className="container">
        <div className="plans">
          <div className="title">Choose Test Type</div>
          <div className="plans_selection">
            <label className="plan basic-plan" for="basic">
              <input type="radio" name="plan" id="basic" />
              <div className="plan-content">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/life-saver-img.svg"
                  alt=""
                />
                <div className="plan-details">
                  <span>Home Collection</span>
                  <p>
                    For smaller business, with simple salaries and pay
                    schedules.
                  </p>
                </div>
              </div>
            </label>

            <label className="plan complete-plan" for="complete">
              <input type="radio" id="complete" name="plan" />
              <div className="plan-content">
                <img
                  loading="lazy"
                  src="https://raw.githubusercontent.com/ismailvtl/ismailvtl.github.io/master/images/potted-plant-img.svg"
                  alt=""
                />
                <div className="plan-details">
                  <span>Walk In</span>
                  <p>
                    For growing business who wants to create a rewarding place
                    to work.
                  </p>
                </div>
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* -------------------------------Home Collection Details----------------------------------- */}
      <div className="home_collection_data">
        <h5>
          <strong> Home Collection Details</strong>
        </h5>
        <div className="hcd_time">
          <div className="hcd_time_date">
            <div className="hcd_select_date">
              <article class=" slots-content">
                <div class=" day-picker mb-5">
                  <section class="date-header mb-2">
                    <div className="title">Select Date</div>
                  </section>
                  <div
                    role="radiogroup"
                    aria-required="false"
                    dir="ltr"
                    className="hcd_date_seection"
                    tabIndex="0"
                  >
                    {radioData.map((item, index) => (
                      <label
                        key={index}
                        className="hcd_radio_card"
                        htmlFor={`radio${index}`}
                      >
                        <button
                          type="button"
                          role="radio"
                          aria-checked={selectedValue === item.value}
                          data-state={
                            selectedValue === item.value
                              ? "checked"
                              : "unchecked"
                          }
                          value={item.value}
                          className={`hcd_radio_button ${
                            selectedValue === item.value ? "checked" : ""
                          }`}
                          id={`radio${index}`}
                          tabIndex={index === 0 ? 0 : -1}
                          onClick={() => setSelectedValue(item.value)}
                        >
                          <div className="slot-option">
                            <span className="day-picker-month ">Dec</span>
                            <span className="day-picker-day ">
                              <strong>{item.label}</strong>
                            </span>
                            <span className="">{item.body}</span>
                          </div>
                          {selectedValue === item.value && (
                            <span
                              data-state="checked"
                              className="hcd_radio_button_checked"
                            >
                              {/* <IoIosCheckmarkCircle /> */}
                            </span>
                          )}
                        </button>
                      </label>
                    ))}
                  </div>
                </div>
                <div class="hcd-grey-80 time-picker mt-6">
                  <section class="time-header mb-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="hcd-enforce-standard-icon-size"
                      height="16px"
                      preserveAspectRatio="xMidYMid meet"
                      stroke="currentColor"
                      fill="none"
                      stroke-width="0.25"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M6.495 14H2.482a.5.5 0 110-1h4.013a.5.5 0 110 1zM5.491 12H2.482a.5.5 0 110-.999h3.01a.5.5 0 110 1zM4.488 10.001H2.482a.5.5 0 110-1h2.006a.5.5 0 110 1z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M8.502 13.977a.501.501 0 11-.045-1 5.005 5.005 0 004.556-5.13 5.007 5.007 0 00-4.862-4.843 5.01 5.01 0 00-5.146 4.543.5.5 0 01-.788.364.5.5 0 01-.211-.454c.29-3.195 3.052-5.597 6.268-5.45 3.216.145 5.747 2.787 5.745 5.995.016 3.108-2.365 5.707-5.472 5.973a.461.461 0 01-.045.002z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M8 5.002a.5.5 0 00-.502.5v2.5c0 .132.053.26.147.353l1.505 1.5c.197.189.51.186.703-.007a.499.499 0 00.006-.7L8.5 7.795V5.502a.5.5 0 00-.501-.5z"
                      ></path>
                    </svg>
                    <span class="hcd-label-m">Select preferred time slot</span>
                  </section>
                  <section class="time-slots mt-5">
                    <section class="slot-wrapper">
                      <div class="slot-heading hcd-label-m">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="hcd-enforce-standard-icon-size"
                          height="20px"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#fff"
                            fill-opacity="0.01"
                            d="M0 0H20V20H0z"
                          ></path>
                          <rect
                            width="20"
                            height="20"
                            fill="#FFF3D8"
                            rx="10"
                          ></rect>
                          <path
                            fill="#FF970A"
                            d="M10 6.99A3.018 3.018 0 006.98 10c0 1.66 1.355 3.01 3.02 3.01A3.018 3.018 0 0013.017 10c0-1.66-1.354-3.01-3.019-3.01zM10 6.106a.588.588 0 01-.59-.587v-.94a.588.588 0 011.178 0v.94a.588.588 0 01-.589.587zM10 13.894a.588.588 0 00-.59.587v.94a.588.588 0 001.178 0v-.94a.588.588 0 00-.589-.587zM12.762 7.247a.586.586 0 010-.83l.667-.665a.59.59 0 01.833 0c.23.23.23.601 0 .83l-.667.665a.59.59 0 01-.833 0zM7.236 12.754a.59.59 0 00-.833 0l-.666.664a.586.586 0 000 .83c.23.23.603.23.833 0l.666-.664a.585.585 0 000-.83zM13.906 10c0-.324.264-.587.59-.587h.942a.588.588 0 110 1.174h-.943a.588.588 0 01-.589-.587zM6.093 10a.588.588 0 00-.59-.587h-.941a.588.588 0 100 1.174h.942A.588.588 0 006.093 10zM12.76 12.754a.591.591 0 01.834 0l.666.664c.23.23.23.601 0 .83a.59.59 0 01-.833 0l-.667-.664a.586.586 0 010-.83zM7.236 7.247a.586.586 0 000-.83l-.666-.665a.59.59 0 00-.833 0 .585.585 0 000 .83l.666.665c.23.23.603.23.833 0z"
                          ></path>
                        </svg>
                        Afternoon
                      </div>
                      <div
                        role="radiogroup"
                        aria-required="false"
                        dir="ltr"
                        class="hcd-radio-button--wrapper mt-5 hcd-radio-button--small hcd-radio-button--horizontal hcd-radio-button--label-right hcd-radio-button--slot hcd-radio-button--selection-highlighted"
                        tabindex="0"
                      >
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r1v:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="04:15 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r1v:"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">04:15 PM</span>
                          </button>
                        </label>
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r21:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="05:15 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r21:"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">05:15 PM</span>
                          </button>
                        </label>
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r23:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="06:00 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r23:"
                            tabindex="0"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">06:00 PM</span>
                          </button>
                        </label>
                      </div>
                    </section>
                    <section class="slot-wrapper">
                      <div class="slot-heading hcd-label-m">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="hcd-enforce-standard-icon-size"
                          height="20px"
                          preserveAspectRatio="xMidYMid meet"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill="#fff"
                            fill-opacity="0.01"
                            d="M0 0H20V20H0z"
                          ></path>
                          <rect
                            width="20"
                            height="20"
                            fill="#CCE1FF"
                            rx="9"
                          ></rect>
                          <path
                            fill="#134081"
                            d="M15.445 11.915a.339.339 0 00-.393-.057 5.136 5.136 0 01-6.001-.912 5.096 5.096 0 01-.915-5.982.338.338 0 00-.449-.458 5.805 5.805 0 00-1.525 9.32 5.848 5.848 0 008.252 0 5.784 5.784 0 001.097-1.52.336.336 0 00-.066-.39z"
                          ></path>
                          <path
                            fill="#4B4B4A"
                            d="M11.41 10.65a.048.048 0 00.015.056c.017.013.04.014.058.002l.752-.533.854.349c.02.008.042.002.056-.015a.048.048 0 00.001-.058l-.534-.75.35-.85a.048.048 0 00-.015-.056.049.049 0 00-.058-.002l-.752.532-.854-.348a.049.049 0 00-.056.014.048.048 0 00-.001.058l.534.75-.35.851zM9.433 6.616l.621.046.293.547c.01.019.031.029.053.024a.049.049 0 00.038-.043l.046-.618.548-.293a.048.048 0 00-.02-.09l-.62-.046-.292-.547a.048.048 0 00-.09.02l-.047.618-.549.292a.048.048 0 00.02.09zM13.362 5.998l-.019.344a.048.048 0 00.087.03l.2-.28.346.019a.048.048 0 00.048-.032.048.048 0 00-.017-.055l-.282-.2.019-.344a.049.049 0 00-.032-.048.048.048 0 00-.056.017l-.2.28-.345-.018a.048.048 0 00-.048.032c-.007.02 0 .043.018.055l.28.2z"
                          ></path>
                        </svg>
                        Evening
                      </div>
                      <div
                        role="radiogroup"
                        aria-required="false"
                        dir="ltr"
                        class="hcd-radio-button--wrapper mt-5 hcd-radio-button--small hcd-radio-button--horizontal hcd-radio-button--label-right hcd-radio-button--slot hcd-radio-button--selection-highlighted"
                        tabindex="0"
                      >
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r25:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="07:00 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r25:"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">07:00 PM</span>
                          </button>
                        </label>
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r27:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="07:45 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r27:"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">07:45 PM</span>
                          </button>
                        </label>
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r29:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="false"
                            data-state="unchecked"
                            value="08:45 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r29:"
                            tabindex="-1"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">08:45 PM</span>
                          </button>
                        </label>
                        <label
                          class="hcd-radio-button--field-wrapper"
                          for=":r2b:"
                        >
                          <button
                            type="button"
                            role="radio"
                            aria-checked="true"
                            data-state="checked"
                            value="09:30 PM"
                            class="hcd-radio-button hcd-radio-button--selection-highlighted"
                            id=":r2b:"
                            tabindex="0"
                            data-radix-collection-item=""
                          >
                            <span class="hcd-body-l">09:30 PM</span>
                            <span
                              data-state="checked"
                              class="hcd-radio-button--checked"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="hcd-enforce-standard-icon-size"
                                height="24px"
                                preserveAspectRatio="xMidYMid meet"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke-width="3"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              >
                                <polyline points="20 6 9 17 4 12"></polyline>
                              </svg>
                            </span>
                          </button>
                        </label>
                      </div>
                    </section>
                  </section>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
