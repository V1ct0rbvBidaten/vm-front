import React from "react";
import LandingNav from "../../components/navs/LandingNav";
import { Button, Input } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

const Registro = () => {
  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10  register-container  bg-slate-100">
        <div className="bg-white w-full rounded-md shadow-lg grid grid-cols-3 border-1">
          <div className="flex flex-col p-10 justify-center gap-5">
            <h1 className="text-3xl font-normal text-slate-500  mt-8">
              Registrarse en{" "}
              <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                VeMdo
              </span>
            </h1>
            <Input
              label="Ingrese su correo"
              labelPlacement="outside"
              className="mt-4"
              startContent={<EnvelopeIcon className="h-4" />}
            />
            <Button>Registrarse</Button>
            <div className="grid grid-cols-3 gap-2 text-center items-center">
              <div className="w-full h-1 bg-slate-300  justify-center"></div>
              <div className="w-full  text-slate-300 text-center ">O</div>
              <div className="w-full h-1 bg-slate-300 justify-center"></div>
            </div>

            <div className="flex  gap-4">
              <Button className="w-full">Facebook</Button>
              <Button className="w-full">Google</Button>
            </div>
          </div>
          <div className="col-span-2 bg-gradient-to-br from-purple-600  to-sky-700 rounded-tr-md rounded-br-md"></div>
        </div>
      </div>
    </>
  );
};

export default Registro;
