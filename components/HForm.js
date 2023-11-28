"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { Attachement } from "./svg-components/Attachement";
import { Homecollection } from "@/components/Homecollection";
import UploadForm from "./UploadForm";
import { useData } from "@/context/context";

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

  return (
    <>
      {/* {showDialog ? <UploadForm /> : null} */}

      <div className="col-12 float-start d-grid gap-3 sm-gap-5 h_form">
        <div className="enquireform col-12 float-start d-none d-sm-block">
          <SearchBar />

          <Button
            variant="outlined"
            className="MuiInputBase-root formbtn d-flex justify-content-between"
            fullWidth
            onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })} // Pass a function to onClick
          >
            <label>Upload Prescription</label>
            <span>
              <Attachement />
            </span>
          </Button>
          {/* <UploadForm /> */}
          {/* <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          /> */}
          <div className="col-12 position-relative">
            <Button
              variant="outlined"
              className="MuiInputBase-root formbtn d-flex justify-content-between"
              fullWidth
            >
              <label>Download Reports</label>
            </Button>
          </div>
        </div>
        <Homecollection />
      </div>
    </>
  );
};
