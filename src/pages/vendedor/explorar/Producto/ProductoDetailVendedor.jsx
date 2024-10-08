import { Button, Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../../hooks/useFetch";
import Loading from "../../../../components/utils/Loading";
import { useEffect, useRef, useState } from "react";
import {
  CheckBadgeIcon,
  ChevronDoubleLeftIcon,
  FolderIcon,
} from "@heroicons/react/24/solid";
import ModalImageSlider from "../../../../components/utils/ModalImageSlider";
import { formatNumberToCurrency } from "../../../../functions/formaters";
import ModalMaletin from "./ModalMaletin";
import { getProductInMaletin, updateMaletin } from "../../../../api/maletin";
import useMaletines from "../../../../hooks/useMaletines";
import { toast } from "react-toastify";

const initialState = {
  page: 1,
  page_size: 10,
};

const initialStateMaletin = {
  es_activo: true,
  productos_ids: [],
};

const ProductoDetailVendedor = () => {
  const idIndex = useRef(0);
  const navigate = useNavigate();
  const { idProducto, id } = useParams();

  const user = useSelector((state) => state.user);

  const [isInMaletin, setIsInMaletin] = useState([]);
  const [producto, setProducto] = useState(initialStateMaletin);
  const [reload, setReload] = useState(false);

  const [open, setOpen] = useState(false);
  const [openModalMaletin, setOpenModalMaletin] = useState(false);
  const [loadingPM, setLoadingPM] = useState(false);

  const url = `product/${idProducto}`;

  const { data, loading } = useFetchById(user.token, url, reload);

  const { data: maletines, loading: loadingMaletines } = useMaletines(
    user.token,
    initialState
  );

  useEffect(() => {
    if (!loading && data && maletines && maletines.detail?.data?.maletines) {
      const idMaletin = maletines.detail.data.maletines[0].maletin.id_maletin;
      isProductInMaletin(idMaletin, idProducto);
    }
  }, [loading, data, maletines, idProducto]);

  const isProductInMaletin = (idMaletin, idProducto) => {
    setLoadingPM(true);
    getProductInMaletin(user.token, idMaletin, idProducto)
      .then((res) => {
        setIsInMaletin(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoadingPM(false);
      });
  };

  const handleUpdateMaletin = () => {
    producto.productos_ids = [idProducto];
    const idMaletin = maletines.detail.data.maletines[0].maletin.id_maletin;

    setLoadingPM(true);
    updateMaletin(user.token, producto, idMaletin)
      .then((res) => {
        toast.success("Producto agregado al maletín");
      })
      .catch((err) => {
        console.error(err);
        toast.error("Error al agregar producto al maletín");
      })
      .finally(() => {
        handleOpenModalMaletin();
        setReload(!reload);
        setProducto(initialStateMaletin);
        setLoadingPM(false);
      });
  };

  const handleChangeOpen = (index) => {
    setOpen(!open);
    idIndex.current = open ? 0 : index;
  };

  const handleOpenModalMaletin = () => {
    setOpenModalMaletin(!openModalMaletin);
  };

  if (loading || loadingMaletines || loadingPM) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md p-4">
        <div className="w-full mb-2 flex justify-between">
          <h1 className="text-2xl font-semibold">Producto</h1>
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate(`/vendedor/explorar/empresa/${id}`)}
          >
            Volver
          </Button>
        </div>
        <Divider />
        <Loading />
      </div>
    );
  }

  if (!data || !data.detail || !data.detail.data) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md p-4">
        <div className="w-full mb-2 flex justify-between">
          <h1 className="text-2xl font-semibold">Producto</h1>
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate(`/vendedor/explorar/empresa/${id}`)}
          >
            Volver
          </Button>
        </div>
        <Divider />
        <div className="p-4">No se encontró información del producto.</div>
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
    imagenes,
    id_producto,
  } = data.detail.data;

  return (
    <>
      <ModalImageSlider
        open={open}
        handleOpen={handleChangeOpen}
        index={idIndex.current}
        images={imagenes[0]}
      />

      <ModalMaletin
        open={openModalMaletin}
        handleOpen={handleOpenModalMaletin}
        handleUpdateMaletin={handleUpdateMaletin}
        loading={loadingPM}
      />

      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md p-4">
        <div className="w-full mb-2 flex justify-between">
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate(`/vendedor/explorar/empresa/${id}`)}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>

          {isInMaletin.detail?.data?.product_in_maletin ? (
            <Button
              className="bg-green-700 text-white h-7"
              endContent={<CheckBadgeIcon className="h-4" />}
            >
              Producto en Maletín
            </Button>
          ) : (
            <Button
              className="bg-amber-700 text-white h-7"
              endContent={<FolderIcon className="h-4" />}
              onClick={handleOpenModalMaletin}
            >
              Agregar a mi Maletín
            </Button>
          )}
        </div>
        <Divider />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full p-2">
          <div className="imagen-portada shadow-md justify-center flex items-center lg:col-span-1">
            <img
              src={imagen_principal}
              alt="Imagen Principal"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-4 min-h-[500px] border-2 p-2 rounded-md">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <h1 className="text-2xl font-semibold">{nombre_producto}</h1>
              <Button className="rounded-full text-xs h-6 bg-sky-700 text-white mt-2 md:mt-0">
                {categoria}
              </Button>
            </div>
            <Divider />
            <div className="bg-slate-50 p-4 rounded-md drop-shadow-md h-[80%]">
              <p>{descripcion}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <span className="bg-emerald-500 text-white p-1 rounded-md text-sm">
                Precio: {formatNumberToCurrency(precio || 0)}
              </span>
              <span className="bg-amber-500 text-white p-1 rounded-md text-sm mt-2 md:mt-0">
                Comisión: {formatNumberToCurrency(comision_seller || 0)}
              </span>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-3 w-full">
            <h4 className="font-semibold">Galería</h4>
            <Divider />
            <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-2">
              {imagenes[0].map((imagen, index) => (
                <div
                  key={index}
                  onClick={() => handleChangeOpen(index)}
                  className="hover:cursor-pointer rounded-md shadow-md overflow-hidden h-[150px]"
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
        </div>
      </div>
    </>
  );
};

export default ProductoDetailVendedor;
