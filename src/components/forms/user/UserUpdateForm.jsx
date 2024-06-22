import { useState } from "react";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/solid";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import { updateUser } from "../../../api/auth";
import { toast } from "react-toastify";
const UserUpdateForm = ({ user, resetState, data, onClose }) => {
  const [values, setValues] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleChange = (e) => {
    const { value, type, checked } = e.target;
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? checked : value,
    });
  };

  const { name, role, email, password, activo } = values;

  const handleSubmit = () => {
    setLoading(true);

    let selectedKeys = ["name", "role", "email", "password", "activo"];

    let selected = Object.keys(values)
      .filter((key) => selectedKeys.includes(key))
      .reduce((obj, key) => {
        obj[key] = values[key];
        return obj;
      }, {});

    updateUser(user.token, selected, values._id)
      .then((res) => {
        console.log(res);
        toast.success("Usuario actualizado exitosamente!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("No se ha podido actualizar usuario");
      })
      .finally(() => {
        setLoading(false);
        resetState();
        onClose();
      });
  };

  const roles = [
    {
      id: 1,
      key: "admin",
      value: "admin",
      name: "Admin",
      desc: "Usuario con permisos totales",
    },
    {
      id: 2,
      key: "analista",
      value: "analista",
      name: "Analista",
      desc: "Usuario con permisos de lectura",
    },
    {
      id: 3,
      key: "flota",
      value: "flota",
      name: "Flota",
      desc: "Usuario con permisos de escritura parciales y lectura",
    },
  ];

  return (
    <div className="grid gap-4">
      {loading ? (
        <>Cargando....</>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <Input
              type="text"
              size="sm"
              label="Nombre cargo"
              labelPlacement="outside"
              placeholder="Ingrese nombre cargo"
              value={name}
              name="name"
              onChange={handleChange}
            />
            <Input
              type="text"
              size="sm"
              label="Nombre cargo"
              labelPlacement="outside"
              placeholder="Ingrese nombre cargo"
              value={email}
              name="email"
              onChange={handleChange}
            />
            <Input
              type="text"
              size="sm"
              className="col-span-2"
              label="Contraseña"
              labelPlacement="outside"
              placeholder="Ingrese contraseña"
              value={password}
              name="password"
              onChange={handleChange}
            />

            <Select
              size="sm"
              name="role"
              value={role}
              onChange={handleChange}
              defaultSelectedKeys={[`${role}`]}
              label="Rol"
              labelPlacement="outside"
              placeholder="Seleccion el rol del usuario"
              items={roles}
            >
              {(item) => (
                <SelectItem key={item.key} value={item.value}>
                  {item.name}
                </SelectItem>
              )}
            </Select>
            <Checkbox isSelected={activo} onChange={handleChange} name="activo">
              Activo
            </Checkbox>
          </div>
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

export default UserUpdateForm;
