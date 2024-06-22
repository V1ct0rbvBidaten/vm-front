import { useCallback, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Pagination,
} from "@nextui-org/react";

import {
  MagnifyingGlassIcon,
  NoSymbolIcon,
  CheckCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

const NavesTable = ({
  resetState,
  data,
  handleDynamicStateChange,
  setDynamicState,
  dynamicState,
  user,
}) => {
  let navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    { name: "NOMBRE NAVE", uid: "nombre_nave" },
    { name: "TIPO DE NAVE", uid: "tipo_nave" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ];

  const { page, per_page } = dynamicState;

  const pages = data && data.totalPages;

  const renderCell = useCallback((value, columnKey) => {
    const cellValue = value[columnKey];

    const id = value["_id"];

    switch (columnKey) {
      case "activo":
        return cellValue === true ? (
          <Button
            size="sm"
            rounded="full"
            isIconOnly
            className="bg-emerald-500 w-50 text-white"
          >
            <CheckCircleIcon className="h-4" />
          </Button>
        ) : (
          <Button
            size="sm"
            rounded="full"
            isIconOnly
            className="bg-rose-500 w-50 text-white"
          >
            <NoSymbolIcon className="h-4" />
          </Button>
        );
      case "detalle":
        return (
          <Button
            className="bg-emerald-500 text-white"
            size="sm"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            onClick={() =>
              navigate(`/admin/configuraciones/naves/detalle-nave/${id}`)
            }
          >
            Detalle
          </Button>
        );
      default:
        return <p className="text-xs ">{cellValue}</p>;
    }
  }, []);

  const topContent = useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center gap-4">
          <Button
            startContent={<PlusIcon className="h-6" />}
            className="text-white bg-foreground"
            size="sm"
            onClick={() => navigate("/admin/configuraciones/naves/crear-nave")}
          >
            Nuevo registro
          </Button>
          <label className="flex items-center text-default-400 text-small">
            Filas por pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              value={per_page}
              name="per_page"
              onChange={handleDynamicStateChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [dynamicState]);

  const bottomContent = useMemo(() => {
    return (
      <div className="flex w-full justify-between">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={page}
          name="page"
          total={pages}
          onChange={(page) =>
            setDynamicState({ ...dynamicState, page: Number(page) })
          }
        />
        <span className="text-default-400 text-small">
          Total {data.totalItems} registros
        </span>
      </div>
    );
  }, []);

  return (
    <>
      <Table
        topContent={topContent}
        bottomContent={bottomContent}
        isCompact
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="bg-emerald-700 text-white text-xs"
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No hay datos."} items={data.items}>
          {(item) => (
            <TableRow key={item._id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
};

export default NavesTable;
