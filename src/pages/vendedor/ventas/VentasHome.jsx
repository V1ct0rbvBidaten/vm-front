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
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key: "fecha",
    },
    {
      title: "Cliente",
      dataIndex: "cliente",
      key: "cliente",
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
    },
    {
      title: "Estado",
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: "Acciones",
      dataIndex: "acciones",
      key: "acciones",
    },
  ];

  return (
    <div className="w-full bg-white rounded-md shadow-md mb-5 ">
      <div className="w-full  mb-2 p-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Ventas</h1>
      </div>
      <Divider />
      <div>
        <DataTablePrimary data={data} columns={columns} />
      </div>
    </div>
  );
};

export default VentasHome;
