import { useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";
import regiones from "../../../../utils/regiones";

const EmpresaForm = ({ values, handleChange }) => {
  const {
    rut_razon_social,
    nombre_razon_social,
    direccion_razon_social,
    telefono_razon_social,
    correo_electronico_razon_social,
    region_razon_social,
    comuna_razon_social,
    rubro,
  } = values;

  const [selectedRegion, setSelectedRegion] = useState(region_razon_social);
  const [filteredComunas, setFilteredComunas] = useState([]);
  const [selectedRubro, setSelectedRubro] = useState(rubro);

  const rubros_sii = {
    category: [
      {
        categoria: "PRODUCCIÓN AGROPECUARIA",
        items: [
          {
            codigo: "11111.0",
            description: "Cereales, oleaginosas, forrajeras",
          },
          { codigo: "11112.0", description: "Arroz" },
        ],
      },
      {
        categoria: "GANADERÍA",
        items: [
          { codigo: "11211.0", description: "Ganado bovino" },
          { codigo: "11212.0", description: "Ganado ovino" },
        ],
      },
    ],
  };

  const items = rubros_sii.category.flatMap((category) =>
    category.items.map((item) => ({
      key: item.codigo,
      label: `${category.categoria} - ${item.description}`,
    }))
  );

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

  const handleRubroChange = (key) => {
    setSelectedRubro(key);
    const event = {
      target: {
        name: "rubro",
        value: key,
      },
    };
    handleChange(event);
  };

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input
        variant="bordered"
        label="Rut razón social"
        labelPlacement="outside"
        placeholder="Ingrese rut empresa"
        name="rut_razon_social"
        value={rut_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Correo "
        labelPlacement="outside"
        placeholder="Ingrese correo empresa"
        name="correo_electronico_razon_social"
        value={correo_electronico_razon_social}
        onChange={handleChange}
      />
      <Autocomplete
        label="Rubro"
        labelPlacement="outside"
        placeholder="Ingrese rubro empresa"
        items={items}
        selectedKey={selectedRubro}
        onSelectionChange={handleRubroChange}
      >
        {(item) => (
          <AutocompleteItem key={item.key}>
            {item.label.split(" - ")[1]}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <Input
        variant="bordered"
        label="Nombre razón social"
        labelPlacement="outside"
        placeholder="Ingrese nombre empresa"
        name="nombre_razon_social"
        value={nombre_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Dirección "
        labelPlacement="outside"
        placeholder="Ingrese dirección empresa"
        name="direccion_razon_social"
        value={direccion_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Telefono "
        labelPlacement="outside"
        placeholder="Ingrese telefono empresa"
        name="telefono_razon_social"
        value={telefono_razon_social}
        onChange={handleChange}
      />
      <Select
        variant="bordered"
        label="Región razón social"
        labelPlacement="outside"
        placeholder="Ingrese región empresa"
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
        label="Comuna razón social"
        labelPlacement="outside"
        placeholder="Ingrese comuna empresa"
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
    </div>
  );
};

export default EmpresaForm;
