"use client";

import { useEffect, useRef, useState } from "react";
import LogoDNA from "@/components/svg-components/LogoDNA";
import Cookies from "js-cookie";

const Loader = (isLoading) => {
  const [loaderVisiblity, setLoaderVisiblity] = useState();
  const mainLoaderRef = useRef(null);

  const hideLoaderSec = () => {
    document.querySelectorAll(".main_loader_sec").forEach((sec) => {
      sec.classList.add("mainSecLoaderLoaded");
    });
  };
  const hideLoader = () => {
    if (mainLoaderRef.current) {  
      mainLoaderRef.current.classList.add("d-none");
    }
  };

  // Automatically hide loader after 3 seconds
  const timeout = setTimeout(hideLoaderSec, 4000);
  const timeoutId = setTimeout(hideLoader, 4500);

  // Cleanup the timeout to avoid memory leaks
  useEffect(() => {
    return () => clearTimeout(timeoutId, timeout);
  }, []);
  useEffect(() => {
    const showLoader = !Cookies.get("loaderHidden");
    console.log(showLoader);

    if (showLoader) {
      const loaderTimeout = setTimeout(() => {
        setLoaderVisiblity(false);
        Cookies.set("loaderHidden", true, { expires: 10 / (24 * 60) });
      }, 3000);

      return () => clearTimeout(loaderTimeout);
    } else {
      setLoaderVisiblity(false);
    }
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
