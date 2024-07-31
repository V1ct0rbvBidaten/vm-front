import {
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  PaperAirplaneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Button, Divider, Input, Textarea } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import { useState } from "react";
import Comentarios from "./Comentarios";
import { formatDateToDDMMYY } from "../../../functions/formaters";

const VentaDetail = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);
  const [reload, setReload] = useState(false);

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
  } = data.detail.data.ventas;

  return (
    <>
      {data && data.detail.data.ventas && (
        <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
          <div className="flex justify-between">
            <h1 className="text-2xl font-semibold">
              <Button
                isIconOnly
                className="bg-emerald-500  text-white h-6"
                onClick={() => navigate("/empresa/ventas")}
              >
                <ChevronDoubleLeftIcon className="h-4" />
              </Button>
            </h1>
            <span className="text-md font-semibold">
              Fecha de venta: {formatDateToDDMMYY(fecha_venta)}
            </span>
          </div>
          <div className="w-100 justify-between flex">
            <h1 className="text-xl  font-semibold mt-2">Venta #{id_venta}</h1>
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
              <Button className="bg-rose-200 text-emerald-500 p-1 pr-4 pl-4 rounded-full">
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
            <div className=" flex flex-col mt-4  gap-2 h-auto ">
              <Comentarios />
            </div>
            <div className=" flex flex-col gap-4 mt-4 col-span-2 border-slate-300 border rounded-md p-4 font-semibold">
              <h1>Datos Venta</h1>
              <div className="flex gap-2 mt-4  p-2 font-semibold">
                {/* <span> {producto}</span>
                <span> {total_venta}</span>
                <span> {cantidad}</span> */}
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
                      <td className="p-1 text-sm" colSpan="3">
                        {vendedor}
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Precio
                      </td>
                      <td className="p-1 text-sm">
                        {cantidad !== 0 ? total_venta / cantidad : 0}
                      </td>
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Cantidad
                      </td>
                      <td className="p-1 text-sm">{cantidad}</td>
                    </tr>{" "}
                    <tr className="border-b">
                      <td className="p-1 font-semibold bg-stone-100 text-sm">
                        Total Venta
                      </td>
                      <td className="p-1 text-sm" colSpan="3">
                        {total_venta}
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
                          Rut Cliente
                        </td>
                        <td className="p-1 text-sm">{rut_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Nombre Cliente
                        </td>
                        <td className="p-1 text-sm">{nombre_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Apellido Cliente
                        </td>
                        <td className="p-1 text-sm">{apellido_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Direccion Cliente
                        </td>
                        <td className="p-1 text-sm">{direccion_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Region Cliente
                        </td>
                        <td className="p-1 text-sm">{region_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Comuna Cliente
                        </td>
                        <td className="p-1 text-sm">{comuna_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Telefono Cliente
                        </td>
                        <td className="p-1 text-sm">{telefono_cliente}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-1 font-semibold bg-stone-100 text-sm">
                          Email Cliente
                        </td>
                        <td className="p-1 text-sm">{email_cliente}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <Divider />
              <span>Documentación Venta</span>
            </div>
            <Button className="col-span-3 w-full bg-emerald-500 text-white">
              Actualizar
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default VentaDetail;
