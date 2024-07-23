import {
  ChevronDoubleLeftIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Divider,
  Input,
  useSelect,
  Pagination,
} from "@nextui-org/react";
import { useState } from "react";
import ProductoCardVendedor from "./Producto/ProductoCardVendedor";
import { useNavigate, useParams } from "react-router-dom";
import useProductos from "../../../hooks/useProductos";
import Loading from "../../../components/utils/Loading";

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

  const handleParamsChange = (e) => {
    setParams({ ...params, [e.target.name]: e.target.value });
  };

  const noData = {
    nombre_producto: "No hay productos",
    precio: "0000",
    descripcion: "No hay productos",
  };

  if (loading)
    return (
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4 flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Nombre Empresa</h1>
          <Button
            className="bg-emerald-500 text-white h-6"
            onClick={() => navigate("/vendedor/explorar")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
            aria-label="Volver"
          >
            Volver
          </Button>
        </div>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Divider />
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
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Nombre Empresa</h1>
          <Button
            className="bg-emerald-500 text-white h-6"
            onClick={() => navigate("/vendedor/explorar")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
            aria-label="Volver"
          >
            Volver
          </Button>
        </div>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Divider />
        <div className="w-full flex gap-4 mb-2 p-4 justify-end">
          <label className="flex items-end text-default-400 text-small">
            Filas por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
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
            <div className="grid grid-cols-5 gap-4 p-4 w-full">
              {productos.map((c) => (
                <ProductoCardVendedor key={c.id_producto} data={c} />
              ))}
            </div>
            <div className="w-full bg-stone-100 pr-10 pl-10 flex justify-between items-center">
              <Pagination
                total={pages}
                initialPage={page}
                loop
                showControls
                color="secondary"
                className="m-4"
                name={page}
                onChange={(page) =>
                  setParams({ ...params, page: Number(page) })
                }
              />
              <span className="text-default-400 text-small">
                Total {totalItems} registros
              </span>
            </div>
          </>
        ) : (
          <div className="grid grid-cols-6 gap-4 p-4 w-full">
            <ProductoCardVendedor data={noData} />
          </div>
        )}
      </div>
    </>
  );
};

export default EmpresaDetail;
