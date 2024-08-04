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
        isRequired
        name="banco"
        value={banco}
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
        isRequired
        name="rut_cuenta_bancaria"
        value={rut_cuenta_bancaria}
        onChange={handleChange}
      />
      <Select
        variant="bordered"
        label="Tipo de cuenta bancaria"
        labelPlacement="outside"
        isRequired
        placeholder="Ingrese tipo cuenta bancaria"
        name="tipo_cuenta_bancaria"
        value={tipo_cuenta_bancaria}
        onChange={handleChange}
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
        isRequired
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
        isRequired
        onChange={handleChange}
        type="email"
      />
    </div>
  );
};

export default DataBankForm;
