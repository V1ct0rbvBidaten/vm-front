import { PowerIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegistroVendedor from "../../auth/registro/registroVendedor/RegistroVendedor";
import RegistroEmpresa from "../../auth/registro/registroEmpresa/RegistroEmpresa";
import Logo from "../../../assets/logoFondoBlanco.svg";

const CreateProfile = ({ user }) => {
  const dispatch = useDispatch();

  let navigate = useNavigate();

  const handleSignOut = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    toast.success("Desconectado exitosamente.");
    navigate("/");
  };

  let esEmpresa = user.es_empresa;

  return (
    <div className="h-screen w-screen p-10 ">
      <div className="flex  justify-between gradient-border relative pb-5">
        <img src={Logo} className="w-32" />
        <Button
          className="bg-foreground text-white rounded-full"
          startContent={<PowerIcon className="h-4" />}
          onClick={handleSignOut}
        >
          Desconectarse
        </Button>
      </div>
      <div className="w-full flex justify-center items-center flex-col pt-5 mt-5 rounded-md border-1 pb-5">
        <p className="text-md font-semibold">
          Para poder ingresar vemdo es necesario que termine de crear su perfil.
        </p>
        <div className="w-[70%]">
          {esEmpresa ? (
            <RegistroEmpresa user={user} />
          ) : (
            <RegistroVendedor user={user} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
