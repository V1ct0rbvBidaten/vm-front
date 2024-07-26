import { useEffect, useState } from "react";
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
import { EyeSlashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import Loading from "../../../components/utils/Loading";
import DatosPersonalesDetail from "./detail/DatosPersonalesDetail";
import { updatePerfil } from "../../../api/perfil";
import { updateEmpresa } from "../../../api/empresas";
import { toast } from "react-toastify";
import DatosPersonalesUpdate from "./update/DatosPersonalesUpdate";

const initialStateTogleEdit = {
  datosPersonales: false,
  datosEmpresa: false,
  datosBancarios: false,
  contrasena: false,
};

const CuentaHome = () => {
  const [togleEdit, setTogleEdit] = useState(initialStateTogleEdit);
  const [updateDataPerfil, setUpdateDataPerfil] = useState(null);
  const [updateDataEmpresa, setUpdateDataEmpresa] = useState(null);
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const url = `cuenta-user/${user.id_usuario}`;

  const urlEmpresa = `empresa/${user.id_empresa}`;

  const { data: data, loading: loading } = useFetchById(
    user.token,
    url,
    reload
  );

  const { data: dataEmpresa, loading: loadingEmpresa } = useFetchById(
    user.token,
    urlEmpresa,
    reload
  );

  useEffect(() => {
    if (data) setUpdateDataPerfil(data.detail.data);
    if (dataEmpresa) setUpdateDataEmpresa(dataEmpresa.detail.data);
  }, [data, dataEmpresa]);

  if (loading || loadingEmpresa || !updateDataPerfil || !updateDataEmpresa)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  const {
    rut_cuenta_bancaria,
    banco,
    tipo_cuenta_bancaria,
    numero_cuenta_bancaria,
    email_cuenta_bancaria,
  } = data.detail.data;

  const {
    rut_razon_social,
    nombre_razon_social,
    region_razon_social,
    comuna_razon_social,
    direccion_razon_social,
    rubro,
    telefono_razon_social,
    correo_electronico_razon_social,
  } = dataEmpresa.detail.data;

  const handleUpdatePerfil = (e) => {
    e.preventDefault();
    updatePerfil(user.token, updateDataPerfil, updateDataPerfil.id_perfil)
      .then(() => {
        toast.success("Perfil actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar perfil: ", error);
        toast.error("Error al actualizar perfil");
      })
      .finally(() => {
        setReload(!reload);
        setTogleEdit(initialStateTogleEdit);
      });
  };

  const handleUpdateEmpresa = (e) => {
    e.preventDefault();
    updateEmpresa(user.token, updateDataPerfil, user.id_usuario)
      .then(() => {
        toast.success("Perfil actualizado correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar perfil: ", error);
        toast.error("Error al actualizar perfil");
      })
      .finally(() => {
        setReload(!reload);
      });
  };

  const handleChangePerfil = (e) => {
    const { name, value } = e.target;
    setUpdateDataPerfil({ ...updateDataPerfil, [name]: value });
  };

  const handleChangeEmpresa = (e) => {
    const { name, value } = e.target;
    setUpdateDataEmpresa({ ...updateDataEmpresa, [name]: value });
  };

  const handleTogleEdit = (key) => {
    setTogleEdit({
      ...initialStateTogleEdit,
      [key]: !togleEdit[key],
    });
  };

  return (
    <div className="w-100 p-4 bg-white rounded-md shadow-md flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold tracking-wide">Perfil</h1>
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
                  <div className=" flex flex-col gap-4 p-4 ">
                    <div className="flex justify-between">
                      <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                        Datos Personales
                      </h4>
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        onClick={() => handleTogleEdit("datosPersonales")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                    {togleEdit.datosPersonales ? (
                      <DatosPersonalesUpdate
                        data={updateDataPerfil}
                        handleChange={handleChangePerfil}
                        handleSubmit={handleUpdatePerfil}
                      />
                    ) : (
                      <DatosPersonalesDetail data={updateDataPerfil} />
                    )}
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
                  <div className=" flex flex-col gap-4 p-4 ">
                    <div className="flex justify-between">
                      <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                        Datos Personales
                      </h4>
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        onClick={() => handleTogleEdit("datosEmpresa")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Tab>
            <Tab key="contrasena" title="Contraseña" className="w-full">
              <Card>
                <CardBody>
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
