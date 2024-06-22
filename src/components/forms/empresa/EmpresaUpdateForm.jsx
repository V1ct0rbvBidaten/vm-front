import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { updateEmpresa } from "../../../api/empresa";
import { toast } from "react-toastify";
import { formatRut, validateRut } from "../../../functions/rut";

const EmpresaUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (name === "rut_empresa") {
      let rut = formatRut(value);
      setValues({ ...values, [name]: rut });
    } else {
      setValues({
        ...values,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const { rut_empresa, nombre_empresa, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["rut_empresa", "nombre_empresa", "activo"];

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    let rutValido = validateRut(rut_empresa);

    if (rutValido) {
      setLoading(false);
      return toast.error("Rut invalido");
    }

    updateEmpresa(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Empresa actualizada exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar empresa");
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
            label="Rut empresa"
            labelPlacement="outside"
            placeholder="Ingrese rut empresa"
            value={rut_empresa}
            name="rut_empresa"
            onChange={handleChange}
          />
          <Input
            type="text"
            size="sm"
            label="Nombre empresa"
            labelPlacement="outside"
            placeholder="Ingrese nombre empresa"
            value={nombre_empresa}
            name="nombre_empresa"
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

export default EmpresaUpdateForm;
