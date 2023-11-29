"use client";

import * as React from "react";
import { useState } from "react";
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
import { Alert, Snackbar, Stack } from "@mui/material";

const UploadForm = () => {
  const { cartState, cartDispatch } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [fileInputValue, setFileInputValue] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileFlag, setFileFlag] = useState(0);
  const [showCannotUploadMessage, setShowCannotUploadMessage] = useState(false);
  const [filePreview, setFilePreview] = useState(null);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setIsOpen(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    // Check if a file is selected
    if (selectedFile) {
      // Check if the file type is allowed
      const allowedTypes = [
        "image/jpeg",
        "image/jpg",
        "image/webp",
        "image/png",
        "application/pdf",
        "application/msword",
      ];
      if (allowedTypes.includes(selectedFile.type)) {
        // Check if the file size is less than or equal to 2MB
        if (selectedFile.size <= 2 * 1024 * 1024) {
          setFileName(selectedFile.name);
          setFileSize((selectedFile.size / 1024).toFixed(1) + " KB");
          setFileFlag(0);
          setIsFileUploaded(true);
          setShowCannotUploadMessage(false);

          // Display preview for images
          if (selectedFile.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onload = (e) => {
              setFilePreview(e.target.result);
            };
            reader.readAsDataURL(selectedFile);
          }
        } else {
          // File size exceeds the limit
          setFileName("");
          setFileSize("");
          setFileFlag(0);
          setShowCannotUploadMessage(true);
          setFilePreview(null);
        }
      } else {
        // File type not allowed
        setFileName("");
        setFileSize("");
        setFileFlag(0);
        setShowCannotUploadMessage(true);
        setFilePreview(null);
      }
    } else {
      // No file selected
      setFileName("");
      setFileSize("");
      setFileFlag(0);
      setFilePreview(null);
    }
  };

  const renderFileTypeIcon = () => {
    switch (fileName.split(".").pop().toLowerCase()) {
      case "jpg":
      case "jpeg":
      case "png":
        return <AiOutlineFileImage />;
      case "pdf":
        return <AiOutlineFilePdf />;
      case "doc":
      case "docx":
        return <AiOutlineFileWord />;
      default:
        return <IoCloudUploadOutline />;
    }
  };

  const handleCancelAlertClick = () => {
    setShowCannotUploadMessage(false);
  };

  const handleRemoveFileClick = () => {
    setFileInputValue("");
    setIsFileUploaded(false);
    setFileName("");
    setFileSize("");
    setFileFlag(0);
    setShowCannotUploadMessage(false);
    setFilePreview(null);
  };

  const handleUploadClick = () => {
    if (fileInputValue !== "") {
      if (fileFlag === 0) {
        setFileFlag(1);
        setShowCannotUploadMessage(false);
        let width = 0;
        const id = setInterval(() => {
          if (width >= 390) {
            clearInterval(id);
          } else {
            width += 5;
          }
        }, 50);
      }
    } else {
      setShowCannotUploadMessage(true);
      console.log("file is not uploaded", showCannotUploadMessage);
    }
  };
  const handleSubmit = () => {
    setIsOpen(true);
    cartDispatch({ type: "TOGGLE_UPLOD_FORM" });
    handleRemoveFileClick();
  };

  return (
    <>
      <Modal
        open={cartState.uploadFormVisible}
        onClose={cartState.uploadFormVisible}
      >
        <form className="form-container" encType="multipart/form-data">
          <div className="upload-files-container position-relative">
            <div
              className="_cross"
              onClick={() => cartDispatch({ type: "TOGGLE_UPLOD_FORM" })}
            >
              <RxCross2 />
            </div>
            <div className="drag-file-area">
              <span className=" upload-icon">
                {isFileUploaded ? (
                  <>
                    {filePreview && (
                      <div className="file-preview  d-flex justify-content-center align-item-center">
                        <img
                          src={filePreview}
                          alt="File Preview"
                          className="col-7"
                        />
                      </div>
                    )}
                  </>
                ) : (
                  // renderFileTypeIcon()
                  <IoCloudUploadOutline />
                )}
              </span>
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
                {/* {filePreview && (
                  <div className="file-preview">
                    <img src={filePreview} alt="File Preview" />
                    </div>
                  )} */}
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

            {!isFileUploaded ? (
              <button
                type="button"
                className="button button--aylen button--round-l button--text-thick mt-3"
                onSubmit={handleUploadClick}
              >
                <span className="check_icon">upload</span>
              </button>
            ) : (
              <button
                type="button"
                className="button button--aylen button--round-l button--text-thick mt-3"
                onClick={handleSubmit}
              >
                <span className="check_icon">Submit</span>
              </button>
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
