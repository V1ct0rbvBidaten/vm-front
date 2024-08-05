import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { Input } from "@nextui-org/react";
import React from "react";

const PasswordDetail = ({ user }) => {
  return (
    <div className="grid grid-cols-2  gap-4  p-4 ">
      <h4 className="col-span-3 tracking-wide text-xl font-semibold">
        Contraseña
      </h4>
      <Input
        variant="bordered"
        label="Mi correo"
        labelPlacement="outside"
        size="sm"
        disabled
        value={user.correo_electronico}
      />
      <Input
        variant="bordered"
        label="Contraseña"
        labelPlacement="outside"
        size="sm"
        endContent={
          <button className="focus:outline-none" type="button">
            <EyeSlashIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
          </button>
        }
        type={"password"}
        value={user.password}
      />
    </div>
  );
};

export default PasswordDetail;
