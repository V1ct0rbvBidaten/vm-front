import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { updateTitulo } from "../../../api/titulo";
import { toast } from "react-toastify";

const TituloUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { titulo, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["titulo", "activo"];

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    updateTitulo(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Título actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar título");
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
            label="Título"
            labelPlacement="outside"
            placeholder="Ingrese nombre título"
            value={titulo}
            name="titulo"
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

export default TituloUpdateForm;
