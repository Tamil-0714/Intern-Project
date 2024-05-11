import React from "react";
import "../style/file.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCommentDots,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCommentDots, faFileArrowDown);

const File = ({ fileBase64, fileExtension, fileName }) => {
  const handleFileDownload = async () => {
    // Convert Base64 string to Blob
    console.log("file downloaded");
    const byteCharacters = atob(fileBase64);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], {
      type: `application/${fileExtension}`,
    });

    // Create a download link
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${fileName}.${fileExtension}`;
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    window.URL.revokeObjectURL(url);
    document.body.removeChild(link);
  };
  return (
    <div className="file-container">
      <div className="file-name-extension">
        <span className="file-name">{fileName}</span>
        <span className="extension">{"." + fileExtension}</span>
      </div>
      <div className="btn-container">
        <FontAwesomeIcon
          icon={faCommentDots}
          size="2x"
          className="btn-msg btn"
          style={{ color: "#1d99ff" }}
        />
        <FontAwesomeIcon
          icon={faFileArrowDown}
          size="2x"
          className="btn btn-download"
          onClick={handleFileDownload}
          style={{ color: "#1d99ff" }}
        />
      </div>
    </div>
  );
};

export default File;
