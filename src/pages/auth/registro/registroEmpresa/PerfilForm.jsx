import { Input, Select, SelectItem } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import { useState } from "react";

const PerfilForm = ({ handleChange, values }) => {
  const { nombres, apellidos, direccion, telefono, comuna, region } = values;

  const [selectedRegion, setSelectedRegion] = useState(region);
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
        placeholder="+56 9"
        name="telefono"
        value={telefono}
        onChange={handleChange}
      />
      <Select
        variant="bordered"
        label="Región "
        labelPlacement="outside"
        placeholder="Ingrese región "
        name="region"
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
        name="comuna"
        value={comuna}
        onChange={handleChange}
        disabled={!selectedRegion}
      >
        {filteredComunas.map((comuna) => (
          <SelectItem key={comuna} value={comuna}>
            {comuna}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default PerfilForm;
