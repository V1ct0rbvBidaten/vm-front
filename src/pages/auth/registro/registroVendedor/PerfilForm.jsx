import { Input } from "@nextui-org/react";
import React from "react";

const PerfilForm = ({ handleChange, values }) => {
  const { nombres, apellidos, direccion, telefono } = values;

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input
        variant="bordered"
        label="Nombre"
        labelPlacement="outside"
        placeholder="Ingrese su nombre"
        name="nombres"
        value={nombres}
        onChange={handleChange}
      />

      <Input
        variant="bordered"
        label="Apellido"
        labelPlacement="outside"
        placeholder="Ingrese su apellido"
        name="apellidos"
        value={apellidos}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Dirección"
        labelPlacement="outside"
        placeholder="Ingrese su dirección"
        name="direccion"
        value={direccion}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Telefono"
        labelPlacement="outside"
        placeholder="Ingrese su telefono"
        name="telefono"
        value={telefono}
        onChange={handleChange}
      />
    </div>
  );
};

export default PerfilForm;
