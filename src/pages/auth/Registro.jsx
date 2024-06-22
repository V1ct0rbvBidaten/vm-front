import React from "react";
import LandingNav from "../../components/navs/LandingNav";
import { Button, Input, Link, Tabs, Tab } from "@nextui-org/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

const Registro = () => {
  const { text } = useTypewriter({
    words: ["Ingresos", "Dinero"],
  });

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
            <Tabs
              key="tipoUsuario"
              variant="underlined"
              color="secondary"
              aria-label="Tabs variants"
            >
              <Tab key="vendedor" title="Vendedor">
                <Input
                  label="Correo"
                  labelPlacement="outside"
                  variant="bordered"
                  placeholder="Ingrese su correo"
                  className="mt-4"
                  startContent={<EnvelopeIcon className="h-4" />}
                />
                <Button className="w-full mt-4 bg-gradient-to-br from-purple-400  to-purple-500 text-white">
                  Registrarse
                </Button>
              </Tab>
              <Tab key="empresa" title="Empresa">
                <Input
                  label="Correo"
                  labelPlacement="outside"
                  placeholder="Ingrese su correo"
                  variant="bordered"
                  className="mt-4"
                  startContent={<EnvelopeIcon className="h-4" />}
                />
                <Button className="w-full mt-4 bg-gradient-to-br from-rose-300 to-rose-500 text-white">
                  Registrarse
                </Button>
              </Tab>
            </Tabs>

            <div className="grid grid-cols-3 gap-2 text-center items-center">
              <div className="w-full h-1 bg-slate-300  justify-center"></div>
              <div className="w-full  text-slate-300 text-center ">O</div>
              <div className="w-full h-1 bg-slate-300 justify-center"></div>
            </div>

            <div className="flex  gap-4">
              <Button className="w-full bg-blue-700 text-white">
                Facebook
              </Button>
              <Button className="w-full bg-slate-700 text-white">Google</Button>
            </div>
            <div className="flex  gap-4">
              <p>¿Ya tienes cuenta?</p>
              <Link href="/login">Iniciar Sesión</Link>
            </div>
          </div>
          <div className="gap-2 col-span-2 bg-gradient-to-br from-purple-600  to-sky-700 rounded-tr-md rounded-br-md  p-20 flex items-center flex-col justify-center">
            <h1 className="font-semibold text-3xl text-white">
              En{" "}
              <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                VeMdo
              </span>{" "}
              encuentra
            </h1>
            <span className="text-emerald-500 w-30 text-xl pl-5 pr-5 bg-white rounded-full p-2">
              <Typewriter
                words={[
                  "Más ingresos",
                  "Más productos",
                  "Más ventas",
                  "Mejor catalogo",
                ]}
                loop={5}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
            <p className="text-white text-center w-[500px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registro;
