import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

export const FileUploader = ({ handleFileChange }) => {
  // REVISED
  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  return (
    <>
      <button className="button-upload" onClick={handleClick}>
        <DocumentArrowUpIcon className="h-6" />
        Seleccionar archivo
      </button>
      <input
        className="inputfile"
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </>
  );
};
