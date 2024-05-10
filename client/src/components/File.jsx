import React from "react";
import "../style/file.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCommentDots,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
library.add(faCommentDots, faFileArrowDown);

const File = () => {
  const extractFileNameAndExtension = (path) => {
    const parts = path.split("/");
    const filenameWithExtension = parts[parts.length - 1];
    const filenameParts = filenameWithExtension.split(".");
    const filename = filenameParts.slice(0, -1).join(".");
    const extension = filenameParts[filenameParts.length - 1];

    return { filename, extension };
  };

  return (
    <div className="file-container">
      <div className="file-name-extension">
        <span className="file-name">Document some times this is so long</span>
        <span className="extension">.docx</span>
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
          style={{ color: "#1d99ff" }}
        />
      </div>
    </div>
  );
};

export default File;
