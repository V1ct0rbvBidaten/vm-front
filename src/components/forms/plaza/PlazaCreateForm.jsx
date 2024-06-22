import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createPlaza } from "../../../api/plaza";

const initialState = {
  nombre_plaza: "",
};

const PlazaCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { nombre_plaza } = values;

  const handleSubmit = () => {
    setLoading(true);
    createPlaza(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Plaza creada exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear plaza");
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
            values={nombre_plaza}
            label="Nombre plaza"
            labelPlacement="outside"
            placeholder="Ingrese nombre plaza"
            name="nombre_plaza"
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

export default PlazaCreateForm;
