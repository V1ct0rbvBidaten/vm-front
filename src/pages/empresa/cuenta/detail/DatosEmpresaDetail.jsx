import { Input } from "@nextui-org/react";
import React from "react";

const DatosEmpresaDetail = ({ data }) => {
  const {
    rut_razon_social,
    nombre_razon_social,
    region_razon_social,
    comuna_razon_social,
    direccion_razon_social,
    rubro,
    telefono_razon_social,
    correo_electronico_razon_social,
  } = data;

  return (
    <form>
      <Input
        variant="flat"
        label="Rut"
        labelPlacement="outside"
        size="sm"
        disabled
        value={rut_razon_social}
      />
      <Input
        variant="flat"
        label="Nombre"
        labelPlacement="outside"
        size="sm"
        disabled
        value={nombre_razon_social}
      />
      <Input
        variant="flat"
        label="Región"
        labelPlacement="outside"
        size="sm"
        disabled
        value={region_razon_social}
      />
      <Input
        variant="flat"
        label="Comuna"
        labelPlacement="outside"
        size="sm"
        disabled
        value={comuna_razon_social}
      />
      <Input
        variant="flat"
        label="Dirección"
        labelPlacement="outside"
        size="sm"
        disabled
        value={direccion_razon_social}
      />
      <Input
        variant="flat"
        label="Rubro"
        labelPlacement="outside"
        size="sm"
        disabled
        value={rubro}
      />
      <Input
        variant="flat"
        label="Teléfono"
        labelPlacement="outside"
        size="sm"
        disabled
        value={telefono_razon_social}
      />
      <Input
        variant="flat"
        label="Correo"
        labelPlacement="outside"
        size="sm"
        disabled
        value={correo_electronico_razon_social}
      />
    </form>
  );
};

export default DatosEmpresaDetail;
