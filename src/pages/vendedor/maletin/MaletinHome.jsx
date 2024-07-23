import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useMaletines from "../../../hooks/useMaletines";
import Loading from "../../../components/utils/Loading";
import { Card, CardBody, Divider } from "@nextui-org/react";
import { FolderIcon } from "@heroicons/react/24/solid";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import ProductoMaletinDetail from "./ProductoMaletinDetail";
import { useState } from "react";

const initialState = {
  page: 1,
  page_size: 10,
};

const MaletinHome = () => {
  let navigate = useNavigate();
  const [params, setParams] = useState(initialState);

  const user = useSelector((state) => state.user);

  const { data, loading } = useMaletines(user.token, params);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Maletín de productos</h1>
        <div className="text-center">
          <Loading />
          <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  const maletin = data.detail.data.maletines[0].maletin.id_maletin;

  return (
    <div className="flex flex-col m-0 justify-center items-center bg-white rounded-md shadow-md">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Maletín de productos</h1>
      </div>
      <Divider />
      <ProductoMaletinDetail maletinid={maletin} />
    </div>
  );
};

export default MaletinHome;
