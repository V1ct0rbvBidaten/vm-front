import { useState } from "react";
import {
  Input,
  Select,
  SelectItem,
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import rubros from "../../../../utils/rubros";

const EmpresaForm = ({ values, handleChange, rubro, setRubro }) => {
  const {
    rut_razon_social,
    nombre_razon_social,
    direccion_razon_social,
    telefono_razon_social,
    correo_electronico_razon_social,
    region_razon_social,
    comuna_razon_social,
  } = values;

  const [selectedRegion, setSelectedRegion] = useState(region_razon_social);
  const [filteredComunas, setFilteredComunas] = useState([]);
  const [selectedRubro, setSelectedRubro] = useState(rubro);

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
        name: "comuna_razon_social",
        value: value,
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
        isRequired
        name="rut_razon_social"
        value={rut_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Correo "
        labelPlacement="outside"
        placeholder="Ingrese correo empresa"
        isRequired
        name="correo_electronico_razon_social"
        value={correo_electronico_razon_social}
        onChange={handleChange}
      />
      <Autocomplete
        label="Rubro"
        variant="bordered"
        isRequired
        placeholder="Seleccione rubro"
        className="w-100 col-span-2"
        selectedKey={rubro}
        onSelectionChange={setRubro}
      >
        {rubros.map((item) => (
          <AutocompleteSection
            showDivider
            title={item.Categoria}
            key={item.Categoria}
          >
            {item.Items.map((subitem) => (
              <AutocompleteItem key={subitem.Campo1} value={subitem.Campo1}>
                {subitem.Campo1}
              </AutocompleteItem>
            ))}
          </AutocompleteSection>
        ))}
      </Autocomplete>
      <Input
        variant="bordered"
        label="Nombre razón social"
        labelPlacement="outside"
        isRequired
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
        isRequired
        name="direccion_razon_social"
        value={direccion_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Telefono "
        labelPlacement="outside"
        placeholder="+56 9"
        isRequired
        name="telefono_razon_social"
        value={telefono_razon_social}
        onChange={handleChange}
      />
      <Autocomplete
        variant="bordered"
        label="Región "
        labelPlacement="outside"
        placeholder="Ingrese región "
        isRequired
        name="region_razon_social"
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
        name="comuna_razon_social"
        value={comuna_razon_social}
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

export default EmpresaForm;
