import "./App.css";
import { useEffect, useRef, useState } from "react";
import { uploadFile } from "./services/api";

function App() {
  const fileInputRef = useRef();
  const [file, setFile] = useState("");
  const [result, setResult] = useState("");
  const onUploadClick = async () => {
    await fileInputRef.current.click();
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = await new FormData();
        data.append("name", file.name);
        data.append("file", file);
        let res = await uploadFile(data);
        setResult(res.path);
      }
    };
    getImage();
  }, [file]);

  return (
    <div className="App">
      <div className="wrapper">
        <h1>Simple File Sharing!</h1>
        <p>Upload and Share the download link.</p>
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileInputRef}
        />
        <a href={result} rel="noreferrer">
          {result}
        </a>
      </div>
    </div>
  );
}

export default App;
