import {
  Input,
  Autocomplete,
  Select,
  SelectItem,
  AutocompleteItem,
  Divider,
} from "@nextui-org/react";

const DatosContactoForm = ({
  values,
  handleChange,
  handleSubmit,
  cargos,
  empresas,
}) => {
  const { informacion_contacto } = values;

  return (
    <div className="grid grid-cols-2 gap-2 ">
      <div className="col-span-2">
        <p className="font-semibold text-xl">Datos de contacto</p>
      </div>
      <Input
        className="col-span-2"
        size="sm"
        variant="bordered"
        label="Dirección"
        value={informacion_contacto.direccion}
        type="text"
        name="informacion_contacto.direccion"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese dirección "
      />
      <Input
        size="sm"
        variant="bordered"
        label="Email"
        value={informacion_contacto.email}
        type="text"
        name="informacion_contacto.email"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese email "
      />
      <Input
        size="sm"
        variant="bordered"
        label="Telefono"
        value={informacion_contacto.telefono}
        type="text"
        name="informacion_contacto.telefono"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese telefono "
      />
      <p className="col-span-2">Contacto de emergencia</p>
      <Input
        size="sm"
        variant="bordered"
        label="Telefono"
        value={informacion_contacto.contacto_emergencia.telefono}
        type="text"
        name="informacion_contacto.contacto_emergencia.telefono"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese telefono "
      />
      <Input
        size="sm"
        variant="bordered"
        label="Nombre Contacto"
        value={informacion_contacto.contacto_emergencia.nombre}
        type="text"
        name="informacion_contacto.contacto_emergencia.nombre"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese nombre contacto de emergencia "
      />
    </div>
  );
};

export default DatosContactoForm;
