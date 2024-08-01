import { DocumentArrowUpIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const InputFileUploader = ({ handleFileChange }) => {
  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <>
      <button
        className="w-full bg-teal-500 flex justify-center items-center px-2 rounded-md shadow-md  text-white"
        onClick={handleClick}
      >
        <DocumentArrowUpIcon className="h-4" />
        <span className="text-sm">Subir archivos</span>
      </button>
      <input
        className="inputfile"
        multiple
        type="file"
        ref={hiddenFileInput}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </>
  );
};

export default InputFileUploader;
