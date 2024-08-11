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
            <ModalBody className="mt-8 ">
              {images
                .filter((_, i) => i === index)
                .map((image, index) => (
                  <div
                    key={index}
                    className="  overflow-hidden h-[500px] flex justify-center items-center"
                  >
                    <img
                      src={image}
                      alt={`Uploaded Image ${index + 1}`}
                      className=" h-full object-cover"
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
