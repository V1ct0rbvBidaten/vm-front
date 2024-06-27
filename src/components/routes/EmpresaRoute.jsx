import { useSelector, useDispatch } from "react-redux";
import LoadingToRedirect from "../utils/LoadingToRedirect";
import EmpresaSideNav from "../navs/EmpresaSideNav";
import { Button } from "@nextui-org/react";
import {
  ChatBubbleLeftRightIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";

const AdminRoute = ({ Component }) => {
  const dispatch = useDispatch();

  //   const user = useSelector((state) => state.user);
  const user = {
    name: "Victor",
    role: "empresa",
  };

  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
  const handleToggle = () => {
    dispatch(toggleCollapse());
  };
  return (
    //   user && user.token && user.role === "empresa" ? (
    <>
      <div className=" flex min-h-screen">
        <div>
          <EmpresaSideNav user={user} />
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
            <Button className="bg-sky-500 text-white shadow-md h-8 rounded-full">
              ¡Hola, {user.name}!
            </Button>
          </div>
          <div className="  mt-5  p-3 rounded-md">
            <Component user={user} />
          </div>
        </main>
        <Button
          className="h-14 w-14 rounded-2xl bg-emerald-300 shadow-lg text-white absolute bottom-10 right-10 p-2"
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

export default AdminRoute;
