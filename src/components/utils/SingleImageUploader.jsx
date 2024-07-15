import { CameraIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const SingleImageUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;

    const newImage = URL.createObjectURL(file);
    setImage(newImage);
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-container shadow-lg hover:cursor-pointer">
      {!image && (
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
        onChange={handleImageChange}
      />
      {image && (
        <img
          className="hover:cursor-pointer hover:opacity-80 transition duration-300"
          onClick={handleClick}
          src={image}
          alt="Uploaded Image"
        />
      )}
    </div>
  );
};

export default SingleImageUploader;
