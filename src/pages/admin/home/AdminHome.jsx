import { Button, Divider } from "@nextui-org/react";
import Loading from "../../../components/utils/Loading";

const AdminHome = ({ user }) => {
  return (
    <div className="grid grid-cols-4 gap-2 ">
      <div className="col-span-4 flex items-center justify-start gap-4">
        <h1 className="text-xl font-semibold  flex gap-2 lg:text-xl items-center">
          PANEL DE CONTROL
        </h1>
      </div>
      <Divider className=" col-span-4" />

      <div className="col-span-4 mt-4">
        <div className="grid gap-4 grid-cols-5"></div>
      </div>
    </div>
  );
};

export default AdminHome;
