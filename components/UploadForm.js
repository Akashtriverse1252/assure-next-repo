"use client";
import React, { useState } from "react";
import {
  AiOutlineFileText,
  AiOutlineFileImage,
  AiOutlineFilePdf,
  AiOutlineFileWord,
} from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { useData } from "@/context/context";
import Modal from "@mui/material/Modal";
import { RxCross2 } from "react-icons/rx";
import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import { HForm } from "./HForm";
import { Homecollection } from "./Homecollection";
import axios from "axios";

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [fileInputValue, setFileInputValue] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showCannotUploadMessage, setShowCannotUploadMessage] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: "akasj  ",
    mobileNumber: "fsakjb",
    email: "ahfiugbknvi",
  });

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/webp",
        "image/png",
        "application/pdf",
        "application/msword",
      ];

      if (
        allowedTypes.includes(selectedFile.type) &&
        selectedFile.size <= 2 * 1024 * 1024
      ) {
        setFileName(selectedFile.name);
        setFileSize((selectedFile.size / 1024).toFixed(1) + " KB");
        setUploadProgress(0);
        setIsFileUploaded(true);
        setShowCannotUploadMessage(false);

        if (selectedFile.type.startsWith("image/")) {
          const reader = new FileReader();
          reader.onload = (e) => {
            setFilePreview(e.target.result);
          };
          reader.readAsDataURL(selectedFile);
        }
      } else {
        setFileName("");
        setFileSize("");
        setUploadProgress(0);
        setShowCannotUploadMessage(true);
        setFilePreview(null);
      }

      // Update form data
      setFormData({
        ...formData,
        file: selectedFile, // Add this line to include the file in form data
      });
    } else {
      setFileName("");
      setFileSize("");
      setUploadProgress(0);
      setFilePreview(null);
    }
  };

  const handleCancelAlertClick = () => {
    setShowCannotUploadMessage(false);
  };

  const handleRemoveFileClick = () => {
    // ... (previous code)

    // Reset form data
    setFormData({
      name: "",
      mobileNumber: "",
      email: "",
    });
  };


  const handleSubmit = async () => {
    try {
      // Validate form fields
      if (!formData.name || !formData.mobileNumber || !formData.email) {
        console.error("Please fill in all required fields.");
        return;
      }

      // Log formData for debugging
      console.log("Form Data:", formData);
      const response = await axios.post(
        "https://www.assurepathlabs.com/api/algos/upload_prescription.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle successful response
      console.log("Upload successful", response.data);

      // Close the modal or perform other actions
      handleClose();
    } catch (error) {
      // Handle API request error
      console.error("Error uploading file:", error.message);
      // Optionally display an error message to the user
    }
  };

  return (
    <>
      <Modal
        open={cartState.uploadFormVisible}
        onClose={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
      >
        <form className="form-container" encType="multipart/form-data">
          <div className="upload-files-container position-relative">
            <div
              className="_cross"
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
            >
              <RxCross2 />
            </div>
            <div className="container prescription-form col-12 flex-center flex-direction-row align-items-start">
              <div className="col-5 float-start upload-prescription-form">
                <h4>
                  <strong>UPLOAD PRESCRIPTION</strong>{" "}
                </h4>

                <div className="input-field flex-center">
                  <TextField
                    label="Name"
                    variant="standard"
                    fullWidth
                    type="text"
                    required
                    id="standard-required"
                    name="name"
                    value={formData.name}
                    onChange={handleFileChange}
                  />
                  <TextField
                    label="Mobile Number"
                    variant="standard"
                    fullWidth
                    type="text"
                    required
                    id="standard-required"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleFileChange}
                  />
                  <TextField
                    label="Email"
                    variant="standard"
                    type="text"
                    name="email"
                    required
                    id="standard-required"
                    value={formData.email}
                    onChange={handleFileChange}
                    fullWidth
                  />
                </div>
                <button
                  type="button"
                  className="button button--aylen button--round-l button--text-thick mt-3"
                  onClick={handleSubmit}
                >
                  <span className="check-icon">Submit</span>
                </button>
              </div>
              <div className="drag-file-area col-7">
                <div className="upload-icon">
                  {isFileUploaded ? (
                    <>
                      {filePreview && (
                        <div className="file-preview d-flex justify-content-center align-items-center">
                          <img
                            src={filePreview}
                            alt="File Preview"
                            className="col-7"
                          />
                        </div>
                      )}
                    </>
                  ) : (
                    <IoCloudUploadOutline />
                  )}
                </div>
                <h3 className="dynamic-message">
                  {isFileUploaded
                    ? "File Successfully Selected!"
                    : "Select file here"}
                </h3>
                <label className="label">
                  {isFileUploaded ? (
                    <>
                      <span>Change your file</span>
                      <span className="browse-files alpha">
                        <input
                          type="file"
                          className="default-file-input"
                          style={{ top: 0 }}
                          onChange={handleFileChange}
                        />
                        <span className="browse-files-text"> Browse again</span>
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="browse-files alpha">
                        <input
                          type="file"
                          className="default-file-input"
                          onChange={handleFileChange}
                        />
                        <span className="browse-files-text">browse file</span>
                        <span> from device</span>
                      </span>
                    </>
                  )}
                </label>
              </div>
            </div>

            {showCannotUploadMessage ? (
              <div className="cannot-upload-message">
                <AiOutlineFileText />
                Please select a valid file (Image, PDF, or Word) less than 2MB
                <span
                  className="material-icons-outlined cancel-alert-button"
                  onClick={handleCancelAlertClick}
                >
                  <MdOutlineCancel />
                </span>
              </div>
            ) : null}

            {isFileUploaded && (
              <div className="file-block">
                <div className="file-info">
                  <span className="file-name">{fileName}</span> |{" "}
                  <span className="file-size">{fileSize}</span>
                </div>
                <span
                  className="material-icons remove-file-icon"
                  onClick={handleRemoveFileClick}
                >
                  <MdOutlineCancel />
                </span>
              </div>
            )}
          </div>
        </form>
      </Modal>

      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Prescription Uploaded Successfully!
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
};

export default UploadForm;
