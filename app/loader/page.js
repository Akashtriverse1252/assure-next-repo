"use client";

import LogoDNA from "@/components/svg-components/LogoDNA";
import { useEffect, useRef, useState } from "react";

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = () => {
    setIsLoading((prevLoading) => !prevLoading);
  };

  useEffect(() => {
    let timeout;

    if (isLoading) {
      document.querySelectorAll(".main_loader_sec").forEach((sec) => {
        sec.classList.add("mainSecLoaderLoaded");
      });

      timeout = setTimeout(() => {
        document
          .querySelector(".main_loader")
          .classList.add("main-loader-loaded");
      }, 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isLoading]);

  // .main_loader_sec.mainSecLoaderLoaded:nth-child(2) {
  //   height: 0;
  //   transition: height 0.2s ease-in-out 2s;
  // }

  return (
    <>
      <div className={`main_loader ${isLoading ? "loaded" : ""}`}>
        <div className="main_loader_sec"></div>
        <div className="main_loader_sec">
          <LogoDNA />
          <button onClick={handleToggle}>Toggle Loading</button>

        </div>
        <div className="main_loader_sec"></div>
      </div>

    </>
  );
};

export default Loader;
