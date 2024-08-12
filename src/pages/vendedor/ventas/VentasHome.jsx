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
  formatDateToHHMMDDMMYY,
  formatNumberToCurrency,
} from "../../../functions/formaters";
import { ClockIcon } from "@heroicons/react/24/solid";

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
            {formatDateToHHMMDDMMYY(text)}
          </span>
        </div>
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

  const { page, page_size } = dynamic;

  const totalItems =
    data && data.detail && data.detail.data ? data.detail.data.total : [];

  const pages = Math.ceil(totalItems / page_size);

  const handleDynamicStateChange = (e) => {
    setDynamic({ ...dynamic, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-white rounded-md shadow-md mb-5 ">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Ventas</h1>
      </div>
      <Divider />
      <div className="p-4 flex flex-col gap-2">
        <div className="w-full flex gap-4  mb-2 p-4 justify-end">
          <label className="flex items-end text-default-400 text-small">
            Items por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              value={page_size}
              name="page_size"
              onChange={handleDynamicStateChange}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
        <DataTablePrimary rows={data.detail.data.ventas} columns={columns} />
        <div className="w-full  flex justify-between items-center">
          <Pagination
            total={pages}
            initialPage={page}
            loop
            showControls
            color="secondary"
            className="m-4"
            name={page}
            onChange={(page) => setDynamic({ ...dynamic, page: Number(page) })}
          />
          <span className="text-default-400 text-small">
            Total {totalItems} registros
          </span>
        </div>
      </div>
    </div>
  );
};

export default VentasHome;
