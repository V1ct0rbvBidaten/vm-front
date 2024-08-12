import { Button, Input, Textarea, Select, SelectItem } from "@nextui-org/react";
import regiones from "../../../../utils/regiones";
import rubros from "../../../../utils/rubros.json";
import ReactSelect from "react-select";
import { useState } from "react";

const DatosEmpresaUpdate = ({ data, handleSubmit, handleChange, loading }) => {
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

  const handleRubroChange = (value) => {
    const event = {
      target: {
        name: "rubro",
        value: value.value,
      },
    };
    handleChange(event);
  };

  const handleRegionChange = (value) => {
    console.log("value", value);
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
    <form className="grid grid-cols-3 gap-2 h-auto  " onSubmit={handleSubmit}>
      <Input
        variant="bordered"
        label="Rut"
        labelPlacement="outside"
        disabled
        name="rut_razon_social"
        value={rut_razon_social}
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
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: "999 ",
            }),
          }}
          onChange={handleRegionChange}
          placeholder="Seleccione región"
          defaultInputValue={data.region_razon_social}
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
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: "999",
            }),
          }}
          onChange={handleComunaChange}
          isDisabled={!selectedRegion}
          placeholder="Seleccione comuna"
          defaultInputValue={data.comuna_razon_social}
        />
      </div>
      <Input
        variant="bordered"
        label="Nombre"
        labelPlacement="outside"
        name="nombre_razon_social"
        value={nombre_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Dirección"
        labelPlacement="outside"
        className="col-span-2"
        name="direccion_razon_social"
        value={direccion_razon_social}
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
              zIndex: "999 ",
              height: "100px",
              overflow: "hidden",
            }),
          }}
          onChange={handleRubroChange}
          placeholder="Seleccione rubro"
          defaultInputValue={data.rubro}
        />
      </div>
      <Input
        variant="bordered"
        label="Teléfono"
        labelPlacement="outside"
        name="telefono_razon_social"
        value={telefono_razon_social}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Correo"
        labelPlacement="outside"
        name="correo_electronico_razon_social"
        value={correo_electronico_razon_social}
        onChange={handleChange}
      />
      <Textarea
        variant="bordered"
        label="Descripción empresa"
        labelPlacement="outside"
        className="col-span-3"
        name="descripcion"
        value={descripcion}
        onChange={handleChange}
      />
      <Button
        type="submit"
        className="bg-foreground text-white col-span-3 mt-2"
        isLoading={loading}
      >
        Actualizar
      </Button>
    </form>
  );
};

export default DatosEmpresaUpdate;
