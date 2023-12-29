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
import { RxCross2 } from "react-icons/rx";
import { Alert, Snackbar, Stack, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useData } from "@/context/context";
import { useAlert } from "@/context/AlerterContext";

const API_URL =
  "http://assure.triverseadvertising.com/api/upload_prescription.php";

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertColor, setAlertColor] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [fileUploadError, setFileUploadError] = useState("");
  const { showAlert } = useAlert();

  const [fileState, setFileState] = useState({
    fileName: "",
    fileSize: "",
    isFileUploaded: false,
    filePreview: null,
  });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    uploadPrescription: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    files: "",
    api: "",
    uploadPrescription: "",
    validation: "",
  });

  const handleFileChange = ({ target: { files, name, value } }) => {
    const selectedFile = files && files[0];

    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
      uploadPrescription: selectedFile,
    }));

    if (selectedFile) {
      handleValidFile(selectedFile);
    } else {
      handleInvalidFile();
    }
  };

  const handleValidFile = (selectedFile) => {
    const allowedTypes = new Set([
      "image/jpeg",
      "image/jpg",
      "image/webp",
      "image/png",
      "application/pdf",
      "application/msword",
    ]);

    if (
      allowedTypes.has(selectedFile.type) &&
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
      handleInvalidFile(selectedFile);
    }
  };

  const handleInvalidFile = (selectedFile) => {
    setFileState({
      fileName: "",
      fileSize: "",
      isFileUploaded: false,
      filePreview: null,
    });

    let errorMessage = "Invalid files. ";

    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      errorMessage += "File size should be less than 2MB. ";
    }

    if (!selectedFile || !selectedFile.type || !selectedFile.size) {
      errorMessage += "File is required. ";
    }

    if (
      selectedFile &&
      selectedFile.type &&
      !allowedTypes.has(selectedFile.type)
    ) {
      errorMessage += "Invalid file type. ";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      files: errorMessage,
    }));

    setFileUploadError(errorMessage);

    console.error(errorMessage);
  };

  const handleImageFile = (selectedFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileState(({ filePreview, ...prevState }) => ({
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
    setFormData((prevValues) => ({
      ...prevValues,
      uploadPrescription: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        const formDataApi = {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          uploadPrescription: formData.uploadPrescription,
        };

        const response = await axios.post(API_URL, formDataApi, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log("this is the api response ", response);

        setIsSubmitting(false);

        if (response.status === 200) {
          // Green Alert for 200
          setAlertColor("success");
          setAlertMessage("Prescription Uploaded Successfully!");
        } else if (response.status === 500 || response.status === 404) {
          // Red Alert for 500 or 404
          setAlertColor("error");
          setAlertMessage(`Server Error: ${response.data}`);
        } else {
          // Blue Alert for other status codes
          setAlertColor("info");
          setAlertMessage(`Request Successful: ${response.data}`);
        }

        setIsOpen(true);
      } catch (error) {
        setIsSubmitting(false);
        console.error("Error:", error);
        // Handle network errors here and display an error message to the user.
      }
    } else {
      setIsErrorOpen(true);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      showAlert('Name', 'Name is required', 'error');
      isValid = false;
    }

    if (formData.name.trim().length < 3) {
      newErrors.name = "Name should have a minimum length of 3 characters";
      isValid = false;
    }

    if (formData.phone.trim() === "") {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number format (should be 10 digits)";
      isValid = false;
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
      isValid = false;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
        isValid = false;
      }
    }

    // File validation
    if (!fileState.isFileUploaded) {
      newErrors.files = "File is required";
      isValid = false;
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
                    name="phone"
                    value={formData.phone}
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
                      name="uploadPrescription"
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

            {/* {showCannotUploadMessage && (
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
            )} */}

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
      <Snackbar open={isOpen} autoHideDuration={4000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={alertColor}
          sx={{ width: "100%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default UploadForm;
