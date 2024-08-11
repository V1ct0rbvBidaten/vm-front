import { Button, Input } from "@nextui-org/react";

const PasswordUpdate = ({ data, handleChange, handleSubmit }) => {
  const { new_password, current_password, confirm_new_password } = data;

  return (
    <div className="grid gap-2">
      <Input
        variant="bordered"
        label="Contraseña actual"
        labelPlacement="outside"
        size="sm"
        type={"password"}
        value={current_password}
        name="current_password"
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Nueva Contraseña"
        labelPlacement="outside"
        size="sm"
        type={"password"}
        value={new_password}
        name="new_password"
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Confirme Nueva Contraseña"
        labelPlacement="outside"
        size="sm"
        type={"password"}
        value={confirm_new_password}
        name="confirm_new_password"
        onChange={handleChange}
      />
      <Button className="w-100 bg-foreground text-white" onClick={handleSubmit}>
        Cambiar contraseña
      </Button>
    </div>
  );
};

export default PasswordUpdate;
