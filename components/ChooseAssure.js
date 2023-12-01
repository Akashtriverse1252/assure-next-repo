import React from "react";
import { AssureSafety } from "@/components/svg-components/AssureSafety";
import { Doctor } from "@/components/svg-components/Doctor";
import { FreeHomeCollection } from "@/components/svg-components/FreeHomeCollection";
import { Dots } from "@/components/svg-components/Dots";
import { Line } from "@/components/svg-components/Line";
import { Consultant } from "./svg-components/Consultant";
import { SameDayreport } from "./svg-components/SameDayreport";

export const ChooseAssure = () => {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="title col-12 float-start text-center mt-0 mt-sm-5">
                <h2>why choose assure pathlab</h2>
              </div>
              <div className="col-lg-8 m-auto col-12 float-start chooseassure">
                <div className="row justify-content-center">
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className=" flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        <AssureSafety />
                      </span>
                      <p>
                        Assured <br />
                        Safety
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className=" flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        <FreeHomeCollection />
                      </span>
                      <p>
                        Free Home <br />
                        Sample Collection
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className=" flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        <SameDayreport />
                      </span>
                      <p>
                        Same Day <br />
                        Report
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 col-sm-6 col-6">
                    <div className="circleicons float-start col-12 text-center grid-center">
                      <span className=" flex-center mb-2 button button--aylen button--round-l button--text-thick">
                        <Consultant />
                      </span>
                      <p>
                        Free Doctor <br /> Consultation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Dots className="hsection position-absolute svgwidth opacity-10 start-0 bottom-0 top-inherit" />
        <Line className="svgwidthline position-absolute opacity-10 bottom-0 end-0" />
      </section>
    </>
  );
};
