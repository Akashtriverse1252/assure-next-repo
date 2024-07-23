import { Alltime } from "@/components/svg-components/Alltime";
import { Samedaydelivery } from "@/components/svg-components/Samedaydelivery";
import { FoundedDoctor } from "@/components/FoundedDoctor";
import { AdvancedTechnology } from "@/components/svg-components/AdvancedTechnology";
import { HighOn } from "@/components/svg-components/HighOn";
import { FiveHundredplus } from "@/components/svg-components/FiveHundredplus";
import { ConsultingService } from "@/components/svg-components/ConsultingService";
import Nabh from "@/components/svg-components/Nabh";
import PlayStore from "@/components/svg-components/PlayStore";
import { AssureSafety } from "@/components/svg-components/AssureSafety";
import Link from "next/link";

const WhyUs = ({ Title }) => {
  return (
    <>
      <div className="why_assure   ">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div
                className="title col-12 float-start text-center"
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <h2>{Title}</h2>
              </div>
              <div
                className="col-lg-10 m-auto col-12 float-start "
                data-aos="fade-up"
                data-aos-duration={500}
                data-aos-once="true"
                data-aos-easing="ease-in"
              >
                <div className="row justify-content-center pt-3">
                  <div class="why_assure_cnt  ">
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <Nabh />
                      </span>
                      <div class="why_assure_text">NABH Certified Labs</div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <Alltime />
                      </span>
                      <div class="why_assure_text">24x7</div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <Samedaydelivery />
                      </span>
                      <div class="why_assure_text">Same Day Report</div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <FoundedDoctor />
                      </span>
                      <div class="why_assure_text">Founded by Doctors</div>
                    </div>

                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <AdvancedTechnology />
                      </span>
                      <div class="why_assure_text">Advanced Technology</div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <HighOn />
                      </span>
                      <div class="why_assure_text">
                        High on Safety and Hygiene
                      </div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <FiveHundredplus />
                      </span>
                      <div class="why_assure_text">1000+ Test</div>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <ConsultingService />
                      </span>
                      <div class="why_assure_text">Consultation Services</div>
                    </div>
                    <div class="why_assure_item">
                      <Link
                        className="d-flex justify-content-center align-items-center gap-3"
                        target="_blank"
                        href="https://play.google.com/store/apps/details?id=com.assure_pathlab"
                      >
                        <span className=" flex-center ">
                          <PlayStore />
                        </span>
                        <div class="why_assure_text">Assure Pathlabs App</div>
                      </Link>
                    </div>
                    <div class="why_assure_item">
                      <span className=" flex-center ">
                        <AssureSafety />
                      </span>
                      <div class="why_assure_text">
                        Free Home Sample Collection*
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyUs;
