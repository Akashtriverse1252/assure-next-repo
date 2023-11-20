"use client"
import React from 'react'
import Slider from "react-slick";
import { Rupees } from './svg-components/Rupees';


export const Seasonalpack = (props) => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        autoplay: false,
    };
    return (
        <>
      
            <Slider {...settings} {...props}>
                <div>
                <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                          <h5>FEVER PANEL</h5>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                      </div>
                      <div className="packagename">
                      <p className="m-0">Includes <strong className="text-black">5</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                    </div>
                    </div>
                    </div>
                    <div>
                <div className='col-lg-11 col-12 m-auto'>
                <div className="sliderbox">
                      <div className="packagename">
                          <h5>FEVER CURE</h5>
                      </div>
                      <div className="packageprice">
                        <div className="actualprice">
                          <Rupees /> <span>7410</span>
                        </div>
                        <div className="discountprice gradient  text-white">
                          <Rupees /> <span>2500</span>
                        </div>
                      </div>
                      <div className="packagename">
                      <p className="m-0">Includes <strong className="text-black">5</strong> Parameters</p>
                      </div>
                      <div className="packagedetail">
                        <ul>
                          <li>Complete blood count</li>
                          <li>Lipid profile</li>
                          <li>Liver function test</li>
                        </ul>
                      </div>
                      <div className="packageprice">
                      <div className="textbtn">
                        <a>KNOW MORE +</a>
                      </div>
                      </div>
                    </div>
                    </div>
                    </div>
            </Slider>
        </>
    )
}
