import ProductoCard from "./ProductoCard";
import { PlusIcon } from "@heroicons/react/24/solid";
import NoImage from "../../../assets/no-image.jpg";
import {
  Button,
  Pagination,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { formatNumberToCurrency } from "../../../functions/formaters";

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
      <div className="w-full mb-2 p-4 flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">Productos</h1>
        <Button
          className="bg-emerald-500 text-white h-7"
          startContent={<PlusIcon className="h-4" />}
          onClick={() => navigate("/empresa/home/create-producto")}
        >
          Crear Producto
        </Button>
      </div>
      <Divider />
      <div className="w-full flex flex-col sm:flex-row gap-4 mb-2 p-4 items-end justify-end">
        <label className="flex items-end text-default-400 text-small">
          Items por página:
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
              <ProductoCard key={c.id_producto} data={c} />
            ))}
          </div>
          <div className="w-full bg-stone-100 pr-10 pl-10 flex flex-col sm:flex-row justify-between items-center">
            <Pagination
              total={pages}
              initialPage={page}
              loop
              showControls
              color="secondary"
              className="m-4"
              onChange={(page) => setParams({ ...params, page: Number(page) })}
            />
            <span className="text-default-400 text-small">
              Total {totalItems} registros
            </span>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
          <Card className="py-4" isPressable>
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <h4 className="font-bold text-xs">{noData.nombre_producto}</h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2 h-[200px]">
              <div className="image-container">
                <img
                  className="hover:cursor-pointer hover:opacity-80 transition duration-300"
                  src={NoImage}
                  alt="No hay productos"
                />
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex w-full gap-2 justify-start">
                <span className="text-emerald-500 font-semibold text-lg rounded-md">
                  {formatNumberToCurrency(noData.precio)}
                </span>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProductosHome;
