import { PowerIcon } from "@heroicons/react/24/solid";
import { Button } from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import RegistroVendedor from "../../auth/registro/registroVendedor/RegistroVendedor";

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

  return (
    <div className="h-full w-screen p-10 ">
      <div className="flex  justify-between gradient-border relative pb-5">
        <span className="font-bold text-inherit text-5xl bg-gradient-to-br from-purple-200 via-purple-300 to-purple-500 bg-clip-text text-transparent">
          VeMdo
        </span>
        <Button
          className="bg-foreground text-white rounded-full"
          startContent={<PowerIcon className="h-4" />}
          onClick={handleSignOut}
        >
          Desconectarse
        </Button>
      </div>
      <div className="w-full flex justify-center items-center flex-col pt-5 mt-5 rounded-md border-1 pb-5">
        <h1 className="text-xl font-semibold">
          Para poder ingresar veMdo es necesario que termine de crear su perfil.
        </h1>
        <div className="w-[70%]">
          <RegistroVendedor user={user} />
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
