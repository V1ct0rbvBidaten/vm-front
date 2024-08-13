import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
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
import ReactSelect from "react-select";

const initialState = {
  id_vendedor: "",
  id_empresa: "",
  id_producto: "",
  cantidad: 0,
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
    values.precio_venta = data.precio;
    setLoading(true);
    createVenta(user.token, values)
      .then((res) => {
        toast.success("Venta creada con éxito");
        navigate(`/vendedor/ventas/${res.data.detail.data.id_venta}`);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleRegionChange = (value) => {
    setSelectedRegion(value.value);

    const event = {
      target: {
        name: "region_cliente",
        value: value.value,
      },
    };
    handleChange(event);

    const regionObj = regiones.Regiones.find(
      (reg) => reg.Nombre === value.value
    );
    if (regionObj) {
      setFilteredComunas(regionObj.Comunas);
    } else {
      setFilteredComunas([]);
    }
  };

  const handleComunaChange = (value) => {
    const event = {
      target: {
        name: "comuna_cliente",
        value: value.value,
      },
    };
    handleChange(event);
  };

  const optionsRegiones = regiones.Regiones.map((c) => {
    return { value: c.Nombre, label: c.Nombre };
  });

  const optionsComunas = filteredComunas.map((c) => {
    return { value: c, label: c };
  });

  return (
    <Modal
      isOpen={open}
      onOpenChange={handleOpen}
      size="5xl"
      scrollBehavior="inside"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Vender Producto
            </ModalHeader>
            <ModalBody>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="grid grid-cols-1 gap-4 p-4 border rounded-md">
                  <h1 className="text-lg font-semibold">
                    Detalles de la venta
                  </h1>
                  <div className="w-full flex flex-col gap-2">
                    <span className="text-sm">Cantidad de productos:</span>
                    <div className="flex justify-between items-center gap-2">
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
                        <Button size="sm" className="bg-white">
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
                        label="Total"
                        labelPlacement="outside-left"
                        placeholder="$"
                        value={formatNumberToCurrency(cantidad * data.precio)}
                        readOnly
                      />
                    </div>
                    <Select
                      variant="bordered"
                      label="Tipo de documento"
                      labelPlacement="outside"
                      placeholder="Seleccione tipo de documento"
                      className="w-full"
                      name="tipo_documento"
                      value={values.tipo_documento}
                      onChange={handleChange}
                    >
                      <SelectItem key="BOLETA" value="BOLETA">
                        Boleta
                      </SelectItem>
                      <SelectItem key="FACTURA" value="FACTURA">
                        Factura
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 p-4 border rounded-md">
                  <h1 className="text-lg font-semibold">Datos del comprador</h1>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm">
                      Región <span className="text-rose-500">*</span>
                    </span>
                    <ReactSelect
                      options={optionsRegiones}
                      required
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          borderRadius: "0.7rem",
                          border: "2px solid #eaeaea",
                        }),
                        menu: (base) => ({
                          ...base,
                          zIndex: 9999,
                        }),
                      }}
                      onChange={handleRegionChange}
                      placeholder="Seleccione región"
                      value={
                        optionsRegiones.find(
                          (option) => option.value === selectedRegion
                        ) || null
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-sm">
                      Comuna <span className="text-rose-500">*</span>
                    </span>
                    <ReactSelect
                      options={optionsComunas}
                      styles={{
                        control: (baseStyles) => ({
                          ...baseStyles,
                          borderRadius: "0.7rem",
                          border: "2px solid #eaeaea",
                        }),
                        menu: (base) => ({
                          ...base,
                          zIndex: 9999,
                        }),
                      }}
                      onChange={handleComunaChange}
                      isDisabled={!selectedRegion}
                      placeholder="Seleccione comuna"
                      value={
                        optionsComunas.find(
                          (option) => option.value === values.comuna_cliente
                        ) || null
                      }
                    />
                  </div>
                  <Input
                    variant="bordered"
                    isRequired
                    label="Nombre"
                    labelPlacement="outside"
                    placeholder="Ingrese nombre cliente"
                    name="nombre_cliente"
                    value={values.nombre_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    variant="bordered"
                    isRequired
                    label="Apellido"
                    labelPlacement="outside"
                    placeholder="Ingrese apellido cliente"
                    name="apellido_cliente"
                    value={values.apellido_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    variant="bordered"
                    isRequired
                    label="Rut"
                    labelPlacement="outside"
                    placeholder="Ingrese rut cliente"
                    name="rut_cliente"
                    value={values.rut_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    variant="bordered"
                    isRequired
                    label="Correo"
                    labelPlacement="outside"
                    placeholder="Ingrese Correo cliente"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                  />
                  <Input
                    variant="bordered"
                    isRequired
                    label="Telefono"
                    labelPlacement="outside"
                    placeholder="Ingrese Telefono cliente"
                    name="telefono_cliente"
                    value={values.telefono_cliente}
                    onChange={handleChange}
                  />
                  <Input
                    variant="bordered"
                    isRequired
                    label="Dirección"
                    labelPlacement="outside"
                    placeholder="Ingrese Calle cliente"
                    name="direccion_cliente"
                    value={values.direccion_cliente}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Cerrar
              </Button>
              <Button
                color="primary"
                onClick={handleSubmit}
                isLoading={loading}
              >
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
