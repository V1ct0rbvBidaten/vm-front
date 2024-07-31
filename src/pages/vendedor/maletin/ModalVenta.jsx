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
  Select,
  SelectItem,
  ButtonGroup,
} from "@nextui-org/react";
import { useState } from "react";
import { createVenta } from "../../../api/ventas";
import { useSelector } from "react-redux";
import {
  formatChileanPhoneNumber,
  formatNumberToCurrency,
  formatRut,
} from "../../../functions/formaters";
import regiones from "../../../utils/regiones";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const initialState = {
  id_vendedor: "",
  id_empresa: "",
  id_producto: "",
  cantidad: 0,
  precio_venta: 0,
  tipo_documento: "BOLETA",
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
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [cantidad, setCantidad] = useState(0);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [filteredComunas, setFilteredComunas] = useState([]);

  const handleRegionChange = (event) => {
    const { value } = event.target;
    setSelectedRegion(value);
    handleChange(event);

    const region = regiones.Regiones.find((reg) => reg.Nombre === value);
    if (region) {
      setFilteredComunas(region.Comunas);
    } else {
      setFilteredComunas([]);
    }
  };

  const handleChange = (e) => {
    if (e.target.name === "rut_cliente") {
      setValues({
        ...values,
        [e.target.name]: formatRut(e.target.value),
      });
    } else if (e.target.name === "telefono_cliente") {
      setValues({
        ...values,
        [e.target.name]: formatChileanPhoneNumber(e.target.value),
      });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    values.id_vendedor = user.id_vendedor;
    values.id_empresa = data.id_empresa;
    values.id_producto = data.id_producto;
    values.cantidad = cantidad;
    console.log(data);
    console.log(values);
    setLoading(true);
    createVenta(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Venta creada con éxito");
        navigate(`/vendedor/ventas/${res.data.detail.data.id_venta}`);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error al crear venta");
      })
      .finally((res) => {
        setLoading(false);
      });
  };

  const {
    precio_venta,
    estado_venta,
    tipo_documento,
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
                          onClick={() => {
                            if (cantidad > 0) setCantidad(cantidad - 1);
                          }}
                        >
                          -
                        </Button>
                        <Button size="sm" className="bg-white ">
                          {cantidad} Productos
                        </Button>
                        <Button
                          size="sm"
                          className="bg-stone-100 font-bold text-lg"
                          onClick={() => setCantidad(cantidad + 1)}
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
                        value={formatNumberToCurrency(cantidad * precio)}
                      />
                    </div>

                    <Select
                      variant="bordered"
                      label="Tipo de documento"
                      labelPlacement="outside"
                      placeholder="Seleccione tipo de documento"
                      className="col-span-2"
                      name="tipo_documento"
                      value={tipo_documento}
                      onChange={handleChange}
                    >
                      <SelectItem value="BOLETA">Boleta</SelectItem>
                      <SelectItem value="FACTURA">Factura</SelectItem>
                    </Select>
                    <ButtonGroup className="w-full col-span-2 ">
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
                    label="Dirección"
                    labelPlacement="outside"
                    placeholder="Ingrese Calle cliente"
                    name="direccion_cliente"
                    value={direccion_cliente}
                    onChange={handleChange}
                  />

                  <Select
                    variant="bordered"
                    label="Región "
                    labelPlacement="outside"
                    placeholder="Ingrese región "
                    name="region_cliente"
                    value={selectedRegion}
                    onChange={handleRegionChange}
                  >
                    {regiones.Regiones.map((region) => (
                      <SelectItem key={region.Nombre} value={region.Nombre}>
                        {region.Nombre}
                      </SelectItem>
                    ))}
                  </Select>
                  <Select
                    variant="bordered"
                    label="Comuna "
                    labelPlacement="outside"
                    placeholder="Ingrese comuna "
                    name="comuna_cliente"
                    value={comuna_cliente}
                    onChange={handleChange}
                    disabled={!selectedRegion}
                  >
                    {filteredComunas.map((comuna) => (
                      <SelectItem key={comuna} value={comuna}>
                        {comuna}
                      </SelectItem>
                    ))}
                  </Select>
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
