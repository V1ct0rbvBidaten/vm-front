import {
  ArrowRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Image,
  CardFooter,
  Button,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ProductoMaletinDetail = () => {
  let navigate = useNavigate();
  const list = [
    {
      nombre: "Producto 1",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 2",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
  ];
  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">
          <Button
            isIconOnly
            className="bg-emerald-500  text-white h-6"
            onClick={() => navigate("/vendedor/productos/empresa/idEmpresa")}
          >
            <ChevronDoubleLeftIcon className="h-4" />
          </Button>{" "}
          Empresa Nombre
        </h1>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="bg-white shadow-md p-2 rounded-md ">
        <div className="flex justify-between">
          <Button
            className="h-6 bg-slate-400 text-white"
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          ></Button>
          <div className="flex gap-4">
            <h1 className="font-semibold text-xl">Nombre producto</h1>
          </div>
          <Button
            className="h-6 bg-slate-400 text-white"
            endContent={<ChevronDoubleRightIcon className="h-4" />}
          ></Button>
        </div>
        <div className="m-2 flex gap-2">
          <Button className="h-6 bg-purple-500 text-white">Tecnología</Button>
          <Button className="h-6 bg-sky-500 text-white">
            Dispositivos moviles
          </Button>
          <Button className="h-6 bg-amber-500 text-white">SmarthPhone</Button>
        </div>
        <p className="font-semibold">Características del producto</p>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-between mt-2 border-3 p-2 rounded-md">
          <h4 className="font-semibold text-xl">Precio $29.990</h4>

          <h4 className="font-semibold text-xl text-emerald-500">
            Ganas $2.990
          </h4>
        </div>
      </div>
      <div className="grid grid-cols-6  mt-4 gap-4 w-full bg-white rounded-md shadow-md p-2">
        {list.map((c) => (
          <Card
            key={c.nombre}
            isFooterBlurred
            radius="lg"
            className="border-none shadow-md"
            isPressable
            onClick={() =>
              navigate(
                "/vendedor/explorar/empresa/idEmpresa/producto/idProducto"
              )
            }
          >
            <CardBody>
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
            </CardBody>
          </Card>
        ))}
      </div>
      <Button className="bg-slate-500 text-white mt-2 w-full">
        Finalizar venda
      </Button>
    </>
  );
};

export default ProductoMaletinDetail;
