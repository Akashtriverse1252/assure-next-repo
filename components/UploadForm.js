"use client";
import React, { useRef, useState } from "react";
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
import axios from "axios";

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [showCannotUploadMessage, setShowCannotUploadMessage] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fileState, setFileState] = useState({
    fileName: "",
    fileSize: "",
    isFileUploaded: false,
    filePreview: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    files: "",
    api: "",
    validation: "", // Corrected the typo
  });

  const handleFileChange = (e) => {
    const selectedFile = e.target.files && e.target.files[0];
    const { name, value } = e.target;

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));

    if (selectedFile) {
      handleValidFile(selectedFile);
    } else {
      handleInvalidFile();
    }
  };

  const handleValidFile = (selectedFile) => {
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
      setFileState((prevState) => ({
        ...prevState,
        fileName: selectedFile.name,
        fileSize: (selectedFile.size / 1024).toFixed(1) + " KB",
        isFileUploaded: true,
      }));

      if (selectedFile.type.startsWith("image/")) {
        handleImageFile(selectedFile);
      }
    } else {
      handleInvalidFile();
    }
  };

  const handleInvalidFile = () => {
    setFileState({
      fileName: "",
      fileSize: "",
      isFileUploaded: false,
      filePreview: null,
    });
    console.error("Invalid files. Please select a valid file type and size.");
  };

  const handleImageFile = (selectedFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileState((prevState) => ({
        ...prevState,
        filePreview: e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleCancelAlertClick = () => {
    setShowCannotUploadMessage(false);
  };

  const handleRemoveFileClick = () => {
    setFormData({
      name: "",
      phoneNumber: "",
      email: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);

        const formDataApi = {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          file: fileState.fileName,
        };
        console.log("this is the api data", formDataApi);

        const response = await axios.post(
          "https://www.assurepathlabs.com/api/algos/upload_prescription.php",
          formDataApi, // Change formDataObject to formData
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setIsSubmitting(false);

        if (response.data.success) {
          setShowThankYou(true);
          onStateChange(true);
          setFormData({
            name: "",
            email: "",
            mobile: "",
          });
        } else {
          // Handle server errors here and display an error message to the user.
        }
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error:", error);
        // Handle network errors here and display an error message to the user.
      }
    } else {
      setIsErrorOpen(true);
      console.log("Form validation failed:", errors);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name should have a minimum length of 3 characters";
      isValid = false;
    }

    if (formData.phoneNumber.trim() === "") {
      newErrors.phoneNumber = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Invalid phone number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      // Check if the email format is valid
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCloseError = () => {
    setIsErrorOpen(false);
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
                <div className="input-field flex-center flex-direction-column">
                  <TextField
                    type="text"
                    required
                    id="name"
                    defaultValue="Name"
                    variant="standard"
                    label="Name"
                    name="name"
                    value={formData.name}
                    error={errors.name}
                    fullWidth
                    onChange={handleFileChange}
                  />
                  <TextField
                    label="Mobile Number"
                    variant="standard"
                    fullWidth
                    type="text"
                    required
                    id="standard-required"
                    name="phoneNumber"
                    value={formData.phoneNumber}
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
                  {fileState.isFileUploaded ? (
                    <div className="file-preview d-flex justify-content-center align-items-center">
                      <img
                        src={fileState.filePreview}
                        alt="File Preview"
                        className="col-7"
                      />
                    </div>
                  ) : (
                    <IoCloudUploadOutline />
                  )}
                </div>
                <h3 className="dynamic-message">
                  {fileState.isFileUploaded
                    ? "File Successfully Selected!"
                    : "Select file here"}
                </h3>
                <label className="label">
                  <div className="browse-files alpha">
                    <input
                      id="prescription"
                      name="image"
                      accept="image/*"
                      type="file"
                      className="default-file-input"
                      style={fileState.isFileUploaded ? { top: 0 } : {}}
                      onChange={handleFileChange}
                    />
                    <span className="browse-files-text">
                      {fileState.isFileUploaded
                        ? "Browse again"
                        : "Browse file from device"}
                    </span>
                    {fileState.isFileUploaded && <span>Change your file</span>}
                  </div>
                </label>
              </div>
            </div>

            {showCannotUploadMessage && (
              <div className="cannot-upload-message">
                <AiOutlineFileText />
                Please select a valid file (Image, PDF, or Word) less than 2MB
                <div
                  className="material-icons-outlined cancel-alert-button"
                  onClick={handleCancelAlertClick}
                >
                  <MdOutlineCancel />
                </div>
              </div>
            )}

            {fileState.isFileUploaded && (
              <div className="file-block">
                <div className="file-info">
                  <span className="file-name">{fileState.fileName}</span> |{" "}
                  <span className="file-size">{fileState.fileSize}</span>
                </div>
                <div
                  className="material-icons remove-file-icon"
                  onClick={handleRemoveFileClick}
                >
                  <MdOutlineCancel />
                </div>
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

      <Stack spacing={2} sx={{ width: "100%" }}>
        {Object.values(errors).some((error) => error !== "") && (
          <Snackbar
            open={isErrorOpen}
            autoHideDuration={4000}
            onClose={handleCloseError}
          >
            <Alert
              onClose={handleCloseError}
              severity="error"
              sx={{ width: "100%" }}
            >
              {Object.values(errors).map(
                (error, index) => error !== "" && <div key={index}>{error}</div>
              )}
            </Alert>
          </Snackbar>
        )}
      </Stack>
    </>
  );
};

export default UploadForm;
