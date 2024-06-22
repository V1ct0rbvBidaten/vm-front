import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { updateCurso } from "../../../api/cursos";
import { toast } from "react-toastify";

const CursoUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { nombre_curso, numero_curso, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["nombre_curso", "numero_curso", "activo"];

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    updateCurso(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Cargo actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar cargo");
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
            size="sm"
            label="Número curso"
            labelPlacement="outside"
            placeholder="Ingrese número cargo"
            value={numero_curso}
            name="numero_curso"
            onChange={handleChange}
          />
          <Input
            type="text"
            size="sm"
            label="Nombre curso"
            labelPlacement="outside"
            placeholder="Ingrese nombre curso"
            value={nombre_curso}
            name="nombre_curso"
            onChange={handleChange}
          />
          <Checkbox isSelected={activo} onChange={handleChange} name="activo">
            Activo
          </Checkbox>
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

export default CursoUpdateForm;
