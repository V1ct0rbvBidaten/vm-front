import { useSelector, useDispatch } from "react-redux";
import LoadingToRedirect from "../utils/LoadingToRedirect";
import AdminSideNav from "../navs/AdminSideNav";
import { Button } from "@nextui-org/react";
import { ListBulletIcon } from "@heroicons/react/24/solid";
import { toggleCollapse } from "../../reducers/sideBarCollapse";
import Breadcrum from "../utils/Breadcrum";

const AdminRoute = ({ Component }) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
  const handleToggle = () => {
    dispatch(toggleCollapse());
  };
  return user && user.token && user.role === "admin" ? (
    <>
      <div className=" flex min-h-screen">
        <AdminSideNav user={user} />

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
            <Breadcrum />
          </div>
          <div className="  mt-5  p-3 rounded-md">
            <Component user={user} />
          </div>
        </main>
      </div>
    </>
  ) : (
    <LoadingToRedirect />
  );
};

export default AdminRoute;