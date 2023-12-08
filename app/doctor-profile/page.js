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
              <h2>About us</h2>
            </div>
            <div className="leaderships">
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="https://www.jujhargroup.com/static/media/S-Gurdeep-Singh.212ca47829a394b00f93.webp"
                    alt="S GURDEEP SINGH"
                    title="S GURDEEP SINGH"
                    width="250"
                    height="250"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>S GURDEEP SINGH</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>JUJHAR GROUP</li>
                  </ul>
                  <a className="btn-3" href="/leadership/s-gurdeep-singh">
                    <span> Read Bio</span>
                  </a>
                </div>
              </div>
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="https://www.jujhargroup.com/static/media/S-Gurdeep-Singh.212ca47829a394b00f93.webp"
                    alt="S GURDEEP SINGH"
                    title="S GURDEEP SINGH"
                    width="250"
                    height="250"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>S GURDEEP SINGH</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>JUJHAR GROUP</li>
                  </ul>
                  <a className="btn-3" href="/leadership/s-gurdeep-singh">
                    <span> Read Bio</span>
                  </a>
                </div>
              </div>
              <div className="leadership2">
                <div className="leadershipimg">
                  <Image
                    src="https://www.jujhargroup.com/static/media/S-Gurdeep-Singh.212ca47829a394b00f93.webp"
                    alt="S GURDEEP SINGH"
                    title="S GURDEEP SINGH"
                    width="250"
                    height="250"
                  />
                </div>
                <div className="leadershipcont">
                  <h2>S GURDEEP SINGH</h2>
                  <ul>
                    <li>FOUNDER AND CHAIRMAN</li>
                    <li>JUJHAR GROUP</li>
                  </ul>
                  <a className="btn-3" href="/leadership/s-gurdeep-singh">
                    <span> Read Bio</span>
                  </a>
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
