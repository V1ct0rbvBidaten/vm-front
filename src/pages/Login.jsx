import { Button } from "@nextui-org/react";
import Logo from "../../src/assets/archlogo.png";
import Wallpaper from "../../src/assets/ocean.jpg";
import LoginForm from "../components/forms/LoginForm";
import { LogoArgos } from "../assets/LogoArgos";
import { UserCircleIcon } from "@heroicons/react/24/solid";

function Login() {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100">
      <div className="grid grid-cols-2 rounded-md shadow-md login-container">
        <div className="grid gap-1 bg-white text-center p-5 lg:gap-4 lg:p-10  ">
          <div className="flex flex-col justify-center items-center">
            <div>
              <LogoArgos height={80} />
            </div>
            <p className="text-xl   lg:text-lg  isotipo">
              ARGOS
              <span className=" font-bold " style={{ color: "#9bb9b7" }}>
                NAUTICA
              </span>
            </p>
          </div>
          <Button
            size="sm"
            radius="none"
            className="pl-10 pr-10 m-auto bg-gradient-to-br from-slate-500 to-slate-400 text-white shadow-lg text-md font-bold"
            startContent={<UserCircleIcon className="h-5" />}
          >
            FLOTA
          </Button>
          <h1 className="text-xl  text-sky-700 capitalize lg:text-3xl">
            Iniciar Sesión
          </h1>
          <div className="h-1 bg-gradient-to-t from-sky-400 to-sky-500 m-auto w-28 "></div>
          <LoginForm />
          <p className="text-stone-300">@Creado por Bidaten Ltda</p>
        </div>
        <div className=" rounded-r-md overflow-hidden">
          <img src={Wallpaper} className="wallpaper-img" />
          <div className="grid m-4 gap-2">
            <p className="text-2xl ">¡Bienvenido!</p>
            <div className="h-1 bg-white w-20 "></div>
            <p>
              Esta ingresando al sistema de gestion de solicitudes de
              mantención.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
