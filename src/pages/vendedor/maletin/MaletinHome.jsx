import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMaletines from "../../../hooks/useMaletines";
import Loading from "../../../components/utils/Loading";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  CardFooter,
  Button,
} from "@nextui-org/react";
import { FolderIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const initialState = {
  page: 1,
  page_size: 10,
};

const MaletinHome = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const { data, loading } = useMaletines(user.token, initialState);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Mis Maletines</h1>
        <div className="text-center">
          <Loading />
          <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  const maletines = data.detail.data.maletines;

  return (
    <div className="flex flex-col m-0 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Mis Maletines </h1>
      </div>
      <Divider />
      <div className="grid grid-cols-6  gap-4 w-full  p-4 ">
        {maletines.map((maletin) => (
          <>
            <Card isPressable>
              <CardBody>
                <div className="flex flex-col w-100">
                  <FolderIcon className="text-sky-500" />
                  <span className="font-semibold w-full  text-center">
                    {maletin.nombre_maletin}
                  </span>
                  <span className="w-100 bg-emerald-500 text-white  p-1 text-center mt-1 rounded-full">
                    0 Productos
                  </span>
                </div>
              </CardBody>
            </Card>
          </>
        ))}
        <Card isPressable className="bg-slate-200">
          <CardBody>
            <div className="flex flex-col w-100">
              <PlusCircleIcon className="text-slate-500" />
              <span className="font-semibold w-full  text-center">
                Agregar Maletín
              </span>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MaletinHome;
