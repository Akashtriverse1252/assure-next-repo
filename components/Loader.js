"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Cookies from "js-cookie";

const LogoTriverse = () => {
  const mainLoaderRef = useRef(null);
  const svgRef = useRef(null);
  const [shouldRenderLoader, setShouldRenderLoader] = useState(false);

  useEffect(() => {
    const loaderHidden = Cookies.get("loaderHidden");
    if (loaderHidden === undefined || loaderHidden === "false") {
      setShouldRenderLoader(true);
    } else {
      setShouldRenderLoader(false);
    }
  }, []);
  useEffect(() => {
    if (shouldRenderLoader) {
      animateLoader();
      Cookies.set("loaderHidden", true, { expires: 10 / (24 * 60) });
    }
  }, [shouldRenderLoader]);

  const animateLoader = () => {
    const svgElement = svgRef.current;
    const mainLoaderElement = mainLoaderRef.current;

    if (svgElement) {
      svgElement.style.stroke = "white";
      svgElement.style.strokeWidth = "50px";
      svgElement.style.fill = "transparent";

      const paths = svgElement.querySelectorAll("path");

      paths.forEach((path) => {
        const length = path.getTotalLength();

        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;

        // Create GSAP timeline
        const tl = gsap.timeline();

        // Animate the stroke
        tl.to(path, { strokeDashoffset: 0, duration: 3.5 }).to(path, {
          fill: "#ffffff",
          strokeWidth: "0",
          duration: 1,
          ease: "cubic-bezier(.22,.68,0,1.71)",
        }); // Animate the fill
        // .to(path, { opacity: 0, duration: 1, delay: 1.2 }); // Animate the opacity
        tl.to(svgElement, { opacity: 0, duration: 0.8 }); // Animate the opacity
        tl.to(mainLoaderElement, {
          height: 0,
          duration: 0.4,
          delay: -0.72,
          ease: "cubic-bezier(.57,.21,.69,3.25)",
        });
        tl.to(mainLoaderElement, {
          display: "none",
          duration: 0.1,
          delay: 0.5,
        });
      });
    }
  };
  return (
    <>
      {shouldRenderLoader && (
        <div className="main_loader" ref={mainLoaderRef}>
          <div className="main_loader_sec">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="30.059mm"
              height="60.9597mm"
              version="1.1"
              ref={svgRef}
              viewBox="0 0 3005.9 6095.97"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              className="main_loader_svg"
            >
              <g id="Layer_x0020_1">
                <path
                  className="fil0"
                  d="M982.44 2942.24l1040.94 -0.17c50.25,0 96.33,-23.77 129.83,-63.24 33.24,-39.2 53.78,-93.18 53.92,-153.26 -0.34,-119.7 -82.25,-216.22 -183.61,-216.32l-1040.92 -0.02c-101.4,-0.67 -183.77,97.05 -183.83,216.65 0.24,119.27 82.31,216.07 183.67,216.36z"
                />
                <path
                  className="fil0"
                  d="M2023.82 3235.29l-1041.66 0.45c-101.2,0.32 -183.37,97.13 -183.72,216.38 0,119.58 82.4,216.58 183.66,216.24l1041.36 -0.08c50.5,-0.21 96.48,-24.55 129.92,-63.91 32.91,-38.82 53.79,-92.49 54.04,-152.78 -0.25,-119.15 -82.68,-216.28 -183.6,-216.3z"
                />
                <path
                  className="fil0"
                  d="M698.1 356.96l1603.21 0c66.96,0 123.32,-49.91 131.61,-116.33 3.05,-24.56 6.47,-50.07 10.03,-73.31 6.33,-41.6 -25.46,-79.2 -67.55,-79.2l-1753.59 0c-42.78,0 -75.31,38.86 -67.23,80.85 4.54,23.73 8.67,49.54 12.28,74.25 9.5,65.25 65.29,113.74 131.24,113.74z"
                />
                <path
                  className="fil0  string_right"
                  d="M2549.93 356.96c-19.29,117.07 -63.73,222.67 -127.66,319.67 -64.07,97.23 -147.73,185.81 -245.32,268.82 -96.6,82.08 -206.78,158.69 -325.16,232.7 -58.68,36.66 -56.62,122.71 3.73,156.52 83.98,47.06 168.33,95.4 251.86,145.88 30.24,18.25 68.41,17.93 97.68,-1.81 437.01,-294.12 795.63,-666.55 800.8,-1243.6 1.03,-118.62 -85.47,-224.63 -203.64,-234.36 -79.97,-6.57 -151.72,29.29 -195.83,87.34 -28.41,37.41 -45.47,83.82 -45.47,134.36 0,46.53 -3.85,91.26 -10.99,134.48zm-939.49 3908.95c-599.32,-330.61 -1165.46,-642.94 -1165.46,-1217.94 0,-421.18 303.72,-701.41 701.76,-951.11 58.8,-36.92 57.46,-122.85 -2.99,-156.91 -78.51,-44.21 -176.59,-100 -253.63,-145.73 -30.15,-17.89 -67.99,-17 -97.01,2.63 -436.67,295.49 -793.11,670.25 -793.11,1251.12 0,837.75 741.37,1246.72 1395.5,1607.55 287.87,158.82 567.87,313.51 781.39,494.98 97.59,83.01 181.17,171.65 245.24,268.82 63.91,97.02 108.26,202.62 127.56,319.67 7.14,43.26 11.23,87.91 11.23,134.46 0,50.54 17.06,97.03 45.43,134.36 44.13,58.03 115.86,93.95 195.83,87.38 118.37,-9.77 204.76,-116.04 203.66,-234.83 -7.7,-828.91 -744.73,-1235.49 -1395.4,-1594.45z"
                />
                <path
                  className="fil0"
                  d="M2301.19 5738.99l-1596.64 0c-66.96,0 -123.34,49.89 -131.57,116.33 -3.13,24.89 -6.57,50.76 -10.17,74.21 -6.35,41.11 25.13,78.28 66.78,78.28l1746.58 0c41.68,0 73.17,-37.17 66.8,-78.35 -3.58,-23.46 -7.1,-49.35 -10.22,-74.27 -8.34,-66.35 -64.66,-116.2 -131.56,-116.2z"
                />
                <path
                  className="fil0"
                  d="M2096.71 676.63l-1216.79 0c-61.55,0 -91.98,74.9 -47.73,117.65 28.52,27.54 58.48,55.52 85.30,80.07 50.15,45.86 115.61,71.10 183.55,71.10l769.85 0c65.6,0 128.88,-23.66 178.48,-66.56 29.21,-25.26 62.20,-54.57 93.73,-83.37 46.08,-42.07 16.06,-118.89 -46.39,-118.89z"
                />
                <path
                  className="fil0 string_left"
                  d="M455.93 5738.99c19.27,-117.05 63.62,-222.65 127.56,-319.67 64.03,-97.21 147.68,-185.81 245.30,-268.82 95.18,-80.90 203.56,-156.54 320.02,-229.57 58.01,-36.37 55.55,-121.69 -4.23,-155.11 -84.53,-47.22 -169.47,-95.67 -253.81,-146.21 -30.02,-18.01 -67.80,-17.54 -96.83,2.06 -433.88,293.40 -788.83,664.98 -793.88,1239.10 -1.03,118.48 85.45,224.36 203.52,234.15 79.91,6.62 151.66,-29.17 195.81,-87.11 28.49,-37.41 45.59,-83.92 45.59,-134.60 0,-46.43 3.85,-91.07 10.95,-134.22zm1154.51 -4269.92c-302.97,-167.13 -597.30,-329.59 -814.46,-523.62 -92.79,-82.89 -171.44,-171.55 -230.61,-268.82 -59.07,-97.07 -98.82,-202.64 -113.74,-319.67 -4.37,-34.24 -6.65,-69.45 -6.65,-105.70 0,-64.54 -27.62,-122.47 -71.50,-163.12 -39.00,-36.13 -90.80,-58.62 -147.96,-59.37 -126.37,-1.69 -226.66,109.77 -225.46,236.08 8,828.53 744.91,1235.01 1395.44,1593.87 599.32,330.61 1165.42,642.88 1165.42,1217.79 0,423.54 -307.22,704.53 -708.60,955.27 -58.66,36.65 -56.56,122.71 3.77,156.50 83.98,47.10 168.26,95.42 251.86,145.91 30.20,18.26 68.33,17.91 97.63,-1.79 439.93,-296.25 800.32,-671.82 800.32,-1255.89 0,-837.66 -741.41,-1246.63 -1395.46,-1607.44z"
                />
                <path
                  className="fil0"
                  d="M907.03 5419.32l1191.21 0c61.75,0 91.45,-76 45.79,-117.65 -32.17,-29.35 -65.96,-59.27 -95.66,-84.91 -49.48,-42.77 -112.51,-66.26 -177.89,-66.26l-735.93 0c-65.48,0 -128.62,23.57 -178.12,66.46 -29.66,25.62 -63.28,55.48 -95.28,84.77 -45.53,41.69 -15.83,117.59 45.88,117.59z"
                />
              </g>
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
export default LogoTriverse;
