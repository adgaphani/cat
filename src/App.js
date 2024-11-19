import React from "react";
import FilePicker from "./components/FilePicker";

function App() {
  const handleFileSelect = (file) => {
    console.log("Selected File:", file);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Code Analysis Tool (CAT)</h1>
      <FilePicker onFileSelect={handleFileSelect} />
    </div>
  );
}

export default App;
