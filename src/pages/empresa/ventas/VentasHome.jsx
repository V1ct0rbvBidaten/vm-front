import { useState } from "react";
import { useSelector } from "react-redux";
import useFetchById from "../../../hooks/useFetch";
import Loading from "../../../components/utils/Loading";
import EmpresaBanner from "../../../components/utils/EmpresaBanner";
import useVentasMerchant from "../../../hooks/useVentasMerchant";
import { Button } from "@nextui-org/react";
import DataTablePrimary from "../../../components/tables/DataTablePrimary";
import {
  formatDateToDDMMYY,
  formatDateToHHMMDDMMYY,
  formatDateToYYYYMMDD,
  formatNumberToCurrency,
} from "../../../functions/formaters";
import { useNavigate } from "react-router-dom";
import { ClockIcon } from "@heroicons/react/24/solid";

const initialState = {
  page: 1,
  page_size: 10,
};

const VentasHome = () => {
  let navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const [reload, setReload] = useState(false);
  const [dynamic, setDynamic] = useState(initialState);

  const urlEmpresa = `empresa/${user.id_empresa}`;

  const { data: dataEmpresa, loading: loadingEmpresa } = useFetchById(
    user.token,
    urlEmpresa,
    reload
  );

  const { data, loading } = useVentasMerchant(user.token, dynamic);

  if (loadingEmpresa || loading)
    return (
      <div className="flex flex-col justify-center items-center w-100 h-[400px] bg-white rounded-md shadow-md">
        <Loading />
        <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
      </div>
    );

  const columns = [
    {
      title: "ID VENTA",
      dataIndex: "correlative_number",
      key: "correlative_number",
      render: (text, record) => (
        <span className="font-semibold text-slate-500">{text}</span>
      ),
    },
    {
      title: "Fecha",
      dataIndex: "fecha_venta",
      key: "fecha_venta",
      render: (text, record) => (
        <div className="flex w-full justify-start items-center gap-2">
          <span className="font-semibold text-slate-500">
            {formatDateToYYYYMMDD(text)}
          </span>
        </div>
      ),
    },
    {
      title: "Producto",
      dataIndex: "producto",
      key: "producto",
      render: (text, record) => (
        <span className="font-semibold text-slate-500">{text}</span>
      ),
    },
    {
      title: "Cantidad",
      dataIndex: "cantidad",
      key: "cantidad",
      render: (text, record) => (
        <span className="font-semibold text-slate-500">{text}</span>
      ),
    },
    {
      title: "Total",
      dataIndex: "total_venta",
      key: "total_venta",
      render: (text, record) => (
        <span className="font-semibold text-emerald-500">
          {formatNumberToCurrency(text)}
        </span>
      ),
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
      render: (text) => {
        if (text === "EN PROCESO") {
          return (
            <span className="bg-slate-200 text-slate-500  p-1 pr-4 pl-4 rounded-full hover:cursor-pointer">
              {text}
            </span>
          );
        } else if (text === "REQUIERE REVISIÓN") {
          return (
            <span className="bg-amber-200 text-amber-500  p-1 pr-4 pl-4 rounded-full hover:cursor-pointer">
              {text}
            </span>
          );
        } else if (text === "RECHAZADA") {
          return (
            <span className="bg-rose-200 text-rose-500 p-1 pr-4 pl-4 rounded-full hover:cursor-pointer">
              {text}
            </span>
          );
        } else if (text === "COMPLETADA") {
          return (
            <span className="bg-emerald-200 text-emerald-500 p-1 pr-4 pl-4 rounded-full hover:cursor-pointer">
              {text}
            </span>
          );
        } else {
          return <span>{text}</span>;
        }
      },
    },
    {
      title: "Detalle",
      dataIndex: "id_venta",
      key: "acciones",
      render: (text, record) => (
        <Button
          className=" bg-emerald-700 h-8 rounded-full text-white"
          onClick={() => navigate(`/empresa/ventas/${text}`)}
        >
          Detalle
        </Button>
      ),
    },
  ];

  return (
    <>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <EmpresaBanner data={dataEmpresa.detail.data} />
        <DataTablePrimary rows={data.detail.data.ventas} columns={columns} />
      </div>
    </>
  );
};

export default VentasHome;
