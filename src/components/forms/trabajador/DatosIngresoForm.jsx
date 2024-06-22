import { InformationCircleIcon } from "@heroicons/react/24/solid";
import {
  Input,
  Autocomplete,
  Select,
  SelectItem,
  AutocompleteItem,
  Tooltip,
} from "@nextui-org/react";

const DatosIngresoForm = ({
  values,
  handleChange,
  handleSubmit,
  cargos,
  empresas,
  empresaValue,
  setEmpresaValue,
  cargoValue,
  setCargoValue,
}) => {
  const {
    empresa,
    cargo,
    tipo_trabajador,
    tipo_vacaciones,
    saldo_vacaciones,
    rol_embarco,
  } = values;

  const tipo_trabajador_items = [
    { name: "relevo", id: 1 },
    { name: "plaza", id: 2 },
  ];

  const tipo_vacaciones_items = [
    { name: "normales", id: 1 },
    { name: "progresivas", id: 2 },
  ];

  return (
    <div className="grid grid-cols-3 gap-2 ">
      <div className="col-span-3">
        <p className="font-semibold text-xl">Datos de ingreso</p>
      </div>

      <Select
        size="sm"
        variant="bordered"
        label="Tipo de trabajador"
        labelPlacement="outside"
        placeholder="Seleccione tipo trabajador"
        value={tipo_trabajador}
        name="tipo_trabajador"
        onChange={handleChange}
        items={tipo_trabajador_items}
      >
        {(item) => (
          <SelectItem className="capitalize" key={item.name} value={item.name}>
            {item.name}
          </SelectItem>
        )}
      </Select>
      <Autocomplete
        size="sm"
        variant="bordered"
        defaultItems={empresas.items}
        label="Seleccione Empresa"
        labelPlacement="outside"
        placeholder="Ingrese empresa "
        selectedKey={empresaValue}
        onSelectionChange={setEmpresaValue}
      >
        {(item) => (
          <AutocompleteItem key={item._id} value={item._id}>
            {item.nombre_empresa}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <Autocomplete
        size="sm"
        defaultItems={cargos.items}
        type="text"
        name="cargo"
        variant="bordered"
        label="Seleccione Cargo"
        labelPlacement="outside"
        placeholder="Ingrese cargo"
        selectedKey={cargoValue}
        onSelectionChange={setCargoValue}
      >
        {(item) => (
          <AutocompleteItem key={item._id} value={item._id}>
            {item.nombre_cargo}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <div className="col-span-3 border-1 p-2 rounded-md grid  grid-cols-2 gap-2">
        <div className="col-span-3  flex justify-start gap-2 ">
          <h4 className="font-bold ">Rol embarco</h4>
          <Tooltip content="Ingrese la proporción de dias de embarco a dias de descanso.( Ej: 15 x 15)">
            <InformationCircleIcon className="h-5 text-slate-500" />
          </Tooltip>
        </div>
        <Input
          size="sm"
          variant="bordered"
          label="Embarco"
          value={rol_embarco.factor_1}
          type="number"
          name="rol_embarco.factor_1"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Ingrese proporción embarco "
        />

        <Input
          size="sm"
          variant="bordered"
          label="Descanso"
          value={rol_embarco.factor_2}
          type="number"
          name="rol_embarco.factor_2"
          onChange={handleChange}
          labelPlacement="outside"
          placeholder="Ingrese proporción descanso "
        />
      </div>
    </div>
  );
};

export default DatosIngresoForm;
