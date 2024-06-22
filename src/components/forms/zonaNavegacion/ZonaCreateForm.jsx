import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createZonaNavegacion } from "../../../api/zonaNavegacion";

const initialState = {
  nombre_zona: "",
};

const ZonaCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const { nombre_zona } = values;

  const handleSubmit = () => {
    setLoading(true);
    createZonaNavegacion(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Zona creada exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear zona");
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
            values={nombre_zona}
            label="Zona de navegación"
            labelPlacement="outside"
            placeholder="Ingrese nombre zona"
            name="nombre_zona"
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

export default ZonaCreateForm;
