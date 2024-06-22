import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { Checkbox, CheckboxGroup, Input } from "@nextui-org/react";
import React, { useState } from "react";

const LibretaForm = ({
  values,
  handleChange,
  muellajeCheck,
  setMuellajeCheck,
  gestionMandoCheck,
  setGestionMandoCheck,
  habilitaciones,
  cursos,
  titulos,
  habilitacionesArray,
  setHabilitacionesArray,
  cursosArray,
  setCursosArray,
  titulosArray,
  setTitulosArray,
}) => {
  const { libreta } = values;

  const [tituloFilter, setTituloFilter] = useState("");
  const [cursoFilter, setCursoFilter] = useState("");
  const [habilitacionFilter, setHabilitacionFilter] = useState("");

  const handleTituloFilter = (e) => {
    setTituloFilter(e.target.value);
  };
  const handleCursoFilter = (e) => {
    setCursoFilter(e.target.value);
  };
  const handleHabilitacionFilter = (e) => {
    setHabilitacionFilter(e.target.value);
  };

  return (
    <div className="grid grid-cols-3  justify-center  gap-4">
      {/* <div className="col-span-3">
        {JSON.stringify({
          cursos: cursosArray,
          titulos: titulosArray,
          habilitaciones: habilitacionesArray,
        })}
      </div> */}
      <div className="col-span-3">
        <p className="font-semibold text-xl">Libreta de embarco</p>
      </div>
      <Input
        size="sm"
        variant="bordered"
        label="Vigencia de libreta"
        value={libreta.vigencia}
        type="date"
        name="libreta.vigencia"
        onChange={handleChange}
        labelPlacement="outside"
        placeholder="Ingrese vigencia libreta"
      />
      <Checkbox
        className="ml-4"
        isSelected={muellajeCheck}
        onValueChange={setMuellajeCheck}
      >
        Muellaje
      </Checkbox>
      <Checkbox
        isSelected={gestionMandoCheck}
        onValueChange={setGestionMandoCheck}
      >
        Gestión de mando
      </Checkbox>
      <div className="p-2 border-2 rounded-md">
        <p className="text-lg font-semibold ">Habilitaciones</p>
        <Input
          className="mt-4"
          variant="bordered"
          placeholder="Buscar habilitación"
          size="sm"
          radius="lg"
          onChange={handleHabilitacionFilter}
          startContent={<MagnifyingGlassIcon className="h-5" />}
          value={habilitacionFilter}
          isClearable
          onClear={() => setHabilitacionFilter("")}
        />
        <CheckboxGroup
          className="mt-4"
          label="Seleccione habilitaciones"
          orientation="horizontal"
          value={habilitacionesArray}
          onValueChange={setHabilitacionesArray}
        >
          {habilitaciones &&
            habilitaciones.items
              .filter((d) =>
                d.ruta
                  .toLowerCase()
                  .includes(habilitacionFilter.toLocaleLowerCase())
              )
              .map((c) => (
                <Checkbox key={c._id} value={c._id}>
                  {c.ruta}
                </Checkbox>
              ))}
        </CheckboxGroup>
      </div>
      <div className="p-2 border-2 rounded-md">
        <p className="text-lg font-semibold">Títulos</p>
        <Input
          className="mt-4"
          variant="bordered"
          size="sm"
          placeholder="Buscar Título"
          radius="lg"
          onChange={handleTituloFilter}
          startContent={<MagnifyingGlassIcon className="h-5" />}
          value={tituloFilter}
          isClearable
          onClear={() => setTituloFilter("")}
        />
        <CheckboxGroup
          className="mt-4"
          label="Seleccione titulos"
          orientation="horizontal"
          value={titulosArray}
          onValueChange={setTitulosArray}
        >
          {titulos &&
            titulos.items
              .filter((d) =>
                d.titulo.toLowerCase().includes(tituloFilter.toLowerCase())
              )
              .map((c) => (
                <Checkbox key={c._id} value={c._id}>
                  {c.titulo}
                </Checkbox>
              ))}
        </CheckboxGroup>
      </div>
      <div className="p-2 border-2 rounded-md">
        <p className="text-lg font-semibold">Cursos</p>
        <Input
          className="mt-4"
          variant="bordered"
          placeholder="Buscar Curso"
          radius="lg"
          size="sm"
          onChange={handleCursoFilter}
          startContent={<MagnifyingGlassIcon className="h-5" />}
          value={cursoFilter}
          isClearable
          onClear={() => setCursoFilter("")}
        />
        <CheckboxGroup
          className="mt-4"
          label="Seleccione cursos"
          orientation="horizontal"
          value={cursosArray}
          onValueChange={setCursosArray}
        >
          {cursos &&
            cursos.items
              .filter((d) =>
                d.nombre_curso
                  .toLocaleLowerCase()
                  .includes(cursoFilter.toLocaleLowerCase())
              )
              .map((c) => (
                <Checkbox key={c._id} value={c._id}>
                  {c.nombre_curso}
                </Checkbox>
              ))}
        </CheckboxGroup>
      </div>
    </div>
  );
};

export default LibretaForm;
