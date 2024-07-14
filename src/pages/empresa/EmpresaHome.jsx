import { useState } from "react";
import useProductos from "../../hooks/useProductos";
import ProductosHome from "./productos/ProductosHome";
import Loading from "../../components/utils/Loading";

const initialDinamicState = {
  page: 1,
  page_size: 30,
};

const EmpresaHome = ({ user }) => {
  const [dynamicState, setDynamicState] = useState(initialDinamicState);
  const [reload, setReload] = useState(false);

  const { data: data, loading } = useProductos(
    user.token,
    dynamicState,
    reload
  );

  const handleDynamicStateChange = (e) => {
    setDynamicState({ ...dynamicState, [e.target.name]: e.target.value });
  };

  const resetState = () => {
    setReload(!reload);
  };

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <ProductosHome data={data} resetState={resetState} user={user} />
      )}
    </>
  );
};

export default EmpresaHome;
