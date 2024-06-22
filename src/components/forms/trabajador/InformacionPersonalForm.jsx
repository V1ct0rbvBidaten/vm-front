import { Input, Select, SelectItem } from "@nextui-org/react";
const InformacionPersonalForm = ({ values, handleChange }) => {
  const {
    nombre,
    segundo_nombre,
    apellido_paterno,
    apellido_materno,
    sexo,
    rut,
    nacionalidad,
    estado_civil,
    fecha_nacimiento,
    lugar_nacimiento,
  } = values;

  const sexo_items = [
    { name: "hombre", id: 1 },
    { name: "mujer", id: 2 },
  ];

  const estado_civil_items = [
    { name: "soltero", id: 1 },
    { name: "casado", id: 2 },
    { name: "divorciado", id: 3 },
    { name: "viudo", id: 4 },
  ];

  return (
    <div className="grid grid-cols-4 gap-2 ">
      <div className="col-span-4">
        <p className="font-semibold text-xl">Datos personales</p>
      </div>
      <Input
        size="sm"
        variant="bordered"
        label="Primer Nombre"
        value={nombre}
        type="text"
        name="nombre"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese primer nombre"
        className="col-span-2"
      />{" "}
      <Input
        size="sm"
        variant="bordered"
        label="Segundo Nombre"
        value={segundo_nombre}
        type="text"
        name="segundo_nombre"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese segundo nombre"
        className="col-span-2"
      />{" "}
      <Input
        size="sm"
        variant="bordered"
        label="Apellido Paterno"
        value={apellido_paterno}
        type="text"
        name="apellido_paterno"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese apellido paterno"
        className="col-span-2"
      />{" "}
      <Input
        size="sm"
        variant="bordered"
        label="Apellido Materno"
        value={apellido_materno}
        type="text"
        name="apellido_materno"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese apellido materno"
        className="col-span-2"
      />
      <Input
        size="sm"
        variant="bordered"
        label="RUT"
        value={rut}
        type="text"
        name="rut"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese rut"
        className="col-span-1"
      />
      <Select
        size="sm"
        variant="bordered"
        label="Sexo"
        labelPlacement="outside"
        placeholder="Seleccione sexo"
        value={sexo}
        name="sexo"
        onChange={handleChange}
        items={sexo_items}
      >
        {(item) => (
          <SelectItem className="capitalize" key={item.name} value={item.name}>
            {item.name}
          </SelectItem>
        )}
      </Select>
      <Input
        size="sm"
        variant="bordered"
        label="Nacionalidad"
        value={nacionalidad}
        type="text"
        name="nacionalidad"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese nacionalidad"
        className="col-span-2"
      />
      <Input
        size="sm"
        variant="bordered"
        label="Lugar de Nacimiento"
        value={lugar_nacimiento}
        type="text"
        name="lugar_nacimiento"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese lugar de nacimiento"
        className="col-span-2"
      />
      <Input
        size="sm"
        variant="bordered"
        label="Fecha Nacimiento"
        value={fecha_nacimiento}
        type="date"
        name="fecha_nacimiento"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese fecha nacimiento"
        className="col-span-1"
      />
      <Select
        size="sm"
        variant="bordered"
        label="Estado Civil"
        labelPlacement="outside"
        placeholder="Seleccione estado civil"
        value={estado_civil}
        name="estado_civil"
        onChange={handleChange}
        items={estado_civil_items}
      >
        {(item) => (
          <SelectItem className="capitalize" key={item.name} value={item.name}>
            {item.name}
          </SelectItem>
        )}
      </Select>
    </div>
  );
};

export default InformacionPersonalForm;
