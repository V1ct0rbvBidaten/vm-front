import {
  CameraIcon,
  PlusCircleIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useRef, useState } from "react";

const MultipleImageUploader = ({ maxImages = 10, images, setImages }) => {
  const hiddenFileInput = useRef(null);
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [];

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        newImages.push(reader.result);
        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    hiddenFileInput.current.click();
  };

  const handleRemoveImage = (e, index) => {
    e.preventDefault();
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className="">
      <input
        type="file"
        ref={hiddenFileInput}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleImageChange}
        multiple
      />
      <div className="grid grid-cols-5 gap-2">
        {Array.from({ length: maxImages }, (_, index) => (
          <div key={index} className="image-preview">
            {images[index] ? (
              <div className=" rounded-sm w-full image-container">
                <img
                  className="hover:cursor-pointer hover:opacity-80 transition duration-300"
                  src={images[index]}
                  alt={`Uploaded Image ${index + 1}`}
                  onClick={() => handleRemoveImage(index)}
                />
                <button
                  className="rounded-sm h-7  bg-rose-500 absolute flex justify-center items-center text-white p-2 bottom-0 w-full"
                  onClick={(e) => handleRemoveImage(e, index)}
                >
                  <TrashIcon className="h-5" />
                </button>
              </div>
            ) : (
              <div
                className="skeleton h-32 rounded-[10px] shadow-md w-full bg-gray-200 animate-pulse flex justify-center items-center hover:cursor-pointer"
                onClick={handleClick}
              >
                <PlusCircleIcon className="h-6" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleImageUploader;
