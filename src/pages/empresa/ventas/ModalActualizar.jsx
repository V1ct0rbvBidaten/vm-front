import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Input,
} from "@nextui-org/react";

const ModalActualizar = ({
  open,
  handleOpen,
  estado,
  handleUpdate,
  setEstadoUpdate,
}) => {
  return (
    <Modal isOpen={open} onOpenChange={handleOpen}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Actualizar Venta
            </ModalHeader>
            <ModalBody>
              {estado === "EN PROCESO" ? (
                <Select
                  placeholder="Seleccione un estado"
                  label="Estado"
                  className="w-full"
                  variant="bordered"
                  onChange={(e) => setEstadoUpdate(e.target.value)}
                >
                  <SelectItem key="REQUIERE REVISIÓN" value="REQUIERE REVISIÓN">
                    Requiere Revisión
                  </SelectItem>
                  <SelectItem key="RECHAZADA" value="RECHAZADA">
                    Rechazada
                  </SelectItem>
                  <SelectItem key="COMPLETADA" value="COMPLETADA">
                    Completada
                  </SelectItem>
                </Select>
              ) : (
                <Select
                  placeholder="Seleccione un estado"
                  label="Estado"
                  className="w-full"
                  variant="bordered"
                  onChange={(e) => setEstadoUpdate(e.target.value)}
                >
                  <SelectItem key="RECHAZADA" value="RECHAZADA">
                    Rechazada
                  </SelectItem>
                  <SelectItem key="COMPLETADA" value="COMPLETADA">
                    Completada
                  </SelectItem>
                </Select>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={handleUpdate}>
                Actualizar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalActualizar;
