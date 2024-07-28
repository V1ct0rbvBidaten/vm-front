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
} from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useVentasSeller from "../../../hooks/useVentasSeller";

const initialState = {
  page: 1,
  page_size: 10,
};

const VentasHome = () => {
  const user = useSelector((state) => state.user);

  const [dynamic, setDynamic] = useState(initialState);

  let navigate = useNavigate();

  const { data, loading } = useVentasSeller(user.token, dynamic);

  if (loading) return <p>Cargando...</p>;

  return (
    <div>
      <div className="w-full bg-white rounded-md shadow-md mb-5 p-4">
        <h1 className="text-2xl font-semibold">Ventas</h1>
        <p p className="italic">
          lorem ipsum lorem ipsum
        </p>
      </div>
    </div>
  );
};

export default VentasHome;
