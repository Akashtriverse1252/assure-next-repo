import React from "react";
import LogoDNA from "@/components/svg-components/LogoDNA";

const page = () => {
  return (
    <>
      <div className="main_loader">
        <div className="main_loader_sec"></div>
        <div className="main_loader_sec">
          <LogoDNA />
        </div>
        <div className="main_loader_sec"></div>
      </div>
    </>
  );
};

export default page;
