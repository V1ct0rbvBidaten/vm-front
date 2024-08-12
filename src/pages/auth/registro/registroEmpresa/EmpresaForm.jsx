import { useState } from "react";
import { Input } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import rubros from "../../../../utils/rubros";
import ReactSelect from "react-select";

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

  const handleRubroChange = (value) => {
    setSelectedRubro(value.value);
    const event = {
      target: {
        name: "rubro",
        value: value.value,
      },
    };
    handleChange(event);
  };

  const handleRegionChange = (value) => {
    setSelectedRegion(value.value);

    const event = {
      target: {
        name: "region_razon_social",
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
        name: "comuna_razon_social",
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

  const optionsRubro = rubros.flatMap((category) =>
    category.Items.map((item) => {
      return { value: item.Campo1, label: item.Campo1 };
    })
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Rubro <span className="text-rose-500">*</span>
        </span>
        <ReactSelect
          options={optionsRubro}
          required
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: "999",
            }),
          }}
          onChange={handleRubroChange}
          placeholder="Seleccione rubro"
          defaultInputValue={values.rubro}
        />
      </div>
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
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Región <span className="text-rose-500">*</span>
        </span>
        <ReactSelect
          options={optionsRegiones}
          required
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (base) => ({ ...base, zIndex: 1000, position: "static" }),
          }}
          onChange={handleRegionChange}
          placeholder="Seleccione región"
          defaultInputValue={values.region_razon_social}
        />
      </div>
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Comuna <span className="text-rose-500">*</span>
        </span>
        <ReactSelect
          options={optionsComunas}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (base) => ({ ...base, zIndex: 1000, position: "static" }),
          }}
          onChange={handleComunaChange}
          isDisabled={!selectedRegion}
          placeholder="Seleccione comuna"
          defaultInputValue={values.comuna_razon_social}
        />
      </div>
    </div>
  );
};

export default EmpresaForm;
