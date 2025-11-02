import {  useEffect, useRef, useState } from "react";
import "./App.css";
import { UploadFile } from "./service/api";

function App() {
  const [file, setFile] = useState(null);
  const [res,setRes] = useState(null);

  const uploadref = useRef();
  const handleUpload = () => {
    uploadref.current.click();
  };
  // console.log(file);


  // api call with data
useEffect(() => {
  const apiCall = async () => {
    if (file) {
      const fileData = new FormData();
      fileData.append("name", file.name);
      fileData.append("file", file);

      try {
        const response = await UploadFile(fileData);
        console.log("response from api", response);
        setRes(response?.path || "");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  apiCall();
}, [file]);



  // event.target.files[0] file1,file2,file2.jpg it pickonly one

  return (
    <div className="container">
      <h1>File Sharing App</h1>
      <div>
        <button
          onClick={() => {
            handleUpload();
          }}
        >
          Upload
        </button>
        {/* event.target.files */}
        <input
          type="file"
          ref={uploadref}
          style={{ display: "none" }}
          onChange={(event) => setFile(event.target.files[0])}
        />
        {/* showing selected file */}
        {file && <p className="file-preview">{file.name}</p>}
         {res && (
          <a href={res} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            {res}
          </a>
        )}
      </div>
     
    </div>
  );
}

export default App;
