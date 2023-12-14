import React from "react";
import { Dots } from "./svg-components/Dots";
import { Line } from "./svg-components/Line";

const ProductDetail = ({ onNextStep, onFormData }) => {
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
                <h2 className="grid-center lh-1">
                 PRODUCT DETAILS
                </h2>
              </div>
              <div>
                <div class="formpatient addtocart tablecenter">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th class="redcolor">S.No</th>
                        <th>Package/Test Name</th>
                        <th>Unit Price ()</th>
                        <th>Discount</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="redcolor">
                          <a href="" class="remove_item" data-atc="364">
                            1
                          </a>
                        </td>
                        <td>Assure Fitwoman Essential (Assure Fitwoman)</td>
                        <td>2125</td>
                        <td>65% off </td>
                        <td class="bluecolor">
                          <img src="images/blue.png" alt="" />
                          750
                        </td>
                      </tr>

                      <tr class="sr_posi">
                        <td colspan="3" class="lightcontent">
                          +Add more test (CBC, Lipid Profile, Thyroid Profile..)
                        </td>
                        <td> </td>
                        <td
                          class="bluecolorbtn button button--wayra"
                          id="selectshow"
                        >
                          <a>Add test +</a>
                        </td>
                      </tr>
                      <tr>
                        <td colspan="4" class="lightcontent bluecolor">
                          Total Amount to be paid
                        </td>
                        <td class="bluecolor redcolor">
                          <img src="images/red.png" alt="" />
                          750
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <div class="col-md-12 row text-right">
                    <button
                      class="button button--wayra pull-right red tab3"
                      onclick="window.location='add-cart.php?login=1'"
                    >
                      Proceed
                    </button>
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
