import { Autocomplete, Input, AutocompleteItem } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import { useState } from "react";
import Select from "react-select";

const PerfilForm = ({ handleChange, values }) => {
  const { nombres, apellidos, direccion, telefono, comuna, region } = values;

  const [selectedRegion, setSelectedRegion] = useState(region);
  const [filteredComunas, setFilteredComunas] = useState([]);

  const handleRegionChange = (value) => {
    console.log("value", value);
    setSelectedRegion(value.value);

    const event = {
      target: {
        name: "region",
        value: value.value,
      },
    };
    handleChange(event);

    const regionObj = regiones.Regiones.find(
      (reg) => reg.Nombre === value.value
    );
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
        value: value.value,
      },
    };
    handleChange(event);
  };

  const optionsRegiones = regiones.Regiones.map((c) => {
    return { value: c.Nombre, label: c.Nombre };
  });

  const optionsComunas = filteredComunas.map((c) => {
    return { value: c, label: c };
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {" "}
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Región <span className="text-rose-500">*</span>
        </span>
        <Select
          options={optionsRegiones}
          required
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (base) => ({ ...base, zIndex: 1000 }),
          }}
          onChange={handleRegionChange}
          placeholder="Seleccione región"
          defaultInputValue={values.region}
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Comuna <span className="text-rose-500">*</span>
        </span>
        <Select
          options={optionsComunas}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (base) => ({ ...base, zIndex: 1000 }),
          }}
          onChange={handleComunaChange}
          isDisabled={!selectedRegion}
          placeholder="Seleccione comuna"
          defaultInputValue={values.comuna}
        />
      </div>
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
    </div>
  );
};

export default PerfilForm;
