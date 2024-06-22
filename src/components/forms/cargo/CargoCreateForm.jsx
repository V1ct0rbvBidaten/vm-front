import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { createCargo } from "../../../api/cargo";
import { toast } from "react-toastify";

const initialState = {
  nombre_cargo: "",
};

const CargoCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { nombre_cargo } = values;

  const handleSubmit = () => {
    setLoading(true);
    createCargo(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Cargo creado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear cargo");
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
            label="Nombre cargo"
            labelPlacement="outside"
            placeholder="Ingrese nombre cargo"
            values={nombre_cargo}
            name="nombre_cargo"
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

export default CargoCreateForm;
