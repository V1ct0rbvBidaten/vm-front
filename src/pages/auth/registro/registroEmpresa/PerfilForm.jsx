import { Input } from "@nextui-org/react";
import React from "react";

const PerfilForm = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input
        variant="bordered"
        label="Nombre"
        labelPlacement="outside"
        placeholder="Ingrese su nombre"
      />
      <Input
        variant="bordered"
        label="Apellido"
        labelPlacement="outside"
        placeholder="Ingrese su apellido"
      />
      <Input
        variant="bordered"
        label="Dirección"
        labelPlacement="outside"
        placeholder="Ingrese su dirección"
      />
      <Input
        variant="bordered"
        label="Telefono"
        labelPlacement="outside"
        placeholder="Ingrese su telefono"
      />
    </div>
  );
};

export default PerfilForm;
