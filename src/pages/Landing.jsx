import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@nextui-org/react";
import LandingNav from "../components/navs/LandingNav";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Logo from "../assets/logoFondoNegro.svg";
import Logo2 from "../assets/logoFondoBlanco.svg";
import Portal from "../assets/portal.png";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  let navigate = useNavigate();
  return (
    <>
      <LandingNav />
      {/* Hero section */}
      <div className="w-full flex p-6 md:p-[150px] background-landing items-center justify-center">
        <div className="flex gap-4 flex-col items-center text-center md:items-start md:text-left">
          <img src={Logo} className="w-[300px] md:w-[500px]" />
          <div className="text-lg md:text-xl bg-white rounded-full pl-6 pr-6 p-1 font-semibold text-v3">
            <Typewriter
              words={["Vendo más", "Vendo mucho", "Vendo mejor"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button
              className="h-10 md:h-8 w-48 md:w-60 bg-v4 text-white"
              onClick={() => navigate("/registro")}
            >
              Únete ahora!
            </Button>
            <Button
              className="h-10 md:h-8 w-48 md:w-60 bg-white"
              onClick={() => navigate("/conocenos")}
            >
              Saber más
            </Button>
          </div>
        </div>
      </div>
      {/* Saber mas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 md:p-20 w-full">
        <div className="gap-4">
          <h1 className="text-3xl md:text-4xl font-bold text-v4 mb-4 text-left">
            ¿Qué es
          </h1>
          <div className="flex justify-center md:justify-start gap-4 items-end">
            <img src={Logo2} className="w-[200px] md:w-[300px]" />

            <h1 className="font-bold text-v4 text-4xl md:text-5xl">?</h1>
          </div>
          <p className="text-justify mt-5 text-base md:text-lg">
            Nuestra plataforma da acceso a una red de vendedores para que las
            empresas puedan comercializar productos de alto valor y que
            requieren de una venta más consultiva, donde las empresas tengan
            costos de venta 100% variables.
          </p>
          <p className="text-justify mt-5 text-base md:text-lg">
            Finalmente, somos un medio para que las empresas se conecten con sus
            vendedores independientes.
          </p>
        </div>
        <div className="col-span-1 md:col-span-2 max-w-full md:max-w-[900px]">
          <img src={Portal} className="w-full rounded-md shadow-2xl" />
        </div>
      </div>
      <div className="flex flex-col mt-5 bg-gradient-to-br from-v4 to-v3 p-10 md:p-20">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          ¿Cómo lo hacemos?
        </h1>
        <p className="text-white text-center text-base md:text-lg">
          Por un lado, atraemos vendedores a nuestra plataforma y por otro lado
          buscamos empresas para que suban sus productos a la plataforma. Luego,
          los vendedores eligen qué quieren vender y finalmente ingresan las
          ventas a través del portal.
        </p>
      </div>
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-10 md:p-32">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h1 className="font-bold text-4xl md:text-5xl">Vendedores</h1>
          <span className="font-bold text-4xl md:text-5xl">400</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 border-r-2 border-l-2">
          <h1 className="font-bold text-4xl md:text-5xl">Empresas</h1>
          <span className="font-bold text-4xl md:text-5xl">100</span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-4xl md:text-5xl">Productos</h1>
          <span className="font-bold text-4xl md:text-5xl">1000</span>
        </div>
      </div> */}
    </>
  );
};

export default Landing;
