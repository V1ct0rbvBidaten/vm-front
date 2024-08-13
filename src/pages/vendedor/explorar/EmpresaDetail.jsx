import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { Button, Divider, useSelect, Pagination } from "@nextui-org/react";
import { useState } from "react";
import ProductoCardVendedor from "./Producto/ProductoCardVendedor";
import { useNavigate, useParams } from "react-router-dom";
import useProductos from "../../../hooks/useProductos";
import Loading from "../../../components/utils/Loading";
import useFetchById from "../../../hooks/useFetch";
import EmpresaBanner from "../../../components/utils/EmpresaBanner";

const initialState = {
  page: 1,
  page_size: 10,
  id_empresa: "",
};

const EmpresaDetail = () => {
  const user = useSelect((state) => state.user);
  const { id } = useParams();

  const [reload, setReload] = useState(false);
  const [params, setParams] = useState({ ...initialState, id_empresa: id });

  let navigate = useNavigate();

  const { data, loading } = useProductos(user.token, params, reload);

  const urlEmpresa = `empresa/${id}`;

  const { data: dataEmpresa, loading: loadingEmpresa } = useFetchById(
    user.token,
    urlEmpresa,
    reload
  );

  const handleParamsChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const noData = {
    nombre_producto: "No hay productos",
    precio: 0,
    descripcion: "No hay productos",
  };

  if (loading || loadingEmpresa)
    return (
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4 flex flex-col gap-2">
        <Loading />
      </div>
    );

  let productos =
    data &&
    data.detail.data.products !== null &&
    data.detail.data.products.length > 0
      ? data.detail.data.products
      : [];

  const { page, page_size } = params;

  const totalItems = data.detail.data.total;

  const pages = Math.ceil(totalItems / page_size);

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4 flex flex-col gap-2">
        <EmpresaBanner data={dataEmpresa.detail.data} />

        <div className="w-full flex flex-col sm:flex-row gap-4 mb-2 p-4 justify-end items-center">
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small ml-2"
              value={page_size}
              name="page_size"
              onChange={handleParamsChange}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
        {productos && productos.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
              {productos.map((c) => (
                <ProductoCardVendedor key={c.id_producto} data={c} />
              ))}
            </div>
            <div className="w-full bg-stone-100 pr-4 pl-4 sm:pr-10 sm:pl-10 flex flex-col sm:flex-row justify-between items-center">
              <Pagination
                total={pages}
                initialPage={page}
                showControls
                color="secondary"
                className="m-4"
                name={page}
                onChange={(page) =>
                  setParams({ ...params, page: Number(page) })
                }
              />
              <span className="text-default-400 text-small mt-2 sm:mt-0">
                Total {totalItems} registros
              </span>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
            <ProductoCardVendedor data={noData} />
          </div>
        )}
      </div>
    </>
  );
};

export default EmpresaDetail;
