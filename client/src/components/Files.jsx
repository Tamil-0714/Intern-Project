import React from "react";
import File from "./File.jsx";
import "../style/files.css";

const Files = ({ userId, fileData }) => {
  console.log(fileData);
  return (
    <div className="files-container">
      {/* <File
        fileBase64={fileDatum.fileBase64}
        fileExtension={fileDatum.fileExtension}
        fileName={fileDatum.fileName}
      /> */}
      {fileData.map((fileDatum, i) => {
        return (
          <File
            fileBase64={fileDatum.fileBase64}
            fileExtension={fileDatum.fileExtension}
            fileName={fileDatum.fileName}
          />
        );
      })}
      {/* <File /> */}
    </div>
  );
};

export default Files;
