import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createHabilitacion } from "../../../api/habilitacion";

const initialState = {
  ruta: "",
};

const HabilitacionCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { ruta } = values;

  const handleSubmit = () => {
    setLoading(true);
    createHabilitacion(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Estado creado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear estado");
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
            values={ruta}
            label="Nombre ruta"
            labelPlacement="outside"
            placeholder="Ingrese nombre ruta"
            name="ruta"
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

export default HabilitacionCreateForm;
