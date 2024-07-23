import { useState } from "react";
import useProductos from "../../hooks/useProductos";
import ProductosHome from "./productos/ProductosHome";
import Loading from "../../components/utils/Loading";

const initialState = {
  page: 1,
  page_size: 10,
  id_empresa: "",
};

const EmpresaHome = ({ user }) => {
  const idEmpresa = user.id_empresa;

  const [params, setParams] = useState({
    ...initialState,
    id_empresa: idEmpresa,
  });
  const [reload, setReload] = useState(false);

  const { data: data, loading } = useProductos(user.token, params, reload);

  const handleParamsChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
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
        <>
          <ProductosHome
            data={data}
            resetState={resetState}
            user={user}
            handleParamsChange={handleParamsChange}
            params={params}
            setParams={setParams}
          />
        </>
      )}
    </>
  );
};

export default EmpresaHome;
