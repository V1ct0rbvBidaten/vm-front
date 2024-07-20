import ProductoCard from "./ProductoCard";
import {
  ArrowDownIcon,
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
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProductosHome = ({ data, resetState, user }) => {
  let navigate = useNavigate();

  let productos =
    data &&
    data.detail.data.products !== null &&
    data.detail.data.products.length > 0
      ? data.detail.data.products
      : [];

  const noData = {
    nombre_producto: "No hay productos",
    precio: "0000",
    descripcion: "No hay productos",
  };

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
      <div className="w-full flex gap-4  mb-2 p-4">
        <FunnelIcon className="h-6 text-slate-700" />
        <Input
          size="sm"
          radius="full"
          className="h-6 w-[300px] "
          placeholder="Ingrese nombre de producto"
          variant="bordered"
          startContent={<MagnifyingGlassIcon className="h-4" />}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="h-7 bg-slate-100 shadow-md"
              startContent={<EllipsisVerticalIcon className="h-4" />}
            >
              Categoria
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            <DropdownItem key="new" shortcut="⌘N">
              New file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className="h-7 bg-slate-100 shadow-md"
              startContent={<EllipsisVerticalIcon className="h-4" />}
            >
              Estado
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            <DropdownItem key="new" shortcut="⌘N">
              New file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      {productos && productos.length > 0 ? (
        <>
          <div className="grid grid-cols-6 gap-4 p-4 w-full">
            {productos.map((c) => (
              <ProductoCard key={c.id_producto} data={c} />
            ))}
          </div>
          <Pagination
            total={10}
            initialPage={1}
            loop
            showControls
            color="secondary"
            className="m-4"
          />
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
