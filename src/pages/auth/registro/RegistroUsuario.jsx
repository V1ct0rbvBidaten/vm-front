import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import { useState } from "react";

const RegistroUsuario = ({
  email,
  values,
  handleChange,
  isEqual,
  isRightFormat,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { contraseña, validacion_contraseña } = values;

  return (
    <div className="flex  flex-col  gap-4 w-[100%]">
      <Input
        variant="bordered"
        label="Email"
        isDisabled
        value={email}
        labelPlacement="outside"
      />
      <Input
        label="Contraseña"
        variant="bordered"
        size="sm"
        placeholder="Ingresa tu contraseña"
        labelPlacement="outside"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            ) : (
              <EyeIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        value={contraseña}
        name="contraseña"
        onChange={handleChange}
      />

      <Input
        variant="bordered"
        label="Re-Ingrese Contraseña"
        labelPlacement="outside"
        placeholder="Ingrese nuevamente su contraseña"
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            ) : (
              <EyeIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        className=" "
        name="validacion_contraseña"
        value={validacion_contraseña}
        onChange={handleChange}
      />
      {!isEqual(contraseña, validacion_contraseña) && (
        <div className="flex flex-col gap-2">
          <p className="text-rose-500 text-left ml-0 text-xs italic">
            *** Las contraseñas no coinciden.
          </p>
        </div>
      )}

      {!isRightFormat(contraseña) && (
        <p className="text-rose-500 text-left ml-0 text-xs italic">
          *** La contraseña debe ser mayor a 8 caracteres y contener al menos
          una mayuscula.
        </p>
      )}
    </div>
  );
};

export default RegistroUsuario;
