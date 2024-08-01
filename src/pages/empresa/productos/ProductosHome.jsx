import ProductoCard from "./ProductoCard";
import {
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Input,
  Pagination,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProductosHome = ({
  data,
  resetState,
  user,
  handleParamsChange,
  params,
  setParams,
}) => {
  let navigate = useNavigate();

  let productos =
    data &&
    data.detail.data.products !== null &&
    data.detail.data.products.length > 0
      ? data.detail.data.products
      : [];

  const noData = {
    nombre_producto: "No hay productos",
    precio: 0,
    descripcion: "No hay productos",
  };

  const { page, page_size } = params;

  const totalItems = data.detail.data.total;

  const pages = Math.ceil(totalItems / page_size);

  return (
    <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Productos</h1>
        <Button
          className="bg-emerald-500 text-white h-7"
          startContent={<PlusIcon className="h-4" />}
          onClick={() => navigate("/empresa/home/create-producto")}
        >
          Crear Producto
        </Button>
      </div>
      <Divider />
      <div className="w-full flex gap-4  mb-2 p-4 items-end justify-end">
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
              <ProductoCard key={c.id_producto} data={c} />
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
              onChange={(page) => setParams({ ...params, page: Number(page) })}
            />
            <span className="text-default-400 text-small">
              Total {totalItems} registros
            </span>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-6 gap-4 p-4 w-full">
          <ProductoCard data={noData} />
        </div>
      )}
    </div>
  );
};

export default ProductosHome;
