import { Input } from "@nextui-org/react";
import React from "react";

const DatosPersonalesDetail = ({ data }) => {
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
    <div className="grid grid-cols-2  gap-2">
      <Input
        variant="flat"
        label="Nombres"
        labelPlacement="outside"
        disabled
        size="sm"
        value={nombres}
      />
      <Input
        variant="flat"
        label="Apellidos"
        size="sm"
        labelPlacement="outside"
        disabled
        value={apellidos}
      />
      <Input
        variant="flat"
        label="Dirección"
        size="sm"
        labelPlacement="outside"
        disabled
        value={direccion}
      />
      <Input
        variant="flat"
        label="Teléfono"
        size="sm"
        labelPlacement="outside"
        disabled
        value={telefono}
      />
    </div>
  );
};

export default DatosPersonalesDetail;
