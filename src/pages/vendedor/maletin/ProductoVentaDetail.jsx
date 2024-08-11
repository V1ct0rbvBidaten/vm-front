import { Button, Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import { useRef, useState } from "react";
import {
  ChevronDoubleLeftIcon,
  CurrencyDollarIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import ModalImageSlider from "../../../components/utils/ModalImageSlider";
import { formatNumberToCurrency } from "../../../functions/formaters";
import ModalVenta from "./ModalVenta";
import ProductosDocs from "./ProductosDocs";
import { validateBankAccount } from "../../../api/ventas";
import { toast } from "react-toastify";

const ProductoVentaDetail = () => {
  const idIndex = useRef(0);
  const navigate = useNavigate();
  const { idProducto, id } = useParams();

  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);
  const [reloadFiles, setReloadFiles] = useState(false);

  const [open, setOpen] = useState(false);
  const [openVenta, setOpenVenta] = useState(false);

  const handleChangeOpen = (index) => {
    setOpen(!open);
    idIndex.current = open ? 0 : index;
  };

  const handleOpenVenta = () => {
    if (openVenta) setOpenVenta(!openVenta);
    else {
      validateBankAccount(user.token)
        .then((res) => {
          setOpenVenta(!openVenta);
        })
        .catch((err) => {
          console.log(err);
          setOpenVenta(false);
          toast.error(err.response.data.detail.message);

          if (!err.response.data.detail.data.cuenta_bancaria) {
            navigate(`/vendedor/cuenta`);
          }
        });
    }
  };

  const url = `product/${idProducto}`;

  const { data, loading } = useFetchById(user.token, url, reload);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <Loading />
      </div>
    );
  }

  const {
    nombre_producto,
    precio,
    descripcion,
    imagen_principal,
    categoria,
    comision_seller,
    estado_producto,
    id_empresa,
    imagenes,
    id_producto,
  } = data.detail.data;

  const bodyVenta = {
    path: `${id_empresa}/productos/${id_producto}/venta`,
    id_empresa: "vemdo-empresas",
  };

  const bodyCapacitacion = {
    path: `${id_empresa}/productos/${id_producto}/capacitacion`,
    id_empresa: "vemdo-empresas",
  };

  return (
    <>
      <ModalImageSlider
        open={open}
        handleOpen={handleChangeOpen}
        index={idIndex.current}
        images={imagenes[0]}
      />

      <ModalVenta
        open={openVenta}
        handleOpen={handleOpenVenta}
        data={data.detail.data}
      />

      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full mb-2 p-4 flex justify-between">
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate(`/vendedor/productos`)}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>
          <Button
            className="bg-green-500 text-white h-7"
            startContent={<CurrencyDollarIcon className="h-4" />}
            onClick={handleOpenVenta}
          >
            Ingresar Venta
          </Button>
        </div>
        <Divider />
        <div className="grid grid-cols-3 gap-4 w-full p-2">
          <div className="imagen-portada shadow-md justify-center flex items-center">
            <img src={imagen_principal} alt="Imagen Principal" />
          </div>
          <div className="col-span-2 flex gap-4 flex-col min-h-[500px] border-2 p-2 rounded-md">
            <div className="h-[10%] items-center flex justify-between">
              <h1 className="text-2xl font-semibold">{nombre_producto}</h1>
              <Button className="rounded-full text-xs h-6 bg-sky-700 text-white">
                {categoria}
              </Button>
            </div>
            <Divider />
            <div className="bg-slate-50 p-4 rounded-md drop-shadow-md h-[80%]">
              <p>{descripcion}</p>
            </div>
            <div className=" flex justify-between">
              <span className=" bg-emerald-500 text-white p-1 rounded-md text-sm">
                Precio: {formatNumberToCurrency(precio)}
              </span>
              <span className=" bg-amber-500 text-white p-1 rounded-md text-sm">
                Comisión: {formatNumberToCurrency(comision_seller || 0)}
              </span>
            </div>
          </div>
          <div className="col-span-3 w-full grid grid-cols-3 gap-2">
            <div className="col-span-2 border-1 p-2 rounded-md">
              <h4 className="font-semibold">Galería</h4>
              <div className="w-full grid-cols-5 grid gap-2 p-2">
                {imagenes[0].map((imagen, index) => (
                  <div
                    key={index}
                    onClick={() => handleChangeOpen(index)}
                    className="hover:cursor-pointer rounded-md shadow-md overflow-hidden"
                  >
                    <img
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="border-1 p-2 rounded-md ">
                <h4 className="font-semibold">Documentación Venta</h4>
                <ProductosDocs
                  reloadFiles={reloadFiles}
                  body={bodyVenta}
                  token={user.token}
                  setReloadFiles={setReloadFiles}
                  bucket={"vemdo-empresas"}
                />
              </div>
              <div className="border-1 p-2 rounded-md mt-2">
                <h4 className="font-semibold ">Documentación Capacitación</h4>
                <ProductosDocs
                  reloadFiles={reloadFiles}
                  body={bodyCapacitacion}
                  token={user.token}
                  setReloadFiles={setReloadFiles}
                  bucket={"vemdo-empresas"}
                />
              </div>
            </div>
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
};

export default ProductoVentaDetail;
