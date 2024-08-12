import { Autocomplete, Input, AutocompleteItem } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import { useState } from "react";

const PerfilForm = ({ handleChange, values }) => {
  const { nombres, apellidos, direccion, telefono, comuna, region } = values;

  const [selectedRegion, setSelectedRegion] = useState(region);
  const [filteredComunas, setFilteredComunas] = useState([]);

  const handleRegionChange = (value) => {
    console.log("value", value);
    setSelectedRegion(value);

    const event = {
      target: {
        name: "region",
        value: value,
      },
    };
    handleChange(event);

    const regionObj = regiones.Regiones.find((reg) => reg.Nombre === value);
    if (regionObj) {
      setFilteredComunas(regionObj.Comunas);
    } else {
      setFilteredComunas([]);
    }
  };

  const handleComunaChange = (value) => {
    const event = {
      target: {
        name: "comuna",
        value: value,
      },
    };
    handleChange(event);
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
        isRequired
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
        isRequired
      />
      <Input
        variant="bordered"
        label="Dirección"
        labelPlacement="outside"
        placeholder="Ingrese su dirección"
        name="direccion"
        value={direccion}
        isRequired
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Telefono"
        labelPlacement="outside"
        placeholder="+56 9"
        name="telefono"
        isRequired
        value={telefono}
        onChange={handleChange}
      />
      <Autocomplete
        variant="bordered"
        label="Región "
        labelPlacement="outside"
        placeholder="Ingrese región "
        isRequired
        name="region"
        value={selectedRegion}
        onSelectionChange={handleRegionChange}
      >
        {regiones.Regiones.map((region) => (
          <AutocompleteItem key={region.Nombre} value={region.Nombre}>
            {region.Nombre}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      <Autocomplete
        variant="bordered"
        label="Comuna "
        isRequired
        labelPlacement="outside"
        placeholder="Ingrese comuna "
        name="comuna"
        value={comuna}
        onSelectionChange={handleComunaChange}
        disabled={!selectedRegion}
      >
        {filteredComunas.map((comuna) => (
          <AutocompleteItem key={comuna} value={comuna}>
            {comuna}
          </AutocompleteItem>
        ))}
      </Autocomplete>
    </div>
  );
};

export default PerfilForm;
