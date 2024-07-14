import { CameraIcon } from "@heroicons/react/24/solid";
import { useRef } from "react";

const SingleImageUploader = ({ image, setImage }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // Set base64 string as the image
      };
      reader.readAsDataURL(file);
    }
  };

  const hiddenFileInput = useRef(null);

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  return (
    <div className="image-container shadow-lg hover:cursor-pointer">
      {!image ? (
        <div className="uploader-container" onClick={handleClick}>
          <CameraIcon className="h-4" />
          Subir imagen
        </div>
      ) : (
        <img
          className="hover:cursor-pointer hover:opacity-80 transition duration-300"
          onClick={handleClick}
          src={image} // Use base64 string as src
          alt="Uploaded Image"
        />
      )}
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default SingleImageUploader;
