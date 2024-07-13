import { useState } from "react";
import useFetchById from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardBody,
  Input,
  Tabs,
  Tab,
  Divider,
} from "@nextui-org/react";
import {
  EyeSlashIcon,
  LockClosedIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import Loading from "../../../components/utils/Loading";

const CuentaHome = () => {
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const url = `cuenta-user/${user.id_usuario}`;

  const { data: data, loading: loading } = useFetchById(
    user.token,
    url,
    reload
  );

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  const {
    nombres,
    apellidos,
    direccion,
    telefono,
    rut_cuenta_bancaria,
    banco,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data.detail.data;

  return (
    <div className="w-100 p-4 bg-white rounded-md shadow-md flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">Perfil</h1>
        <Button
          className="bg-emerald-500 text-white h-6"
          startContent={<PencilSquareIcon className="h-4" />}
        >
          Editar perfil
        </Button>
      </div>
      <Divider />
      <div className="mt-5">
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" isVertical={true} color="primary">
            <Tab
              key="datosPersonales"
              title="Datos Personales"
              className="w-full"
            >
              <Card className="w-full">
                <CardBody>
                  <div className="grid grid-cols-2  gap-4  p-4 ">
                    <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                      Datos Personales
                    </h4>
                    <Input
                      variant="bordered"
                      label="Nombres"
                      labelPlacement="outside"
                      disabled
                      size="sm"
                      value={nombres}
                    />
                    <Input
                      variant="bordered"
                      label="Apellidos"
                      size="sm"
                      labelPlacement="outside"
                      disabled
                      value={apellidos}
                    />
                    <Input
                      variant="bordered"
                      label="Dirección"
                      size="sm"
                      labelPlacement="outside"
                      disabled
                      value={direccion}
                    />
                    <Input
                      variant="bordered"
                      label="Teléfono"
                      size="sm"
                      labelPlacement="outside"
                      disabled
                      value={telefono}
                    />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="datosEmpresa" title="Datos Empresa" className="w-full">
              <Card>
                <CardBody>
                  <div className="grid grid-cols-2  gap-4  p-4 ">
                    <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                      Datos Empresa
                    </h4>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="datosBancarios"
              title="Datos Bancarios"
              className="w-full"
            >
              <Card>
                <CardBody>
                  <div className="grid grid-cols-2  gap-4  p-4 ">
                    <h4 className="col-span-3 tracking-wide text-xl font-semibold">
                      Datos Personales
                    </h4>
                    <Input
                      variant="bordered"
                      label="Nombres"
                      labelPlacement="outside"
                      disabled
                      value={nombres}
                    />
                    <Input
                      variant="bordered"
                      label="Apellidos"
                      labelPlacement="outside"
                      disabled
                      value={apellidos}
                    />
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="datosCuenta" title="Cuenta" className="w-full">
              <Card>
                <CardBody>
                  <div className="grid grid-cols-2  gap-4  p-4 ">
                    <h4 className="col-span-3 tracking-wide text-xl font-semibold">
                      Datos Cuenta
                    </h4>
                    <Input
                      variant="bordered"
                      label="Mi correo"
                      labelPlacement="outside"
                      disabled
                      value={user.correo_electronico}
                    />
                    <Input
                      variant="bordered"
                      label="Contraseña"
                      labelPlacement="outside"
                      endContent={
                        <button className="focus:outline-none" type="button">
                          <EyeSlashIcon className="h-6 mt-2 text-default-400 pointer-events-none flex-shrink-0" />
                        </button>
                      }
                      type={"password"}
                      value={user.password}
                    />
                  </div>
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CuentaHome;
