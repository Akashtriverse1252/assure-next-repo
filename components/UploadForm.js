"use client";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { IoCloudUploadOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useData } from "@/context/context";
import { useAlert } from "@/context/AlerterContext";

const API_URL =
  "http://assure.triverseadvertising.com/api/upload_prescription.php";

const allowedTypes = new Set([
  "image/jpeg",
  "image/jpg",
  "image/webp",
  "image/png",
  "application/pdf",
  "application/msword",
]);

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const { showAlert } = useAlert();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [fileState, setFileState] = useState({
    fileName: "",
    fileSize: "",
    isFileUploaded: false,
    filePreview: null,
  });

  const [uploadPrescription, setUploadPrescription] = useState();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    uploadPrescription: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phone: false,
    email: false,
    files: false,
  });

    const handleFileChange = ({ target: { files, name, value } }) => {
      const selectedFile = files && files[0];
      setUploadPrescription(selectedFile);

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

    showAlert("File Error", errorMessage, "error");
    console.error(errorMessage);
  };

  const handleImageFile = (selectedFile) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setFileState((prevState) => ({
        ...prevState,
        filePreview:
          prevState.uploadPrescription === selectedFile.name
            ? prevState.filePreview
            : e.target.result,
      }));
    };
    reader.readAsDataURL(selectedFile);
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
          uploadPrescription: uploadPrescription,
        };

        const response = await axios.post(API_URL, formDataApi, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        // console.log("this is the api response ", response);

        setIsSubmitting(false);

        const alertType =
          response.status === 200
            ? "success"
            : response.status === 500 || response.status === 404
            ? "error"
            : "info";

        showAlert(
          alertType,
          response.data || `Request Successful: ${response.data}`,
          alertType
        );

        setFormData({
          name: "",
          phone: "",
          email: "",
          uploadPrescription: "",
        });
      } catch (error) {
        setIsSubmitting(false);
        showAlert("Error", "Network error", "error");
        console.error("Error:", error);
        // Handle network errors here and display an error message to the user.
      }
    } else {
      showAlert("Error", "Fail to Submit form", "error");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    const showError = (field, message) => {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: message,
      }));
      showAlert("Error", message, "error");
      newErrors[field] = true;
      isValid = false;
    };

    if (formData.name.trim() === "") {
      showError("name", "Name is required");
    } else if (formData.name.trim().length < 3) {
      showError("name", "Name should have a minimum length of 3 characters");
    }

    if (formData.phone.trim() === "") {
      showError("phone", "Phone Number is required");
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      showError("phone", "Invalid Phone Number format (should be 10 digits)");
    }

    if (formData.email.trim() === "") {
      showError("email", "Email is required");
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        showError("email", "Invalid email format");
      }
    }

    if (!fileState.isFileUploaded) {
      showError("files", "File is required");
    }

    setErrors(newErrors);
    return isValid;
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
            <div className=" prescription-form  flex-center flex-direction-row align-items-start">
              <div className=" float-start upload-prescription-form">
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
                    error={errors.phone}
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
                    error={errors.email}
                  />
                </div>
                <button
                  type="button"
                  className="button button--aylen button--round-l button--text-thick mt-3"
                  onClick={handleSubmit}
                >
                  <span className="check-icon">
                    {isSubmitting ? "Submitting..." : "SUBMIT"}
                  </span>
                </button>
              </div>
              <div className="drag-file-area ">
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
    </>
  );
};

export default UploadForm;
