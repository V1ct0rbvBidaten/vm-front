import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import TerminoCondiciones from "./TerminoCondiciones";

const ModalVerificarTerminos = ({
  open,
  handleOpen,
  handleSubmit,
  onScroll,
  endReached,
}) => {
  return (
    <Modal
      isOpen={open}
      onOpenChange={handleOpen}
      scrollBehavior="inside"
      size="2xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Términos y Condiciones: Empresa
            </ModalHeader>
            <ModalBody onScroll={onScroll} className="p-0">
              <TerminoCondiciones />
            </ModalBody>
            <ModalFooter>
              {endReached ? (
                <Button
                  className="bg-gradient-to-r from-v3 to-v4 text-white w-full"
                  onClick={handleSubmit}
                  isDisabled={false}
                >
                  Aceptar
                </Button>
              ) : (
                <Button
                  className="bg-gradient-to-r from-v3 to-v4 text-white w-full"
                  onClick={handleSubmit}
                  isDisabled={true}
                >
                  Aceptar
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalVerificarTerminos;
