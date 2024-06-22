import { Button, Image } from "@nextui-org/react";
import LandingNav from "../components/navs/LandingNav";

const Landing = () => {
  return (
    <>
      <LandingNav />
      {/* Hero section */}
      <div className="bg-gradient-to-br from-purple-600  to-sky-700  w-full flex p-[180px]  background-landing">
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl text-white max-w-[650px]">
            Únete ahora y comienza a ganar Dinero con{" "}
            <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">
              VeMdo
            </span>
          </h1>
          <p className="text-white">
            ¿Quieres generar ingresos? Puedes vender todas nuestras marcas sin
            postular, sin invertir ni mantener stock.
          </p>
          <div className="flex gap-4 ">
            <Button className="h-8 w-60 bg-purple-500 text-white">
              Unete ahora!
            </Button>
            <Button className="h-8 w-60 bg-white">Saber más</Button>
          </div>
        </div>
      </div>
      {/* Saber mas */}
      <div className="grid grid-cols-2 w-full   ">
        <div className="">
          <h1 className="text-3xl">¿Como ganar dinero con VeMdo?</h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
