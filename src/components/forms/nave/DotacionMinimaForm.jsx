import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Listbox,
  ListboxItem,
  Select,
  SelectItem,
  Pagination,
} from "@nextui-org/react";
import { useState, useMemo } from "react";

const DotacionMinimaForm = ({
  plazas,
  titulos,
  cursos,
  cursosArray,
  setCursosArray,
  titulosArray,
  setTitulosArray,
  handleChangeDotacion,
  dotacionMinimaTemporal,
  handleSubmitDotacionMinima,
  dotacionMinima,
  cargos,
  cargosArray,
  setCargosArray,
  selectedValueCargos,
  selectedValueCursos,
  selectedValueTitulos,
}) => {
  const [filterCurso, setFilterCurso] = useState("");
  const [filterTitulo, setFilterTitulo] = useState("");
  const [filterCargo, setFilterCargo] = useState("");
  const { id_plaza, cantidad } = dotacionMinimaTemporal;

  return (
    <div className="grid gap-4 grid-cols-2 pt-4 ">
      <div className="border-1 p-2 rounded-md col-span-2">
        <Select
          size="sm"
          variant="bordered"
          label="Plaza"
          labelPlacement="outside"
          placeholder="Seleccione plaza"
          value={id_plaza}
          name="id_plaza"
          onChange={handleChangeDotacion}
          items={plazas}
        >
          {(item) => (
            <SelectItem key={item._id} value={item._id}>
              {item.nombre_plaza}
            </SelectItem>
          )}
        </Select>
      </div>

      <div className="flex  flex-col gap-2 col-span-2 border-1 p-2 rounded-md">
        <h4>Cursos</h4>
        <div className="flex justify-start flex-col">
          <Input
            size="sm"
            type="text"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            className="rounded-md"
            placeholder="Buscar cursos"
            variant="bordered"
            value={filterCurso}
            onValueChange={setFilterCurso}
          />
        </div>
        <div className="flex flex-wrap gap-1 seleccionados-list  ">
          {!selectedValueCursos ? (
            <span>No hay items seleccionados.</span>
          ) : (
            cursos &&
            cursos
              .filter((d) => selectedValueCursos.includes(d._id))
              .map((d) => (
                <span className="item-selected"> {d.nombre_curso}</span>
              ))
          )}
        </div>
        <div className="checkbox-list">
          <Listbox
            aria-label="Multiple selection example"
            variant="flat"
            selectionMode="multiple"
            selectedKeys={cursosArray}
            onSelectionChange={setCursosArray}
          >
            {cursos &&
              cursos
                .filter((d) => {
                  let normalizedCursoName = d.nombre_curso
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                  let normalizedFilter = filterCurso
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase();
                  return normalizedCursoName.includes(normalizedFilter);
                })
                .map((c) => (
                  <ListboxItem key={c._id} textValue={c._id}>
                    <span style={{ fontSize: "10px" }}>
                      {c.numero_curso} -{" "}
                    </span>
                    <span style={{ fontSize: "10px" }}>{c.nombre_curso}</span>
                  </ListboxItem>
                ))}
          </Listbox>
        </div>
      </div>
      <div className="flex  flex-col gap-2 border-1 p-2 rounded-md">
        <h4>Títulos</h4>
        <div>
          <Input
            size="sm"
            type="text"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            className="rounded-md"
            placeholder="Buscar título"
            variant="bordered"
            value={filterTitulo}
            onValueChange={setFilterTitulo}
          />
        </div>
        <div className="flex flex-wrap gap-1 seleccionados-list  ">
          {!selectedValueTitulos ? (
            <span>No hay items seleccionados.</span>
          ) : (
            titulos &&
            titulos
              .filter((d) => selectedValueTitulos.includes(d._id))
              .map((d) => <span className="item-selected"> {d.titulo}</span>)
          )}
        </div>
        <Listbox
          className="checkbox-list"
          aria-label="Multiple selection example"
          variant="flat"
          selectionMode="multiple"
          selectedKeys={titulosArray}
          onSelectionChange={setTitulosArray}
        >
          {titulos &&
            titulos
              .filter((d) => {
                let normalizedTituloName = d.titulo
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();
                let normalizedFilter = filterTitulo
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();
                return normalizedTituloName.includes(normalizedFilter);
              })
              .map((c) => (
                <ListboxItem key={c._id} textValue={c._id}>
                  <span style={{ fontSize: "10px" }}>{c.titulo} </span>
                </ListboxItem>
              ))}
        </Listbox>
      </div>
      <div className="flex  flex-col gap-2 border-1 p-2 rounded-md">
        <h4>Cargos</h4>
        <div>
          <Input
            size="sm"
            type="text"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            className="rounded-md"
            placeholder="Buscar cargo"
            variant="bordered"
            value={filterCargo}
            onValueChange={setFilterCargo}
          />
        </div>
        <div className="flex flex-wrap gap-1 seleccionados-list  ">
          {!selectedValueCargos ? (
            <span>No hay items seleccionados.</span>
          ) : (
            cargos &&
            cargos
              .filter((d) => selectedValueCargos.includes(d._id))
              .map((d) => (
                <span className="item-selected"> {d.nombre_cargo}</span>
              ))
          )}
        </div>
        <Listbox
          className="checkbox-list"
          aria-label="Multiple selection example"
          variant="flat"
          selectionMode="multiple"
          selectedKeys={cargosArray}
          onSelectionChange={setCargosArray}
        >
          {cargos &&
            cargos
              .filter((d) => {
                let normalizedCargoName = d.nombre_cargo
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();
                let normalizedFilter = filterCargo
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase();
                return normalizedCargoName.includes(normalizedFilter);
              })
              .map((c) => (
                <ListboxItem key={c._id} textValue={c._id}>
                  <span style={{ fontSize: "10px" }}>{c.nombre_cargo} </span>
                </ListboxItem>
              ))}
        </Listbox>
      </div>

      <Button
        className="col-span-2 bg-foreground text-white"
        size="sm"
        onClick={handleSubmitDotacionMinima}
      >
        Agregar Plaza
      </Button>
    </div>
  );
};

export default DotacionMinimaForm;
