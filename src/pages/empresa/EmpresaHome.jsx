import { useState } from "react";
import useProductos from "../../hooks/useProductos";
import ProductosHome from "./productos/ProductosHome";

const initialDinamicState = {
  page: 1,
  page_size: 5,
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

  return (
    <>
      {loading ? (
        <>Loading...</>
      ) : (
        <ProductosHome data={data} resetState={resetState} />
      )}
    </>
  );
};

export default EmpresaHome;
