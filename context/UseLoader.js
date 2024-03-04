"use client"
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export const useLoader = () => {
  const [loaderVisibility, setLoaderVisibility] = useState(true);

  useEffect(() => {
    const showLoader = !Cookies.get("loaderHidden");

    if (showLoader) {
      const loaderTimeout = setTimeout(() => {
        setLoaderVisibility(false);
        Cookies.set("loaderHidden", true, { expires: 10 / (24 * 60) });
      }, 1000);

      return () => clearTimeout(loaderTimeout);
    } else {
      setLoaderVisibility(false);
    }
  }, []);

  return { loaderVisibility, setLoaderVisibility };
};
