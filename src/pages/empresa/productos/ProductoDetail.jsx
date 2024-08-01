import { Button, Divider } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import { useRef, useState, useCallback } from "react";
import {
  ChevronDoubleLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import ModalImageSlider from "../../../components/utils/ModalImageSlider";
import ProductosDocs from "./ProductosDocs";
import { formatNumberToCurrency } from "../../../functions/formaters";
import ProductoEdit from "./ProductoEdit";
import InputFileUploader from "../../../components/utils/InputFileUploader";
import { getSize } from "../../../functions/file";
import { uploadFile } from "../../../api/file";
import { toast } from "react-toastify";

const ProductoDetail = () => {
  const idIndex = useRef(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);
  const [reloadFiles, setReloadFiles] = useState(false);
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const [fileCapacitacion, setFileCapacitacion] = useState([]);
  const [fileVenta, setFileVenta] = useState([]);

  const handleFileChangeVenta = (e) => {
    setFileVenta([...e.target.files]);
  };

  const handleFileChangeCapacitacion = (e) => {
    setFileCapacitacion([...e.target.files]);
  };

  const handleChangeOpen = (index) => {
    setOpen((prevOpen) => {
      idIndex.current = prevOpen ? 0 : index;
      return !prevOpen;
    });
  };

  const toggleEdit = () => {
    setEdit((prevEdit) => !prevEdit);
  };

  const url = `product/${id}`;
  console.log("re render");

  const { data, loading } = useFetchById(user.token, url, reload);

  if (loading) {
    return (
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full mb-2 p-4 flex justify-between">
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
  }

  const {
    nombre_producto,
    precio,
    descripcion,
    imagen_principal,
    categoria,
    comision,
    estado_producto,
    imagenes,
    id_producto,
  } = data.detail.data;

  const bodyVenta = {
    path: `${user.id_empresa}/productos/${id_producto}/venta`,
    id_empresa: "vemdo-empresas",
  };

  const bodyCapacitacion = {
    path: `${user.id_empresa}/productos/${id_producto}/capacitacion`,
    id_empresa: "vemdo-empresas",
  };

  const uploadFileVenta = () => {
    let paramsVenta = {
      id_empresa: "vemdo-empresas",
      path: `${user.id_empresa}/productos/${id}/venta`,
    };

    uploadFile(user.token, paramsVenta, fileVenta)
      .then((res) => {
        console.log(res);
        toast.success("Archivo subido con éxito");
      })

      .catch((err) => {
        console.log(err);
        toast.error("Error al crear producto");
      })
      .finally(() => {
        setReloadFiles(!reloadFiles);
        setFileVenta([]);
      });
  };

  const uploadFileCapacitacion = () => {
    let paramsVenta = {
      id_empresa: "vemdo-empresas",
      path: `${user.id_empresa}/productos/${id}/capacitacion`,
    };

    uploadFile(user.token, paramsVenta, fileCapacitacion)
      .then((res) => {
        console.log(res);
        toast.success("Archivo subido con éxito");
      })

      .catch((err) => {
        console.log(err);
        toast.error("Error al crear producto");
      })
      .finally(() => {
        setReloadFiles(!reloadFiles);
        setFileCapacitacion([]);
      });
  };

  return (
    <>
      <ModalImageSlider
        open={open}
        handleOpen={handleChangeOpen}
        index={idIndex.current}
        images={imagenes[0]}
      />
      <div className="flex flex-col gap-2 justify-center items-center bg-white rounded-md shadow-md">
        <div className="w-full mb-2 p-4 flex justify-between">
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={() => navigate("/empresa/home")}
            startContent={<ChevronDoubleLeftIcon className="h-4" />}
          >
            Volver
          </Button>
          <Button
            className="bg-emerald-500 text-white h-7"
            onClick={toggleEdit}
            isIconOnly
          >
            <PencilSquareIcon className="h-4" />
          </Button>
        </div>
        <Divider />
        {edit ? (
          <ProductoEdit
            data={data.detail.data}
            reload={reload}
            setReload={setReload}
            setEdit={setEdit}
            edit={edit}
          />
        ) : (
          <div className="grid grid-cols-3 gap-4 w-full p-2">
            <div className="imagen-portada shadow-md justify-center flex items-center">
              <img src={imagen_principal} alt="Imagen Principal" />
            </div>
            <div className="col-span-2 flex gap-4 flex-col min-h-[500px] border-2 p-2 rounded-md">
              <div className="h-[10%] items-center flex justify-between">
                <h1 className="text-2xl font-semibold capitalize">
                  {nombre_producto}
                </h1>
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
                  Comisión: {formatNumberToCurrency(comision)}
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
                  />
                  <div className="mt-3">
                    <InputFileUploader
                      multiple
                      handleFileChange={handleFileChangeVenta}
                    />
                    {fileVenta && fileVenta.length > 0 && (
                      <div className="w-100 px-2">
                        {fileVenta.map((file, index) => (
                          <div
                            className="w-100 bg-emerald-500 m-1 rounded-md p-1 text-white flex justify-between"
                            key={index}
                          >
                            <span className="text-xs">{file.name}</span>

                            <span className="text-xs">
                              {getSize(file.size)}
                            </span>
                          </div>
                        ))}

                        <Button
                          className="w-full text-xs h-6 bg-foreground text-white"
                          onClick={uploadFileVenta}
                        >
                          Guardar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
                <div className="border-1 p-2 rounded-md mt-2">
                  <h4 className="font-semibold ">Documentación Capacitación</h4>
                  <ProductosDocs
                    reloadFiles={reloadFiles}
                    body={bodyCapacitacion}
                    token={user.token}
                    setReloadFiles={setReloadFiles}
                  />
                  <div className="mt-3">
                    <InputFileUploader
                      multiple
                      handleFileChange={handleFileChangeCapacitacion}
                    />
                    {fileCapacitacion && fileCapacitacion.length > 0 && (
                      <div className="w-100 border-1">
                        {fileCapacitacion.map((file, index) => (
                          <div
                            className="w-100 bg-emerald-500 m-1 rounded-md p-1 text-white flex justify-between"
                            key={index}
                          >
                            <span className="text-xs">{file.name}</span>

                            <span className="text-xs">
                              {getSize(file.size)}
                            </span>
                          </div>
                        ))}
                        <Button
                          className="w-full text-xs h-6 bg-foreground text-white"
                          onClick={uploadFileCapacitacion}
                        >
                          Guardar
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductoDetail;
