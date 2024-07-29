import NoProfile from "../../../assets/noprofile.webp";
import NoImage from "../../../assets/no-image.jpg";
import { useState } from "react";
import { useSelector } from "react-redux";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import EmpresaBanner from "../../../components/utils/EmpresaBanner";

const VentasHome = () => {
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const urlEmpresa = `empresa/${user.id_empresa}`;

  const { data: dataEmpresa, loading: loadingEmpresa } = useFetchById(
    user.token,
    urlEmpresa,
    reload
  );

  if (loadingEmpresa)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  const {
    descripcion,
    rubro,
    nombre_razon_social,
    imagen_principal,
    background,
  } = dataEmpresa.detail.data;

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <EmpresaBanner data={dataEmpresa.detail.data} />
      </div>
    </>
  );
};

export default VentasHome;
