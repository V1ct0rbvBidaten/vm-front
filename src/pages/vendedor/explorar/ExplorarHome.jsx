import {
  ArrowDownIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  Image,
  CardFooter,
  Button,
  CardHeader,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  CardBody,
  Input,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const ExplorarHome = () => {
  let navigate = useNavigate();
  const list = [
    {
      nombre: "Empresa 1",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 2",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 3",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 4",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 5",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 3",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 4",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
    {
      nombre: "Empresa 5",
      categoria: "Tecnologia",
      productos: 23,
      imagen: "https://nextui.org/images/hero-card-complete.jpeg",
    },
  ];

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Empresas</h1>
        <p p className="italic">
          lorem ipsum lorem ipsum
        </p>
      </div>
      <div className="w-full flex gap-4 bg-white rounded-md shadow-md mb-5 p-4">
        <FunnelIcon className="h-6 text-slate-700" />
        <Input
          size="sm"
          radius="full"
          className="h-6 w-[300px] "
          placeholder="Ingrese nombre de empresa"
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
              Zona
            </Button>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            <DropdownItem key="new" shortcut="⌘N">
              New file
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
      <div className="grid grid-cols-6  gap-4 w-full bg-white rounded-md shadow-md p-2">
        {list.map((c) => (
          <Card
            key={c.nombre}
            isFooterBlurred
            radius="lg"
            className="border-none shadow-md"
            isPressable
            onClick={() => navigate("/vendedor/explorar/empresa/id")}
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
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">Ver productos </p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
              >
                <MagnifyingGlassIcon className="h-5" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ExplorarHome;
