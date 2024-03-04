"use client";
import { useEffect, useRef, useState } from "react";
import LogoDNA from "@/components/svg-components/LogoDNA";
import { useLoader } from "@/context/UseLoader";

const Loader = (isLoading) => {
  const { loaderVisibility, setLoaderVisibility } = useLoader();
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

  return (
    <>
      {loaderVisibility && (
        <div
          className={`main_loader ${isLoading ? "loaded" : ""}`}
          ref={mainLoaderRef}
        >
          <div className="main_loader_sec">
            <LogoDNA />
          </div>
        </div>
      )}
    </>
  );
};

export default Loader;
