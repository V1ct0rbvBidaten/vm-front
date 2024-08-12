import { useEffect, useRef, useState } from "react";
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
import { changePassword } from "../../../api/auth";
import { toast } from "react-toastify";
import DatosPersonalesUpdate from "./update/DatosPersonalesUpdate";
import DatosPerfilEmpresaUpdate from "./update/DatosPerfilEmpresaUpdate";
import DatosEmpresaDetail from "./detail/DatosEmpresaDetail";
import DatosEmpresaUpdate from "./update/DatosEmpresaUpdate";
import DatosBancariosDetail from "./detail/DatosBancariosDetail";
import DatosBancariosUpdate from "./update/DatosBancariosUpdate";
import PasswordUpdate from "./update/PasswordUpdate";
import PasswordDetail from "./detail/PasswordDetail";

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
  const [updateDataEmpresa, setUpdateDataEmpresa] = useState(null);
  const [imagenPrincipal, setImagenPrincipal] = useState(null);
  const [newPassword, setNewPassword] = useState(initialStatePassword);
  const [portada, setPortada] = useState(null);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const scrollPositionRef = useRef(0);

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
    if (dataEmpresa)
      setImagenPrincipal(dataEmpresa.detail.data.imagen_principal);
    if (dataEmpresa) setPortada(dataEmpresa.detail.data.background);
  }, [data, dataEmpresa]);

  useEffect(() => {
    window.scrollTo(0, scrollPositionRef.current);
  }, [togleEdit]);

  const handleTabChange = () => {
    scrollPositionRef.current = window.scrollY;
  };

  if (
    loading ||
    loadingEmpresa ||
    !updateDataPerfil ||
    !updateDataEmpresa ||
    loadingSubmit
  )
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
    updateDataEmpresa.background = portada;
    updateDataEmpresa.imagen_principal = imagenPrincipal;
    updateEmpresa(user.token, updateDataEmpresa, user.id_empresa)
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

  const handleImagePortadaChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setLoadingSubmit(true);
      updateDataEmpresa.background = reader.result;
      updateEmpresa(user.token, updateDataEmpresa, user.id_empresa)
        .then(() => {
          toast.success("Perfil actualizado correctamente");
        })
        .catch((error) => {
          console.error("Error al actualizar perfil: ", error);
          toast.error("Error al actualizar perfil");
        })
        .finally(() => {
          setReload(!reload);
          setLoadingSubmit(false);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImagePrincipalChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setLoadingSubmit(true);
      updateDataEmpresa.imagen_principal = reader.result;
      updateEmpresa(user.token, updateDataEmpresa, user.id_empresa)
        .then(() => {
          toast.success("Perfil actualizado correctamente");
        })
        .catch((error) => {
          console.error("Error al actualizar perfil: ", error);
          toast.error("Error al actualizar perfil");
        })
        .finally(() => {
          setReload(!reload);
          setLoadingSubmit(false);
        });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-100 p-4 bg-white rounded-md shadow-md flex flex-col gap-4">
      <DatosPerfilEmpresaUpdate
        data={updateDataEmpresa}
        handleImagePortadaChange={handleImagePortadaChange}
        handleImagePrincipalChange={handleImagePrincipalChange}
        imagen_principal={imagenPrincipal}
        background={portada}
        handleChangeEmpresa={handleChangeEmpresa}
      />
      <div>
        <div className="flex w-full flex-col">
          <Tabs aria-label="Options" variant="underlined" color="primary">
            <Tab
              key="datosRepresentanteLegal"
              title="Datos del representante legal"
              style={{ width: "100%", textAlign: "left" }}
              className="w-full "
            >
              <Card className="w-full">
                <CardBody>
                  <div className=" flex flex-col gap-4 p-4 ">
                    <div className="flex justify-between">
                      <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                        Datos del representante legal
                      </h4>
                      {/* <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        onClick={() => handleTogleEdit("datosPersonales")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button> */}
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
              key="datosEmpresa"
              title="Datos Empresa"
              className="w-full"
              onSelectionChange={handleTabChange}
            >
              <Card className="w-full">
                <CardBody>
                  <div className=" flex flex-col gap-4 p-4 ">
                    <div className="flex justify-between">
                      <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                        Datos Empresa
                      </h4>
                      <Button
                        className="bg-emerald-500 text-white h-6"
                        isIconOnly
                        onClick={() => handleTogleEdit("datosEmpresa")}
                      >
                        <PencilSquareIcon className="h-4" />
                      </Button>
                    </div>
                    {togleEdit.datosEmpresa ? (
                      <DatosEmpresaUpdate
                        data={updateDataEmpresa}
                        handleChange={handleChangeEmpresa}
                        handleSubmit={handleUpdateEmpresa}
                      />
                    ) : (
                      <DatosEmpresaDetail data={updateDataEmpresa} />
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
                  <div className=" flex flex-col gap-4 p-4 ">
                    <div className="flex justify-between">
                      <h4 className="col-span-2 tracking-wide text-xl font-semibold">
                        Cambiar Contraseña
                      </h4>
                    </div>

                    <PasswordUpdate
                      data={newPassword}
                      handleChange={passwordChange}
                      handleSubmit={handleUpdatePassword}
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
