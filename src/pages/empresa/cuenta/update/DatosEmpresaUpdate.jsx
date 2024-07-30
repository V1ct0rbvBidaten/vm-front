import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import React, { useState } from "react";

const DatosEmpresaUpdate = ({ data, handleSubmit, handleChange }) => {
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

  const [selectedRegion, setSelectedRegion] = useState(region_razon_social);
  const [filteredComunas, setFilteredComunas] = useState([]);

  const handleRegionChange = (event) => {
    const { value } = event.target;
    setSelectedRegion(value);
    handleChange(event);

    const region = regiones.Regiones.find((reg) => reg.Nombre === value);
    if (region) {
      setFilteredComunas(region.Comunas);
    } else {
      setFilteredComunas([]);
    }
  };

  return (
    <form className="grid grid-cols-3 gap-2" onSubmit={handleSubmit}>
      <Input
        variant="flat"
        label="Rut"
        labelPlacement="outside"
        size="sm"
        name="rut_razon_social"
        value={rut_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="flat"
        label="Nombre"
        labelPlacement="outside"
        size="sm"
        name="nombre_razon_social"
        value={nombre_razon_social}
        onChange={handleChange}
      />
      <Select
        variant="bordered"
        label="Región "
        labelPlacement="outside"
        placeholder="Ingrese región "
        name="region_razon_social"
        value={selectedRegion}
        onChange={handleRegionChange}
      >
        {regiones.Regiones.map((region) => (
          <SelectItem key={region.Nombre} value={region.Nombre}>
            {region.Nombre}
          </SelectItem>
        ))}
      </Select>
      <Select
        variant="bordered"
        label="Comuna "
        labelPlacement="outside"
        placeholder="Ingrese comuna "
        name="comuna_razon_social"
        value={comuna_razon_social}
        onChange={handleChange}
        disabled={!selectedRegion}
      >
        {filteredComunas.map((comuna) => (
          <SelectItem key={comuna} value={comuna}>
            {comuna}
          </SelectItem>
        ))}
      </Select>
      <Input
        variant="flat"
        label="Dirección"
        labelPlacement="outside"
        className="col-span-2"
        size="sm"
        name="direccion_razon_social"
        value={direccion_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="flat"
        label="Rubro"
        labelPlacement="outside"
        size="sm"
        name="rubro"
        value={rubro}
        onChange={handleChange}
      />
      <Input
        variant="flat"
        label="Teléfono"
        labelPlacement="outside"
        size="sm"
        name="telefono_razon_social"
        value={telefono_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="flat"
        label="Correo"
        labelPlacement="outside"
        size="sm"
        name="correo_electronico_razon_social"
        value={correo_electronico_razon_social}
        onChange={handleChange}
      />
      <Textarea
        variant="flat"
        label="Descripción empresa"
        labelPlacement="outside"
        size="sm"
        className="col-span-3"
        name="descripcion"
        value={descripcion}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="bg-foreground text-white col-span-3 mt-2"
      >
        Actualizar
      </Button>
    </form>
  );
};

export default DatosEmpresaUpdate;
