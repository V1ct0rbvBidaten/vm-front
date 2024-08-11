import { Button, Input, Select, SelectItem } from "@nextui-org/react";

const DatosBancariosUpdate = ({
  data,
  handleChange,
  handleSubmit,
  loading,
}) => {
  const {
    banco,
    rut_cuenta_bancaria,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data;

  return (
    <form
      className="grid grid-cols-3 items-center gap-4"
      onSubmit={handleSubmit}
    >
      <Input
        variant="bordered"
        label="Nombre banco"
        labelPlacement="outside"
        placeholder="Ingrese su banco"
        name="banco"
        value={banco}
        size="sm"
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Rut cuenta"
        labelPlacement="outside"
        placeholder="Ingrese rut cuenta"
        name="rut_cuenta_bancaria"
        value={rut_cuenta_bancaria}
        onChange={handleChange}
        size="sm"
      />
      <Select
        variant="bordered"
        label="Tipo de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese tipo cuenta bancaria"
        name="tipo_cuenta_bancaria"
        value={tipo_cuenta_bancaria}
        onChange={handleChange}
        size="sm"
      >
        <SelectItem key="vista" value="vista">
          Vista
        </SelectItem>
        <SelectItem key="corriente" value="corriente">
          Corriente
        </SelectItem>
        <SelectItem key="ahorro" value="ahorro">
          Ahorro
        </SelectItem>
      </Select>
      <Input
        variant="bordered"
        label="Número de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese número cuenta bancaria"
        name="numero_cuenta_bancaria"
        value={numero_cuenta_bancaria}
        size="sm"
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Email cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese email cuenta bancaria"
        name="email_cuenta_bancaria"
        value={email_cuenta_bancaria}
        onChange={handleChange}
        size="sm"
        type="email"
      />
      <Button
        type="submit"
        className="col-span-3 bg-foreground text-white"
        isLoading={loading}
      >
        Actualizar
      </Button>
    </form>
  );
};

export default DatosBancariosUpdate;
