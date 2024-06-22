import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { updateEstado } from "../../../api/estado";
import { toast } from "react-toastify";
import ColorPicker from "react-pick-color";

const EstadoUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);
  const [color, setColor] = useState("#fff");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { estado, remunerado, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["estado", "remunerado", "color", "activo"];

    if (color !== "#fff") {
      values.color = color;
    }

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    updateEstado(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Estado actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar estado");
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
            label="Estado"
            labelPlacement="outside"
            placeholder="Ingrese nombre estado"
            value={estado}
            name="estado"
            onChange={handleChange}
          />
          <Checkbox
            isSelected={remunerado}
            onChange={handleChange}
            name="remunerado"
          >
            Remunerado
          </Checkbox>
          <Checkbox isSelected={activo} onChange={handleChange} name="activo">
            Activo
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

export default EstadoUpdateForm;
