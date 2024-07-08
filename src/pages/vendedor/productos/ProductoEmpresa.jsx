import {
  ChevronDoubleLeftIcon,
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

const ProductoEmpresa = () => {
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
    {
      nombre: "Producto 3",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 4",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 5",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 3",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 4",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Producto 5",
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
            onClick={() => navigate("/vendedor/productos")}
          >
            <ChevronDoubleLeftIcon className="h-4" />
          </Button>{" "}
          Empresa Nombre
        </h1>
        <p p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="grid grid-cols-6  gap-4 w-full bg-white rounded-md shadow-md p-2">
        {list.map((c) => (
          <Card
            key={c.nombre}
            isFooterBlurred
            radius="lg"
            className="border-none shadow-md"
            isPressable
            onClick={() =>
              navigate(
                "/vendedor/productos/empresa/idEmpresa/producto/idProducto"
              )
            }
          >
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">{c.categoria}</p>
              <small className="text-default-500">
                {c.productos} Productos
              </small>
              <h4 className="font-bold text-large">{c.nombre}</h4>
            </CardHeader>
            <CardBody>
              <Image
                alt="Woman listing to music"
                className="object-cover"
                height={200}
                src="https://nextui.org/images/hero-card.jpeg"
                width={200}
              />
            </CardBody>
            <CardFooter>
              <div className="flex flex-col items-start">
                <h4 className="font-semibold">Precio $25.990</h4>
                <p className="text-emerald-500 font-semibold">Ganas $2990</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductoEmpresa;
