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
import DatosPerfilEmpresaUpdate from "./update/DatosPerfilEmpresaUpdate";
import DatosBancariosDetail from "./detail/DatosBancariosDetail";
import DatosBancariosUpdate from "./update/DatosBancariosUpdate";

const initialStateTogleEdit = {
  datosPersonales: false,
  datosEmpresa: false,
  datosBancarios: false,
  contrasena: false,
};

const CuentaHome = () => {
  const [togleEdit, setTogleEdit] = useState(initialStateTogleEdit);
  const [updateDataPerfil, setUpdateDataPerfil] = useState(null);
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const url = `cuenta-user/${user.id_usuario}`;

  const { data: data, loading: loading } = useFetchById(
    user.token,
    url,
    reload
  );

  useEffect(() => {
    if (data) setUpdateDataPerfil(data.detail.data);
  }, [data]);

  if (loading || !updateDataPerfil)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

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

  const handleChangePerfil = (e) => {
    const { name, value } = e.target;
    setUpdateDataPerfil({ ...updateDataPerfil, [name]: value });
  };

  const handleTogleEdit = (key) => {
    setTogleEdit({
      ...initialStateTogleEdit,
      [key]: !togleEdit[key],
    });
  };

  return (
    <div className="w-100 p-4 bg-white rounded-md shadow-md flex flex-col gap-4">
      <div>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab
              key="datosPersonales"
              title="Datos Personales"
              style={{ width: "100%", textAlign: "left" }}
              className="w-full "
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
                        Datos Bancarios
                      </h4>
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        onClick={() => handleTogleEdit("datosBancarios")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                    {togleEdit.datosBancarios ? (
                      <DatosBancariosUpdate
                        data={updateDataPerfil}
                        handleChange={handleChangePerfil}
                        handleSubmit={handleUpdatePerfil}
                      />
                    ) : (
                      <DatosBancariosDetail data={updateDataPerfil} />
                    )}
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
