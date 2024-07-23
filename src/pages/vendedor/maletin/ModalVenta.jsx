import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  ButtonGroup,
} from "@nextui-org/react";

const ModalVenta = ({ open, handleOpen }) => {
  return (
    <Modal isOpen={open} onOpenChange={handleOpen} size="5xl">
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Vender Producto
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-2 gap-2">
                <div
                  className="grid grid-cols-2 gap-4 p-4 justify-start items-start h-auto 
                border-1 rounded-md
                "
                  style={{ alignSelf: "flex-start" }}
                >
                  <h1 className="text-lg col-span-2 font-semibold">
                    Detalles de la venta
                  </h1>
                  <div className="col-span-2 grid grid-cols-2 gap-4 border-1 rounded-md p-2">
                    <span className="text-sm col-span-2">
                      Cantidad de productos:
                    </span>
                    <div className="col-span-2 w-full flex justify-between items-center gap-2">
                      <ButtonGroup>
                        <Button
                          size="sm"
                          className="bg-stone-100 font-bold text-lg"
                        >
                          -
                        </Button>
                        <Button size="sm" className="bg-white ">
                          0 Productos
                        </Button>
                        <Button
                          size="sm"
                          className="bg-stone-100 font-bold text-lg"
                        >
                          +
                        </Button>
                      </ButtonGroup>
                      <Input
                        variant="bordered"
                        size="sm"
                        className=""
                        label="Total"
                        labelPlacement="outside-left"
                        placeholder="$"
                      />
                    </div>
                    <ButtonGroup className="w-full col-span-2">
                      <Button
                        size="sm"
                        className="bg-stone-100  text-sm w-full"
                      >
                        Descargar Documentación
                      </Button>
                      <Button
                        size="sm"
                        className="bg-sky-700  text-sm w-full text-white"
                      >
                        Subir Documentación
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 p-4 border-1 rounded-md">
                  <h1 className="text-lg col-span-2 font-semibold">
                    Datos del comprador
                  </h1>
                  <Input
                    variant="bordered"
                    label="Nombre"
                    labelPlacement="outside"
                    placeholder="Ingrese nombre cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Rut"
                    labelPlacement="outside"
                    placeholder="Ingrese rut cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Correo"
                    labelPlacement="outside"
                    placeholder="Ingrese Correo cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Telefono"
                    labelPlacement="outside"
                    placeholder="Ingrese Telefono cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Calle"
                    labelPlacement="outside"
                    placeholder="Ingrese Calle cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Número"
                    labelPlacement="outside"
                    placeholder="Ingrese Número cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Dpto/Casa"
                    labelPlacement="outside"
                    placeholder="Ingrese Dpto/Casa cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Región"
                    labelPlacement="outside"
                    placeholder="Ingrese Región cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Ciudad"
                    labelPlacement="outside"
                    placeholder="Ingrese Ciudad cliente"
                  />
                  <Input
                    variant="bordered"
                    label="Comuna"
                    labelPlacement="outside"
                    placeholder="Ingrese Comuna cliente"
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onPress={onClose}>
                Confirmar Venta
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalVenta;
