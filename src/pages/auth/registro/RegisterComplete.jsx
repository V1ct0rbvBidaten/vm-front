import LandingNav from "../../../components/navs/LandingNav";
import { Button, Input } from "@nextui-org/react";
import RegistroEmpresa from "./registroVendedor/RegistroVendedor";
import RegistroVendedor from "./registroEmpresa/RegistroEmpresa";

const RegisterComplete = () => {
  const esEmpresa = localStorage.getItem("es-empresa");

  return (
    <>
      <LandingNav />
      <div className="flex justify-center p-10 register-container bg-slate-100">
        <div className="flex flex-col items-center bg-white w-full rounded-md shadow-lg  border-1 p-10">
          <span className="mt-2 font-bold text-inherit text-5xl bg-gradient-to-br from-purple-300 via-purple-400 to-purple-500 bg-clip-text text-transparent">
            VeMdo
          </span>
          <h1 className="text-md font-normal text-slate-500 mt-1">
            Para ingresar a la plataforma complete su registro
          </h1>
          <div className="w-[70%] ">
            {esEmpresa ? <RegistroEmpresa /> : <RegistroVendedor />}
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterComplete;
