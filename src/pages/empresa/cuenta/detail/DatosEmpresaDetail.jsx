import { Input, Textarea } from "@nextui-org/react";
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
    descripcion,
  } = data;

  return (
    <form className="grid grid-cols-3 gap-2">
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
        className="col-span-2"
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
      />{" "}
      <Textarea
        variant="flat"
        label="Descripción empresa"
        labelPlacement="outside"
        size="sm"
        className="col-span-3"
        name="descripcion"
        value={descripcion}
      />
    </form>
  );
};

export default DatosEmpresaDetail;
