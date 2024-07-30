import {
  ChevronDoubleDownIcon,
  ChevronDoubleLeftIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/solid";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";

const VentaDetailEmpresa = () => {
  let navigate = useNavigate();

  const user = useSelector((state) => state.user);

  const { idVenta } = useParams();

  const { data, loading } = useFetchById(
    user.token,
    `venta-empresa/${idVenta}`
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
    estado,
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
  } = data.detail.data;

  return (
    <>
      {data && data.detail.data && (
        <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
          <h1 className="text-2xl font-semibold">
            <Button
              isIconOnly
              className="bg-emerald-500  text-white h-6"
              onClick={() => navigate("/empresa/ventas")}
            >
              <ChevronDoubleLeftIcon className="h-4" />
            </Button>
          </h1>

          <div className="flex justify-between mt-4 border-slate-300 border-1 rounded-md p-4 font-semibold">
            <span>Empresa: {empresa}</span>
            <span>Producto: {producto}</span>
            <span>Total Venta: {total_venta}</span>
            <span>Cantidad: 23</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="col-span-2 flex justify-between mt-4  grid grid-cols-2 gap-2 rounded-md p-4 font-semibold">
              <Input
                label="Nombre"
                labelPlacement="outside"
                className="w-full"
                variant="bordered"
                value={nombre_cliente}
                endContent={<PencilSquareIcon className="h-4" />}
              />
              <Input
                label="Rut"
                labelPlacement="outside"
                className="w-full"
                variant="bordered"
                value={rut_cliente}
                endContent={<PencilSquareIcon className="h-4" />}
              />
              <Input
                label="Correo"
                labelPlacement="outside"
                className="w-full"
                variant="bordered"
                value={email_cliente}
                endContent={<PencilSquareIcon className="h-4" />}
              />
              <Input
                label="Telefono"
                labelPlacement="outside"
                className="w-full"
                variant="bordered"
                value={telefono_cliente}
                endContent={<PencilSquareIcon className="h-4" />}
              />
              <Input
                label="Dirección"
                labelPlacement="outside"
                className="w-full col-span-2"
                variant="bordered"
                value={direccion_cliente}
                endContent={<PencilSquareIcon className="h-4" />}
              />
              <Textarea
                label="Comentarios Adicionales"
                labelPlacement="outside"
                className="w-full col-span-2"
                variant="bordered"
                endContent={<PencilSquareIcon className="h-4" />}
              />
            </div>
            <div className=" flex flex-col gap-4 mt-4 border-slate-300 border rounded-md p-4 font-semibold">
              <Button>Ver documentación</Button>
              <Button>Descargar documentación</Button>
              <Button>Subir documentación</Button>
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

export default VentaDetailEmpresa;
