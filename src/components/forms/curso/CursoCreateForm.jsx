import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { createCurso } from "../../../api/cursos";
import { toast } from "react-toastify";

const initialState = {
  numero_curso: "",
  nombre_curso: "",
};

const CursoCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { numero_curso, nombre_curso } = values;

  const handleSubmit = () => {
    setLoading(true);
    createCurso(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Curso creado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear curso");
      })
      .finally(() => {
        setLoading(false);
        resetState();
        onClose();
      });
  };

  return (
    <div className="grid gap-4">
      {loading ? (
        <>Cargando....</>
      ) : (
        <>
          <Input
            type="text"
            values={numero_curso}
            label="Número de curso"
            labelPlacement="outside"
            placeholder="Ingrese numero curso"
            name="numero_curso"
            size="sm"
            onChange={handleChange}
          />

          <Input
            type="text"
            values={nombre_curso}
            label="Nombre de curso"
            labelPlacement="outside"
            placeholder="Ingrese nombre curso"
            name="nombre_curso"
            size="sm"
            onChange={handleChange}
          />

          <Button
            className="bg-teal-500 text-white"
            endContent={<ArrowDownTrayIcon className="h-6" />}
            onClick={handleSubmit}
          >
            Guardar
          </Button>
        </>
      )}
    </div>
  );
};

export default CursoCreateForm;
