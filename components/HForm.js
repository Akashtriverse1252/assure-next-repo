"use client";
import { useRef, useState } from "react";
import { Button } from "@mui/material";
import SearchBar from "@/components/SearchBar";
import { Attachement } from "./svg-components/Attachement";
import { Homecollection } from "@/components/Homecollection";
import UploadForm from "./UploadForm";

export const HForm = () => {
  const [showDialog, setShowDialog] = useState(false);
  const fileInputRef = useRef(null);
  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };
  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
  };

  return (
    <>
      {showDialog ? <UploadForm /> : null}

      <div className="col-12 float-start d-grid gap-5">
        <div className="enquireform col-12 float-start">
          <SearchBar />

          <Button
            variant="outlined"
            className="MuiInputBase-root formbtn d-flex justify-content-between"
            fullWidth
            onClick={() => setShowDialog(true)} // Pass a function to onClick
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
