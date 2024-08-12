import { useSelector, useDispatch } from "react-redux";
import LoadingToRedirect from "../utils/LoadingToRedirect";
import EmpresaSideNav from "../navs/EmpresaSideNav";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  ListBulletIcon,
  EllipsisVerticalIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CreateProfile from "../../pages/vendedor/cuenta/CreateProfile";
import EmpresaNavBar from "../navs/EmpresaNavBar";

const EmpresaRoute = ({ Component }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const handleToggle = () => {
    dispatch(toggleCollapse());
  };

  const handleSignOut = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    toast.success("Desconectado exitosamente.");
    navigate("/");
  };

  return user && user.token && user.es_empresa ? (
    user.profile_name === null ? (
      <CreateProfile user={user} />
    ) : (
      <div className="flex flex-col md:flex-row max-h-screen">
        <div className="hidden sm:block">
          <EmpresaSideNav user={user} />
        </div>
        <main className="sm:p-7  w-full bg-stone-50 overflow-scroll min-h-screen">
          <div className="block sm:hidden">
            <EmpresaNavBar user={user} />
          </div>
          <div className="flex justify-between items-center gap-2 bg-white p-3 rounded-md shadow-md m-7 sm:m-0">
            <Button
              isIconOnly
              size="sm"
              radius="md"
              onClick={handleToggle}
              className="p-1 text-white bg-emerald-500 hidden sm:block"
            >
              <ListBulletIcon className="h-6 " />
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="bg-sky-500 text-white shadow-md h-8 rounded-full capitalize"
                  endContent={<EllipsisVerticalIcon className="h-6" />}
                >
                  ¡Hola, {user.nombre_empresa}!
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem
                  key="logout"
                  startContent={<PowerIcon className="h-4" />}
                  onClick={handleSignOut}
                >
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className=" rounded-md p-7 sm:p-0">
            <Component user={user} />
          </div>
        </main>
      </div>
    )
  ) : (
    <LoadingToRedirect />
  );
};

export default EmpresaRoute;
