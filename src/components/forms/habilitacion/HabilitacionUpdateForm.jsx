import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { updateHabilitacion } from "../../../api/habilitacion";
import { toast } from "react-toastify";

const HabilitacionUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const { ruta, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["ruta", "activo"];

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    updateHabilitacion(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Habilitación actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar habilitación");
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
            label="Ruta"
            labelPlacement="outside"
            placeholder="Ingrese nombre ruta"
            value={ruta}
            name="ruta"
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

export default HabilitacionUpdateForm;
