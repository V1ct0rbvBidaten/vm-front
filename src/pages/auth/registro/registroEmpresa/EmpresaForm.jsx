import { Input } from "@nextui-org/react";
import React from "react";

const EmpresaForm = () => {
  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input
        variant="bordered"
        label="Rut razón social"
        labelPlacement="outside"
        placeholder="Ingrese rut empresa"
      />
      <Input
        variant="bordered"
        label="Nombre razón social"
        labelPlacement="outside"
        placeholder="Ingrese nombre empresa"
      />
      <Input
        variant="bordered"
        label="Dirección "
        className="col-span-2"
        labelPlacement="outside"
        placeholder="Ingrese dirección empresa"
      />
      <Input
        variant="bordered"
        label="Telefono "
        labelPlacement="outside"
        placeholder="Ingrese telefono empresa"
      />
      <Input
        variant="bordered"
        label="Correo "
        labelPlacement="outside"
        placeholder="Ingrese correo empresa"
      />
    </div>
  );
};

export default EmpresaForm;
