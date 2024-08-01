import { Button, Input } from "@nextui-org/react";
import React from "react";

const DatosPersonalesUpdate = ({ data, handleChange, handleSubmit }) => {
  const {
    nombres,
    apellidos,
    direccion,
    telefono,
    rut_cuenta_bancaria,
    banco,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data;

  return (
    <form className="grid grid-cols-2  gap-2" onSubmit={handleSubmit}>
      <Input
        variant="bordered"
        label="Nombres"
        labelPlacement="outside"
        size="sm"
        value={nombres}
        name="nombres"
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Apellidos"
        size="sm"
        labelPlacement="outside"
        name="apellidos"
        value={apellidos}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Dirección"
        size="sm"
        labelPlacement="outside"
        name="direccion"
        value={direccion}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Teléfono"
        size="sm"
        labelPlacement="outside"
        name="telefono"
        value={telefono}
        onChange={handleChange}
      />
      <Button className="col-span-2 bg-foreground text-white" type="submit">
        Guardar cambios
      </Button>
    </form>
  );
};

export default DatosPersonalesUpdate;
