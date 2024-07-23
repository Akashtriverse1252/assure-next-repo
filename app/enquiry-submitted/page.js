import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="col-md-6 pt-5 col-12 mx-auto">
                <div className="sucees_mesg-message mx-auto">
                  <p className="text-center">
                    Thank you for contacting us! Your enquiry has been
                    successfully submitted. Our team will review your message
                    and get back to you shortly. If your matter requires urgent
                    attention, please call us at{" "}
                    <Link href="/tel:0181-4667555">0181-4667555.</Link>{" "}
                  </p>
                  <p className="text-center">
                    Thank you again for choosing Assure Pathlabs.
                  </p>
                  {/* <div
                    className=" mt-3 mb-2 mx-auto  col-md-4 col-11"
                    data-aos="flip"
                    data-aos-duration={500}
                    data-aos-once="true"
                    data-aos-easing="ease-in"
                  >
                    <Link
                      href="/all-test"
                      className="button button--aylen button--round-l button--text-thick text-uppercase gradient  col-12 mt-3"
                    >
                      Explore more offers
                    </Link>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
