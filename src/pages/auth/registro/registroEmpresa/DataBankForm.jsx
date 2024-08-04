import { Input, Select, SelectItem } from "@nextui-org/react";
import bancos from "../../../../utils/bancos.json";

const DataBankForm = ({ handleChange, values }) => {
  const {
    banco,
    rut_cuenta_bancaria,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = values;

  return (
    <div className="grid grid-cols-2 items-center gap-4">
      <Select
        variant="bordered"
        label="Nombre banco"
        labelPlacement="outside"
        placeholder="Ingrese su banco"
        name="banco"
        value={banco}
        isRequired
        onChange={handleChange}
      >
        {bancos.banks.map((banco) => (
          <SelectItem key={banco} value={banco}>
            {banco}
          </SelectItem>
        ))}
      </Select>
      <Input
        variant="bordered"
        label="Rut cuenta"
        labelPlacement="outside"
        placeholder="Ingrese rut cuenta"
        name="rut_cuenta_bancaria"
        isRequired
        value={rut_cuenta_bancaria}
        onChange={handleChange}
      />

      <Select
        variant="bordered"
        label="Tipo de cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese tipo cuenta bancaria"
        name="tipo_cuenta_bancaria"
        value={tipo_cuenta_bancaria}
        isRequired
        onChange={handleChange}
      >
        <SelectItem key="vista" value="vista">
          Vista
        </SelectItem>
        <SelectItem key="Corriente" value="Corriente">
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
        isRequired
        value={numero_cuenta_bancaria}
        onChange={handleChange}
      />
      <Input
        variant="bordered"
        className="col-span-2"
        label="Email cuenta bancaria"
        labelPlacement="outside"
        placeholder="Ingrese email cuenta bancaria"
        name="email_cuenta_bancaria"
        isRequired
        value={email_cuenta_bancaria}
        onChange={handleChange}
        type="email"
      />
    </div>
  );
};

export default DataBankForm;
