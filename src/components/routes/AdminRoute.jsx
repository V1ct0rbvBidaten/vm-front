import { useSelector, useDispatch } from "react-redux";
import LoadingToRedirect from "../utils/LoadingToRedirect";
import EmpresaSideNav from "../navs/EmpresaSideNav";
import { Button } from "@nextui-org/react";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";
import CreateProfile from "../../pages/vendedor/cuenta/CreateProfile";

const AdminRoute = ({ Component }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
  const handleToggle = () => {
    dispatch(toggleCollapse());
  };

  return user && user.token && user.role === "admin" ? (
    user.profile_name === null ? (
      <CreateProfile user={user} />
    ) : (
      <>
        <div className=" flex min-h-screen">
          <EmpresaSideNav user={user} />

          <main className="p-7 w-full bg-stone-50">
            <div className="flex justify-start items-center gap-4 bg-white p-3 rounded-md shadow-md">
              <Button
                isIconOnly
                size="sm"
                radius="md"
                onClick={handleToggle}
                className="p-1 text-white"
                style={{ background: "#003144" }}
              >
                <ListBulletIcon className="h-6 " />
              </Button>
            </div>
            <div className="  mt-5  p-3 rounded-md">
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

export default AdminRoute;
