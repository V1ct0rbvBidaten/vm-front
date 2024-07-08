import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from "@nextui-org/react";
import {
  ChatBubbleLeftRightIcon,
  EllipsisVerticalIcon,
  ListBulletIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";
import VendedorSideNav from "../navs/VendedorSideNav";

const VendedorRoute = ({ Component }) => {
  const dispatch = useDispatch();

  //   const user = useSelector((state) => state.user);
  const user = {
    name: "Victor",
    role: "vendedor",
  };

  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
  const handleToggle = () => {
    dispatch(toggleCollapse());
  };
  return (
    //   user && user.token && user.role === "empresa" ? (
    <>
      <div className=" flex  min-h-screen ">
        <div className="">
          <VendedorSideNav user={user} />
        </div>

        <main className="p-7 w-full bg-stone-50">
          <div className="flex justify-between items-center gap-4 bg-white p-3 rounded-md shadow-md">
            <Button
              isIconOnly
              size="sm"
              radius="md"
              onClick={handleToggle}
              className="p-1 text-white bg-emerald-500"
            >
              <ListBulletIcon className="h-6 " />
            </Button>
            <Dropdown>
              <DropdownTrigger>
                <Button
                  className="bg-sky-500 text-white shadow-md h-8 rounded-full"
                  endContent={<EllipsisVerticalIcon className="h-6" />}
                >
                  ¡Hola, {user.name}!
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownSection title="Mi cuenta" showDivider>
                  <DropdownItem key="perfil">Perfil</DropdownItem>
                  <DropdownItem key="configuraciones">
                    Configuraciones
                  </DropdownItem>
                </DropdownSection>
                <DropdownItem
                  key="delete"
                  startContent={<PowerIcon className="h-4" />}
                >
                  Cerrar Sesión
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
          <div className="  mt-5  p-3 rounded-md">
            <Component user={user} />
          </div>
        </main>
        <Button
          className="h-14 w-14 rounded-2xl bg-emerald-300 shadow-lg text-white fixed bottom-10 right-10 p-2"
          isIconOnly
        >
          <ChatBubbleLeftRightIcon />
        </Button>
      </div>
    </>
  );
  //   : (
  //     <LoadingToRedirect />
  //   );
};

export default VendedorRoute;
