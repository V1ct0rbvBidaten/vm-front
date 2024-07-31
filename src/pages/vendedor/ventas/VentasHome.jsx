import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
  Chip,
  Tooltip,
  Button,
  Pagination,
  Divider,
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useVentasSeller from "../../../hooks/useVentasSeller";
import Loading from "../../../components/utils/Loading";
import DataTablePrimary from "../../../components/tables/DataTablePrimary";
import {
  formatDateToDDMMYY,
  formatNumberToCurrency,
} from "../../../functions/formaters";

const initialState = {
  page: 1,
  page_size: 10,
};

const VentasHome = () => {
  const user = useSelector((state) => state.user);

  const [dynamic, setDynamic] = useState(initialState);

  let navigate = useNavigate();

  const { data, loading } = useVentasSeller(user.token, dynamic);

  if (loading) {
    return (
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <div className="w-full  mb-2 p-4 flex justify-between">
          <h1 className="text-2xl font-semibold">Ventas</h1>
        </div>
        <Divider />
        <div className="text-center">
          <Loading />
          <p className="text-sky-500 font-semibold text-xl">Cargando...</p>
        </div>
      </div>
    );
  }

  const columns = [
    {
      title: "Fecha",
      dataIndex: "fecha_venta",
      key: "fecha_venta",
      render: (text, record) => (
        <span className="font-semibold text-slate-500">
          {formatDateToDDMMYY(text)}
        </span>
      ),
    },
    {
      title: "Empresa",
      dataIndex: "empresa",
      key: "empresa",
      render: (text, record) => (
        <span className="font-semibold text-slate-500">{text}</span>
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
      title: "Acciones",
      dataIndex: "id_venta",
      key: "acciones",
      render: (text, record) => (
        <Button
          className=" bg-emerald-700 h-8 rounded-full text-white"
          onClick={() => navigate(`/vendedor/ventas/${text}`)}
        >
          Detalle
        </Button>
      ),
    },
  ];

  return (
    <div className="w-full bg-white rounded-md shadow-md mb-5 ">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Ventas</h1>
      </div>
      <Divider />
      <div className="p-4 flex flex-col gap-2">
        <div></div>
        <DataTablePrimary rows={data.detail.data.ventas} columns={columns} />
      </div>
    </div>
  );
};

export default VentasHome;
