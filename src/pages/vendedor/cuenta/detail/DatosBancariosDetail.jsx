import { Input } from "@nextui-org/react";

const DatosBancariosDetail = ({ data }) => {
  const {
    banco,
    rut_cuenta_bancaria,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data;

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Input
        variant="flat"
        disabled
        size="sm"
        label="Nombre banco"
        labelPlacement="outside"
        placeholder="Ingrese su banco"
        name="banco"
        value={banco}
      />
      <Input
        variant="flat"
        disabled
        size="sm"
        label="Rut cuenta"
        labelPlacement="outside"
        placeholder="Ingrese rut cuenta"
        name="rut_cuenta_bancaria"
        value={rut_cuenta_bancaria}
      />
      <Input
        variant="flat"
        disabled
        size="sm"
        label="Tipo de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese tipo cuenta bancaria"
        name="tipo_cuenta_bancaria"
        value={tipo_cuenta_bancaria}
      />

      <Input
        variant="flat"
        disabled
        size="sm"
        label="Número de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese número cuenta bancaria"
        name="numero_cuenta_bancaria"
        value={numero_cuenta_bancaria}
      />
      <Input
        variant="flat"
        disabled
        size="sm"
        label="Email cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese email cuenta bancaria"
        name="email_cuenta_bancaria"
        value={email_cuenta_bancaria}
        type="email"
      />
    </div>
  );
};

export default DatosBancariosDetail;
