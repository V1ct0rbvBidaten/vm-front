import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  ModalHeader,
} from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMaletines from "../../../../hooks/useMaletines";
import { getProductInMaletin, updateMaletin } from "../../../../api/maletin";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ModalMaletin = ({ open, handleOpen, handleUpdateMaletin, loading }) => {
  return (
    <Modal isOpen={open} onOpenChange={handleOpen}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h1>¿Desea agregar este producto a su maletín?</h1>
            </ModalHeader>

            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button
                className="bg-emerald-500 text-white"
                onClick={handleUpdateMaletin}
                isLoading={loading}
              >
                Confirmar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalMaletin;
