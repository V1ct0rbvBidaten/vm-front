import { ChevronDoubleLeftIcon, TrashIcon } from "@heroicons/react/24/solid";
import { Button, Divider, Tabs, Tab } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import { useState } from "react";
import Comentarios from "./Comentarios";
import {
  formatDateToDDMMYY,
  formatNumberToCurrency,
} from "../../../functions/formaters";
import { getSize } from "../../../functions/file";
import ProductosDocs from "../maletin/ProductosDocs";
import { uploadFile } from "../../../api/file";
import { toast } from "react-toastify";
import InputFileUploader from "../../../components/utils/InputFileUploader";

const VentaDetail = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [reloadFiles, setReloadFiles] = useState(false);
  const [reload, setReload] = useState(false);

  const [fileCapacitacion, setFileCapacitacion] = useState([]);
  const [fileVenta, setFileVenta] = useState([]);
  const [loadingUpdate, setLoadingUpdate] = useState(false);

  const handleFileChangeVenta = (e) => {
    setFileVenta((prevFiles) => [...prevFiles, ...e.target.files]);
  };

  const handleFileChangeCapacitacion = (e) => {
    setFileCapacitacion([...e.target.files]);
  };

  const { idVenta } = useParams();

  const { data, loading } = useFetchById(
    user.token,
    `venta-vendedor/${idVenta}`
  );

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  const {
    fecha_venta,
    empresa,
    total_venta,
    vendedor,
    producto,
    cantidad,
    estado_venta,
    precio_venta,
    tipo_documento,
    nombre_cliente,
    apellido_cliente,
    direccion_cliente,
    region_cliente,
    comuna_cliente,
    telefono_cliente,
    email_cliente,
    rut_cliente,
    id_venta,
    id_empresa,
    id_producto,
    comision_seller,
    correlative_number,
  } = data.detail.data;

  const bodyVenta = {
    path: `${id_empresa}/productos/${id_producto}/venta`,
    id_empresa: "vemdo-empresas",
  };

  const bodyCapacitacion = {
    path: `${id_empresa}/productos/${id_producto}/capacitacion`,
    id_empresa: "vemdo-empresas",
  };

  const paramsVenta = {
    id_empresa: "vemdo-ventas",
    path: `${id_venta}`,
  };

  const uploadFileVenta = (e) => {
    e.preventDefault();
    setLoadingUpdate(true);
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
        setLoadingUpdate(false);
      });
  };

  const handleRemoveFileVenta = (index) => {
    let newFiles = fileVenta.filter((file, i) => i !== index);
    setFileVenta(newFiles);
  };

  return (
    <>
      {data && data.detail.data && (
        <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">
              <Button
                isIconOnly
                className="bg-emerald-500  text-white h-6"
                onClick={() => navigate("/vendedor/ventas")}
              >
                <ChevronDoubleLeftIcon className="h-4" />
              </Button>
            </h1>
            <span className="text-md font-semibold">
              Fecha de venta: {formatDateToDDMMYY(fecha_venta)}
            </span>
          </div>
          <div className="w-100 justify-between flex">
            <h1 className="text-xl  font-semibold mt-2">
              Venta #{correlative_number}
            </h1>
            {estado_venta === "EN PROCESO" ? (
              <Button className="bg-slate-200 text-slate-500  p-1 pr-4 pl-4 rounded-full">
                {estado_venta}
              </Button>
            ) : estado_venta === "REQUIERE REVISIÓN" ? (
              <Button className="bg-amber-200 text-amber-500  p-1 pr-4 pl-4 rounded-full">
                {estado_venta}
              </Button>
            ) : estado_venta === "RECHAZADA" ? (
              <Button className="bg-rose-200 text-rose-500 p-1 pr-4 pl-4 rounded-full">
                {estado_venta}
              </Button>
            ) : estado_venta === "COMPLETADA" ? (
              <Button className="bg-emerald-200 text-emerald-500 p-1 pr-4 pl-4 rounded-full">
                {estado_venta}
              </Button>
            ) : (
              <Button className="bg-emerald-500 text-white">
                {estado_venta}
              </Button>
            )}
          </div>
          <div className="w-100 justify-between flex">
            <div></div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" col-span-3 sm:col-span-2 flex flex-col gap-4 mt-4  border-slate-300 border rounded-md p-4 font-semibold">
              <h1>Datos Venta</h1>
              <div className="flex gap-2 mt-4  p-2 font-semibold overflow-x-auto">
                <table className="min-w-full border-collapse ">
                  <tbody>
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Producto
                      </td>
                      <td className="p-1 text-sm" colSpan="3">
                        {producto}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Vendedor
                      </td>
                      <td className="p-1 text-sm">{vendedor}</td>
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Tipo Documento
                      </td>
                      <td className="p-1 text-sm">{tipo_documento}</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Precio
                      </td>
                      <td className="p-1 text-sm">
                        {precio_venta !== 0
                          ? formatNumberToCurrency(precio_venta)
                          : formatNumberToCurrency(0)}
                      </td>
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Cantidad
                      </td>
                      <td className="p-1 text-sm">{cantidad}</td>{" "}
                    </tr>
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Comisión
                      </td>
                      <td className="p-1 text-sm">
                        {comision_seller && comision_seller !== 0
                          ? formatNumberToCurrency(comision_seller)
                          : formatNumberToCurrency(0)}
                      </td>
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Total Venta
                      </td>
                      <td className="p-1 text-sm">
                        {total_venta !== 0
                          ? formatNumberToCurrency(total_venta)
                          : formatNumberToCurrency(0)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <Divider />
              <div>
                <h1>Datos Comprador</h1>
                <div className="overflow-x-auto mt-2">
                  <table className="min-w-full border-collapse ">
                    <tbody>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Rut
                        </td>
                        <td className="p-1 text-sm">{rut_cliente}</td>
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Teléfono
                        </td>
                        <td className="p-1 text-sm">{telefono_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Nombre
                        </td>
                        <td className="p-1 text-sm">{nombre_cliente}</td>
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Apellido
                        </td>
                        <td className="p-1 text-sm">{apellido_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Dirección
                        </td>
                        <td className="p-1 text-sm">{direccion_cliente}</td>
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Región
                        </td>
                        <td className="p-1 text-sm">{region_cliente}</td>
                      </tr>
                      <tr className="border-b"></tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Comuna
                        </td>
                        <td className="p-1 text-sm">{comuna_cliente}</td>
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Email
                        </td>
                        <td className="p-1 text-sm">{email_cliente}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Divider />
              <h2 className="font-semibold">Documentación </h2>
              <ProductosDocs
                reloadFiles={reloadFiles}
                body={paramsVenta}
                token={user.token}
                setReloadFiles={setReloadFiles}
                bucket={"vemdo-ventas"}
              />
              <InputFileUploader
                multiple
                handleFileChange={handleFileChangeVenta}
              />
              {fileVenta && fileVenta.length > 0 && (
                <div className="w-100 border-1">
                  {fileVenta.map((file, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center gap-1"
                    >
                      <div className="w-full bg-emerald-500 m-1 rounded-md p-1 text-white flex justify-between">
                        <span className="text-xs">{file.name}</span>

                        <span className="text-xs">{getSize(file.size)}</span>
                      </div>
                      <div
                        className=" w-6 bg-rose-500 h-full p-1 text-white rounded-md hover:cursor-pointer hover:bg-rose-400"
                        onClick={() => handleRemoveFileVenta(index)}
                      >
                        <TrashIcon className="h-full" />
                      </div>
                    </div>
                  ))}
                  <Button
                    className="w-full text-xs bg-foreground text-white"
                    onClick={uploadFileVenta}
                    isLoading={loadingUpdate}
                  >
                    Guardar
                  </Button>
                </div>
              )}
            </div>
            <div className="col-span-3 sm:col-span-1 flex flex-col mt-4  gap-2 h-auto  ">
              <Comentarios />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VentaDetail;
