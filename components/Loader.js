"use client";

import { useEffect, useRef } from "react";
import LogoDNA from "@/components/svg-components/LogoDNA";

const Loader = (isLoading) => {
  const mainLoaderRef = useRef(null);

  const hideLoader = () => {
    if (mainLoaderRef.current) {
      mainLoaderRef.current.classList.add("d-none");
    }
  };
  const hideLoaderSec = () => {
    document.querySelectorAll(".main_loader_sec").forEach((sec) => {
      sec.classList.add("mainSecLoaderLoaded");
    });
  };

  // Automatically hide loader after 3 seconds
  const timeout = setTimeout(hideLoaderSec, 3500);
  const timeoutId = setTimeout(hideLoader, 4200);

  // Cleanup the timeout to avoid memory leaks
  useEffect(() => {
    return () => clearTimeout(timeoutId, timeout);
  }, []);
  return (
    <>
      <div
        className={`main_loader ${isLoading ? "loaded" : ""}`}
        ref={mainLoaderRef}
      >
        {/* <div className="main_loader_sec"></div> */}
        <div className="main_loader_sec">
          <LogoDNA />
        </div>
        {/* <div className="main_loader_sec"></div> */}
      </div>
    </>
  );
};

export default Loader;
