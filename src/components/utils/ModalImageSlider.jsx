import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Divider,
} from "@nextui-org/react";

const ModalImageSlider = ({ open, handleOpen, images, index }) => {
  return (
    <Modal isOpen={open} onOpenChange={handleOpen} size="xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalBody className="mt-8">
              {images
                .filter((_, i) => i === index)
                .map((image, index) => (
                  <div key={index} className="image-preview">
                    <img
                      src={image}
                      alt={`Uploaded Image ${index + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalImageSlider;
