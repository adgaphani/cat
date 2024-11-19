import React, { useState } from "react";

const FilePicker = ({ onFileSelect }) => {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFileName(file ? file.name : "");
    if (onFileSelect) {
      onFileSelect(file);
    }
  };

  return (
    <div style={{ margin: "20px", textAlign: "center" }}>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ display: "none" }}
        id="file-upload"
      />
      <label htmlFor="file-upload" style={{ cursor: "pointer" }}>
        <button>Select Root Codebase File</button>
      </label>
      {fileName && <p>Selected File: {fileName}</p>}
    </div>
  );
};

export default FilePicker;
