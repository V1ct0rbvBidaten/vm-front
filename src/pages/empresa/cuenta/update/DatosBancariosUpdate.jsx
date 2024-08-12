import { Button, Input, Select, SelectItem } from "@nextui-org/react";

import bancos from "../../../../utils/bancos.json";
import ReactSelect from "react-select";
const DatosBancariosUpdate = ({
  data,
  handleChange,
  loading,
  handleSubmit,
}) => {
  const {
    banco,
    rut_cuenta_bancaria,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data;

  const handleBancoChange = (value) => {
    const event = {
      target: {
        name: "banco",
        value: value.value,
      },
    };
    handleChange(event);
  };

  const optionsBanks = bancos.banks.map((c) => {
    return { value: c, label: c };
  });

  return (
    <form
      className="grid grid-cols-2 items-center gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col justify-start gap-2">
        <span className="text-sm">
          Banco <span className="text-rose-500">*</span>
        </span>
        <ReactSelect
          options={optionsBanks}
          required
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderRadius: "0.7rem",
              border: "2px solid #eaeaea",
            }),
            menu: (baseStyles) => ({
              ...baseStyles,
              zIndex: "999 ",
            }),
          }}
          onChange={handleBancoChange}
          placeholder="Seleccione banco"
          defaultInputValue={data.banco}
        />
      </div>
      <Input
        variant="bordered"
        label="Rut cuenta"
        labelPlacement="outside"
        placeholder="Ingrese rut cuenta"
        name="rut_cuenta_bancaria"
        value={rut_cuenta_bancaria}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        label="Número de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese número cuenta bancaria"
        name="numero_cuenta_bancaria"
        value={numero_cuenta_bancaria}
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
        type="email"
      />{" "}
      <Select
        variant="bordered"
        label="Tipo de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese tipo cuenta bancaria"
        name="tipo_cuenta_bancaria"
        value={tipo_cuenta_bancaria}
        onChange={handleChange}
      >
        <SelectItem key="Cuenta Vista" value="Cuenta Vista">
          Vista
        </SelectItem>
        <SelectItem key="Cuenta Corriente" value="Cuenta Corriente">
          Corriente
        </SelectItem>
        <SelectItem key="Cuenta Ahorro" value="Cuenta Ahorro">
          Ahorro
        </SelectItem>
      </Select>
      <Button
        type="submit"
        className="col-span-2 bg-foreground text-white"
        isLoading={loading}
      >
        Actualizar
      </Button>
    </form>
  );
};

export default DatosBancariosUpdate;
