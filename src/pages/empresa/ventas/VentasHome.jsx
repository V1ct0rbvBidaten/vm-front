import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import React from "react";

const VentasHome = () => {
  return (
    <>
      {" "}
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">
          <Button isIconOnly className="bg-emerald-500  text-white h-6">
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
    </>
  );
};

export default VentasHome;
