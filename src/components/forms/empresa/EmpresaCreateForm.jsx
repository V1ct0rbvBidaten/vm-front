import { useState } from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { Button, Input } from "@nextui-org/react";
import { toast } from "react-toastify";
import { createEmpresa } from "../../../api/empresa";
import { formatRut, validateRut } from "../../../functions/rut";

const initialState = {
  nombre_empresa: "",
  rut_empresa: "",
};

const EmpresaCreateForm = ({ user, resetState, onClose }) => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "rut_empresa") {
      let rut = formatRut(e.target.value);
      setValues({ ...values, [e.target.name]: rut });
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  const { nombre_empresa, rut_empresa } = values;

  const handleSubmit = () => {
    setLoading(true);

    let rutValido = validateRut(rut_empresa);

    if (rutValido) {
      setLoading(false);
      return toast.error("Rut invalido");
    }
    createEmpresa(user.token, values)
      .then((res) => {
        console.log(res);
        toast.success("Empresa creada exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido crear empresa");
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
            name="rut_empresa"
            value={rut_empresa}
            onChange={handleChange}
            type="text"
            labelPlacement="outside"
            placeholder="Ingrese rut empresa"
            label="Rut empresa"
          />
          <Input
            type="text"
            values={nombre_empresa}
            label="Nombre empresa"
            labelPlacement="outside"
            placeholder="Ingrese nombre de empresa"
            name="nombre_empresa"
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

export default EmpresaCreateForm;
