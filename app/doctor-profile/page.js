import Image from "next/image";
import React from "react";
import "./index.css";

const Page = () => {
  return (
    <>
      <section className="position-relative">
        <div className="container">
          <div className="row">
            <div className="title col-12 float-start text-center">
              <h2>Our Doctors</h2>
            </div>
            <div className="leaderships">
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="/doctor-01.webp"
                    alt="Dr. Sanjay Wadhwa"
                    f
                    title="Dr. Sanjay Wadhwa"
                    width="350"
                    height="350"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>Dr. Sanjay Wadhwa</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>ASSURE PATHLABS</li>
                  </ul>
                  <button type="button" className="cnt_shp_btn textbtn">
                    Read More
                  </button>
                </div>
              </div>
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="/doctor-01.webp"
                    alt="Dr. Sanjay Wadhwa"
                    title="Dr. Sanjay Wadhwa"
                    width="350"
                    height="350"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>Dr. Sanjay Wadhwa</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>ASSURE PATHLABS</li>
                  </ul>
                  <button type="button" className="cnt_shp_btn textbtn">
                    Read More
                  </button>
                </div>
              </div>
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="/doctor-01.webp"
                    alt="Dr. Sanjay Wadhwa"
                    title="Dr. Sanjay Wadhwa"
                    width="350"
                    height="350"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>Dr. Sanjay Wadhwa</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>ASSURE PATHLABS</li>
                  </ul>
                  <button type="button" className="cnt_shp_btn textbtn">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
