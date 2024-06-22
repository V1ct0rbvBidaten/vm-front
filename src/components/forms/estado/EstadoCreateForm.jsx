import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input, Checkbox } from "@nextui-org/react";
import { createEstado } from "../../../api/estado";
import { toast } from "react-toastify";
import ColorPicker from "react-pick-color";

const initialState = {
  estado: "",
  remunerado: false,
  color: "#fff",
};

const EstadoCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { estado, remunerado } = values;

  const handleSubmit = () => {
    setLoading(true);

    values.color = color;
    createEstado(user.token, values)
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
    <div className="grid justify-center gap-4">
      {loading ? (
        <>Cargando....</>
      ) : (
        <>
          <Input
            type="text"
            values={estado}
            label="Estado asistencia"
            labelPlacement="outside"
            placeholder="Ingrese nombre estado"
            name="estado"
            size="sm"
            onChange={handleChange}
          />

          <Checkbox
            checked={remunerado}
            name="remunerado"
            onChange={handleChange}
          >
            Remunerado
          </Checkbox>
          <ColorPicker
            color={color}
            onChange={(color) => setColor(color.hex)}
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

export default EstadoCreateForm;
