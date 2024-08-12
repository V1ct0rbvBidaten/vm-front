import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import {
  ChatBubbleLeftRightIcon,
  EllipsisVerticalIcon,
  ListBulletIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";
import VendedorSideNav from "../navs/VendedorSideNav";
import LoadingToRedirect from "../utils/LoadingToRedirect";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CreateProfile from "../../pages/vendedor/cuenta/CreateProfile";
import { useState } from "react";
import VendedorNavBar from "../navs/VendedorNavBar";

const VendedorRoute = ({ Component }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

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

  return user && user.token && !user.es_empresa ? (
    user.profile_name === null ? (
      <CreateProfile user={user} />
    ) : (
      <>
        <div className="flex  max-h-screen">
          <div className="hidden sm:block">
            <VendedorSideNav user={user} />
          </div>

          <main className="sm:p-7  w-full bg-stone-50 overflow-scroll min-h-screen">
            <div className="block sm:hidden">
              <VendedorNavBar user={user} />
            </div>
            <div className="flex justify-between items-center gap-4 bg-white p-3 rounded-md shadow-md m-7 sm:m-0">
              <Button
                isIconOnly
                size="sm"
                radius="md"
                onClick={handleToggle}
                className="p-1 text-white bg-emerald-500 hidden sm:block"
              >
                <ListBulletIcon className="h-6" />
              </Button>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="bg-sky-500 text-white shadow-md h-8 rounded-full capitalize"
                    endContent={<EllipsisVerticalIcon className="h-6" />}
                  >
                    ¡Hola, {user.profile_name}!
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Static Actions">
                  <DropdownItem
                    key="delete"
                    startContent={<PowerIcon className="h-4" />}
                    onClick={handleSignOut}
                  >
                    Cerrar Sesión
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="mt-5 rounded-md p-7 sm:p-0">
              <Component user={user} />
            </div>
          </main>
        </div>
      </>
    )
  ) : (
    <LoadingToRedirect />
  );
};

export default VendedorRoute;
