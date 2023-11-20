"use client";

import { useState } from "react";
import { UploadIcon } from "../components/svg-components/UploadIcon";
import { UploadComplete } from "../components/svg-components/UploadComplete";
import { FaCheck } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import {
  AiFillExclamationCircle,
  AiOutlineDelete,
  AiOutlineFileText,
} from "react-icons/ai";

const UploadForm = () => {
  const [isOpen, setIsOpen] = useState(true);

  const [fileInputValue, setFileInputValue] = useState("");
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileFlag, setFileFlag] = useState(0);
  const [showCannotUploadMessage, setShowCannotUploadMessage] = useState(false);
  console.log(showCannotUploadMessage);

  const handleFileInputChange = () => {
    setFileInputValue("");
    setIsFileUploaded(false);
    setFileName("");
    setFileSize("");
    setFileFlag(0);
    setShowCannotUploadMessage(false);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFileName(selectedFile.name);
      setFileSize((selectedFile.size / 1024).toFixed(1) + " KB");
      setFileFlag(0);
      setIsFileUploaded(true);
      console.log("now file is uploaded", isFileUploaded);
    } else {
      setFileName("");
      setFileSize("");
      setFileFlag(0);
    }
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
  };
  return (
    <>
      {isOpen ? (
        <form className="form-container" encType="multipart/form-data">
          <div
            className="_cross"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <RxCross1 />
          </div>
          <div className="upload-files-container">
            <div className="drag-file-area">
              <span className=" upload-icon">
                {isFileUploaded ? (
                  <UploadComplete />
                ) : (
                  <>
                    <UploadIcon />
                  </>
                )}
              </span>
              <h3 className="dynamic-message">
                {isFileUploaded
                  ? "File Dropped Successfully!"
                  : "Drag & drop any file here"}
              </h3>
              <label className="label">
                {isFileUploaded ? (
                  <>
                    <span>drag & drop or</span>
                    <span className="browse-files alpha">
                      <input
                        type="file"
                        className="default-file-input"
                        style={{ top: 0 }}
                        onChange={handleFileChange}
                      />
                      <span className="browse-files-text"> Browse File</span>
                    </span>
                  </>
                ) : (
                  <>
                    {/* <span>or</span> */}
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
                <AiFillExclamationCircle />
                Please select a file first
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
                  <span className="material-icons-outlined file-icon">
                    <AiOutlineFileText />
                  </span>
                  <span className="file-name">{fileName}</span> |{" "}
                  <span className="file-size">{fileSize}</span>
                </div>
                <span
                  className="material-icons remove-file-icon"
                  onClick={handleRemoveFileClick}
                >
                  <AiOutlineDelete />
                </span>
                <div
                  className="progress_bar"
                  style={{ width: isFileUploaded ? "96%" : "0" }}
                />
              </div>
            )}
            <button
              type="button"
              className="button button--aylen button--round-l button--text-thick mt-3"
              onClick={handleUploadClick}
              disabled={isFileUploaded}
            >
              {isFileUploaded ? (
                <span className="check_icon">
                  <FaCheck />
                </span>
              ) : (
                "Upload"
              )}
            </button>
          </div>
        </form>
      ) : null}
    </>
  );
};

export default UploadForm;
