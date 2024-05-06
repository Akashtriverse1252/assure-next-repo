"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { Attachement } from "./svg-components/Attachement";
import { Homecollection } from "@/components/Homecollection";
import UploadForm from "./UploadForm";
import { useData } from "@/context/context";
import Upload from "./svg-components/Upload";
import Download from "./svg-components/Download";
import Link from "next/link";

export const HForm = () => {
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
  };
  const { cartState, cartDispatch } = useData();
  const generateAOSAttributes = (index, baseDelay = 150, step = 30) => {
    const delay = baseDelay + index * step;
    return {
      "data-aos": "fade-up",
      "data-aos-delay": delay,
      "data-aos-duration": 200,
      "data-aos-once": true,
      "data-aos-offset": delay,
      "data-aos-easing": "cubic-bezier(.57,.21,.69,3.25)",
    };
  };

  return (
    <>
      {/* {showDialog ? <UploadForm /> : null} */}

      <div
        className=" d-grid gap-3 gap-sm-1  h_form"
        data-aos="fade-up"
        data-aos-duration={600}
        data-aos-once="true"
        data-aos-easing="ease-in"
      >
        <div className="enquireform _serach__ col-12 col-md-12 mx-auto  ">
          <SearchBar />

          <div className="col-12 _upload_hform  d-sm-none d-lg-block position-relative">
            <Button
              variant="outlined"
              className="MuiInputBase-root formbtn d-flex justify-content-between"
              fullWidth
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })} // Pass a function to onClick
            >
              <label>Upload Prescription</label>
              <span>
                <Upload />
              </span>
            </Button>
          </div>

          <div className="col-12 _upload_hform d-sm-none d-lg-block position-relative">
            <Link href="https://patients.assurepathlabs.com/patient/login" target="_blank">
              <Button
                variant="outlined"
                className="MuiInputBase-root formbtn d-flex justify-content-between"
                fullWidth
              >
                <label>Download Reports</label>
                <span>
                  <Download />
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <Homecollection />
      </div>
    </>
  );
};
