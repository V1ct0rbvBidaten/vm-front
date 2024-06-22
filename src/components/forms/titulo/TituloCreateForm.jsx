import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createTitulo } from "../../../api/titulo";

const initialState = {
  titulo: "",
};

const TituloCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { titulo } = values;

  const handleSubmit = () => {
    setLoading(true);
    createTitulo(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Título creado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear título");
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
            values={titulo}
            label="Título"
            labelPlacement="outside"
            placeholder="Ingrese nombre título"
            name="titulo"
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

export default TituloCreateForm;
