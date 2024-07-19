import { Button, ButtonGroup, Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import { useState } from "react";
import { ChevronDoubleLeftIcon } from "@heroicons/react/24/solid";

const ProductoDetail = () => {
  let navigate = useNavigate();
  let { id } = useParams();

  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);

  const url = `product/${id}`;

  const { data: data, loading: loading } = useFetchById(
    user.token,
    url,
    reload
  );

  if (loading)
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full  mb-2 p-4 flex justify-between">
          <h1 className="text-2xl font-semibold">Producto</h1>
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate("/empresa/home/create-producto")}
          >
            Volver
          </Button>
        </div>
        <Divider />
        <Loading />
      </div>
    );

  const {
    nombre_producto,
    precio,
    descripcion,
    imagen_principal,
    categoria,
    comision,
    estado_producto,
    imagenes,
  } = data.detail.data;

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full  mb-2 p-4 flex justify-between">
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate("/empresa/home")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>
        </div>
        <Divider />
        <div className="grid grid-cols-3 gap-4 w-full p-2">
          <div className="imagen-portada shadow-md justify-center flex items-center row-span-2">
            <img src={imagen_principal} />
          </div>
          <div className="col-span-2 flex gap-4 flex-col min-h-[500px] border-2 p-2 rounded-md">
            <div className="h-[10%] items-center flex justify-between">
              <h1 className="text-2xl font-semibold ">{nombre_producto}</h1>
              <Button className="rounded-full text-xs h-6 bg-sky-700 text-white">
                {categoria}
              </Button>
            </div>
            <Divider />
            <div className="bg-slate-50 p-4 rounded-md drop-shadow-md h-[80%]">
              <p>{descripcion}</p>
            </div>
            <div className="h-[10%] flex justify-between">
              <h1 className="text-2xl font-semibold text-emerald  text-teal-500 ">
                ${precio}
              </h1>
              <Button className="bg-orange-500 text-white font-semibold tracking-widest">
                Comisión: {comision}%
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductoDetail;
