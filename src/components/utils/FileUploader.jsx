import { CameraIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const FileUploader = ({ file, setFile, maxFiles }) => {
  const handleFileChange = (e) => {
    e.preventDefault();
    const files = e.target.files;
    if (!file) return;

    const newImage = URL.createObjectURL(file);
    setFile(newImage);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-container shadow-lg hover:cursor-pointer">
      {!file && (
        <div className="uploader-container" onClick={handleClick}>
          <CameraIcon className="h-4" />
          Subir imagen
        </div>
      )}
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {file && (
        <img
          className="hover:cursor-pointer hover:opacity-80 transition duration-300"
          onClick={handleClick}
          src={file}
          alt="Uploaded Image"
        />
      )}
    </div>
  );
};

export default FileUploader;
