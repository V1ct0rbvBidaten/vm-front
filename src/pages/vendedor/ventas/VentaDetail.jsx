import {
  ChevronDoubleDownIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Button, Input, Textarea } from "@nextui-org/react";
import React from "react";

const VentaDetail = () => {
  return (
    <>
      {" "}
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">
          <Button isIconOnly className="bg-emerald-500  text-white h-6">
            <ChevronDoubleDownIcon className="h-4" />
          </Button>{" "}
          Venta ##
        </h1>
        <p className="italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="flex justify-between mt-4 border-slate-300 border-1 rounded-md p-4 font-semibold">
          <span>Empresa: ####</span>
          <span>Producto: ####</span>
          <span>Cantidad: ####</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-2 flex justify-between mt-4  grid grid-cols-2 gap-2 rounded-md p-4 font-semibold">
            <Input
              label="Nombre"
              labelPlacement="outside"
              className="w-full"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />
            <Input
              label="Rut"
              labelPlacement="outside"
              className="w-full"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />
            <Input
              label="Correo"
              labelPlacement="outside"
              className="w-full"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />
            <Input
              label="Telefono"
              labelPlacement="outside"
              className="w-full"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />
            <Input
              label="Dirección"
              labelPlacement="outside"
              className="w-full col-span-2"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />{" "}
            <Textarea
              label="Comentarios Adicionales"
              labelPlacement="outside"
              className="w-full col-span-2"
              variant="bordered"
              value="#####"
              endContent={<PencilSquareIcon className="h-4" />}
            />
          </div>
          <div className=" flex flex-col gap-4 mt-4 border-slate-300 border rounded-md p-4 font-semibold">
            <Button>Ver documentación</Button>
            <Button>Descargar documentación</Button>
            <Button>Subir documentación</Button>
          </div>
          <Button className="col-span-3 w-full bg-emerald-500 text-white">
            Actualizar
          </Button>
        </div>
      </div>
    </>
  );
};

export default VentaDetail;
