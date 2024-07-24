import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Tabs,
  Tab,
  ButtonGroup,
} from "@nextui-org/react";
import { useState } from "react";
import { createVenta } from "../../../api/ventas";
import { useSelector } from "react-redux";

const initialState = {
  id_vendedor: "",
  id_empresa: "",
  id_producto: "",
  cantidad: 0,
  precio_venta: 0,
  estado_venta: "COMPLETADA",
  tipo_pago: "BOLETA",
  nombre_cliente: "",
  apellido_cliente: "",
  direccion_cliente: "",
  region_cliente: "",
  comuna_cliente: "",
  telefono_cliente: "",
  email: "",
  rut_cliente: "",
};

const ModalVenta = ({ open, handleOpen, data }) => {
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.id_vendedor = user.id_vendedor;
    values.id_empresa = data.id_empresa;
    values.id_producto = data.id_producto;
    console.log(data);
    console.log(values);
    setLoading(true);
    createVenta(user.token, values)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const {
    cantidad,
    precio_venta,
    estado_venta,
    tipo_pago,
    nombre_cliente,
    apellido_cliente,
    direccion_cliente,
    region_cliente,
    comuna_cliente,
    telefono_cliente,
    email,
    rut_cliente,
  } = values;

  const {
    nombre_producto,
    precio,
    descripcion,
    imagen_principal,
    categoria,
    comision,
    estado_producto,
    id_empresa,
    imagenes,
    id_producto,
  } = data;

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
                  <div className="col-span-2 grid grid-cols-2 gap-6  p-2">
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

                    <span className="text-sm col-span-2">
                      Tipo de documento:
                    </span>
                    <Tabs aria-label="Tabs sizes" className="w-full col-span-2">
                      <Tab key="factura" title="Factura" />
                      <Tab key="boleta" title="Boleta" />
                    </Tabs>
                    <ButtonGroup className="w-full col-span-2 ">
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
                    size="sm"
                    variant="bordered"
                    label="Nombre"
                    labelPlacement="outside"
                    placeholder="Ingrese nombre cliente"
                    name="nombre_cliente"
                    value={nombre_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Apellido"
                    labelPlacement="outside"
                    placeholder="Ingrese apellido cliente"
                    name="apellido_cliente"
                    value={apellido_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Rut"
                    labelPlacement="outside"
                    placeholder="Ingrese rut cliente"
                    name="rut_cliente"
                    value={rut_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Correo"
                    labelPlacement="outside"
                    placeholder="Ingrese Correo cliente"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Telefono"
                    labelPlacement="outside"
                    placeholder="Ingrese Telefono cliente"
                    name="telefono_cliente"
                    value={telefono_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Calle"
                    labelPlacement="outside"
                    placeholder="Ingrese Calle cliente"
                    name="direccion_cliente"
                    value={direccion_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Número"
                    labelPlacement="outside"
                    placeholder="Ingrese Número cliente"
                    // name="numero_cliente"
                    // value={direccion_cliente}
                    // onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Dpto/Casa"
                    labelPlacement="outside"
                    // placeholder="Ingrese Dpto/Casa cliente"
                    // name="dpto_casa_cliente"
                    // value={direccion_cliente}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Región"
                    labelPlacement="outside"
                    placeholder="Ingrese Región cliente"
                    name="region_cliente"
                    value={region_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Ciudad"
                    labelPlacement="outside"
                    placeholder="Ingrese Ciudad cliente"
                  />
                  <Input
                    size="sm"
                    variant="bordered"
                    label="Comuna"
                    labelPlacement="outside"
                    placeholder="Ingrese Comuna cliente"
                    name="comuna_cliente"
                    value={comuna_cliente}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button color="primary" onClick={handleSubmit}>
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
