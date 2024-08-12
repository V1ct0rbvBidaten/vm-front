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
import PasswordUpdate from "./update/PasswordUpdate";
import { changePassword } from "../../../api/auth";

const initialStateTogleEdit = {
  datosPersonales: false,
  datosEmpresa: false,
  datosBancarios: false,
  contrasena: false,
};

const initialStatePassword = {
  current_password: "",
  new_password: "",
  confirm_new_password: "",
};

const CuentaHome = () => {
  const [togleEdit, setTogleEdit] = useState(initialStateTogleEdit);
  const [updateDataPerfil, setUpdateDataPerfil] = useState(null);
  const [newPassword, setNewPassword] = useState(initialStatePassword);
  const [loadingUpdate, setLoadingUpdate] = useState(false);
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

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword.new_password !== newPassword.confirm_new_password) {
      toast.error("Las contraseñas no coinciden");
      return;
    }
    changePassword(user.token, newPassword, user.id_usuario)
      .then(() => {
        toast.success("Contraseña actualizada correctamente");
      })
      .catch((error) => {
        console.error("Error al actualizar contraseña: ", error);
        toast.error("Error al actualizar contraseña");
      })
      .finally(() => {
        setReload(!reload);
        setNewPassword(initialStatePassword);
      });
  };

  const passwordChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });
  };

  const handleUpdatePerfil = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
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
        setLoadingUpdate(false);
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
              <div className=" flex flex-col gap-4 p-4 ">
                <div className="flex justify-between">
                  <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                    Datos Personales
                  </h4>
                  {togleEdit.datosPersonales ? (
                    <div className="flex  gap-2">
                      <Button
                        className="bg-rose-400 text-white h-6"
                        onClick={() => handleTogleEdit("datosPersonales")}
                      >
                        Cancelar
                      </Button>{" "}
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        disabled
                        onClick={() => handleTogleEdit("datosPersonales")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="bg-emerald-500 text-white h-6"
                      isIconOnly
                      onClick={() => handleTogleEdit("datosPersonales")}
                    >
                      <PencilSquareIcon className="h-4" />
                    </Button>
                  )}
                </div>
                {togleEdit.datosPersonales ? (
                  <DatosPersonalesUpdate
                    data={updateDataPerfil}
                    handleChange={handleChangePerfil}
                    loading={loadingUpdate}
                    handleSubmit={handleUpdatePerfil}
                  />
                ) : (
                  <DatosPersonalesDetail data={updateDataPerfil} />
                )}
              </div>
            </Tab>

            <Tab
              key="datosBancarios"
              title="Datos Bancarios"
              className="w-full"
            >
              <div className=" flex flex-col gap-4 p-4 ">
                <div className="flex justify-between">
                  <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                    Datos Bancarios
                  </h4>
                  {togleEdit.datosBancarios ? (
                    <div className="flex  gap-2">
                      <Button
                        className="bg-rose-400 text-white h-6"
                        onClick={() => handleTogleEdit("datosBancarios")}
                      >
                        Cancelar
                      </Button>
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        disabled
                        onClick={() => handleTogleEdit("datosBancarios")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button
                      className="bg-emerald-500 text-white h-6"
                      isIconOnly
                      onClick={() => handleTogleEdit("datosBancarios")}
                    >
                      <PencilSquareIcon className="h-4" />
                    </Button>
                  )}
                </div>

                {togleEdit.datosBancarios ? (
                  <DatosBancariosUpdate
                    data={updateDataPerfil}
                    handleChange={handleChangePerfil}
                    handleSubmit={handleUpdatePerfil}
                    loading={loadingUpdate}
                  />
                ) : (
                  <DatosBancariosDetail data={updateDataPerfil} />
                )}
              </div>
            </Tab>
            <Tab key="contrasena" title="Cambiar Contraseña" className="w-full">
              <div className="flex flex-col    p-4 ">
                <h4 className=" tracking-wide text-xl font-semibold">
                  Cambiar contraseña
                </h4>
                <PasswordUpdate
                  data={newPassword}
                  loading={loadingUpdate}
                  handleChange={passwordChange}
                  handleSubmit={handleUpdatePassword}
                />
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default CuentaHome;
