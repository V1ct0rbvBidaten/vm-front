import { Button } from "@nextui-org/react";
import LandingNav from "../components/navs/LandingNav";

const Landing = () => {
  return (
    <>
      <LandingNav />
      <div className="bg-gradient-to-br from-purple-600  to-sky-700  w-full flex p-[180px]  ">
        <div className="flex gap-4 flex-col">
          <h1 className="text-4xl text-white">
            Únete ahora y comienza a ganar Dinero con{" "}
            <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-sky-100 via-purple-300 to-purple-100 bg-clip-text text-transparent">
              VeMdo
            </span>
          </h1>
          <p className="text-white">
            ¿Quieres generar ingresos? Puedes vender todas nuestras marcas sin
            postular, sin invertir ni mantener stock.
          </p>
          <div className="flex gap-4 ">
            <Button className="h-8 w-60 bg-sky-500 text-white">
              Unete ahora!
            </Button>
            <Button className="h-8 w-60 bg-white">Saber más</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
