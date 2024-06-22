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
  Input,
} from "@nextui-org/react";

import {
  MagnifyingGlassIcon,
  NoSymbolIcon,
  CheckCircleIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";

const PersonalEmbarcadoTable = ({
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
    { name: "RUT", uid: "rut" },
    { name: "NOMBRE", uid: "nombre" },
    { name: "SEGUNDO NOMBRE", uid: "segundo_nombre" },
    { name: "APELLIDO PATERNO", uid: "apellido_paterno" },
    { name: "APELLIDO MATERNO", uid: "apellido_materno" },
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
            className="bg-teal-500 w-50 text-white h-6"
          >
            <CheckCircleIcon className="h-4" />
          </Button>
        ) : (
          <Button
            size="sm"
            rounded="full"
            isIconOnly
            className="bg-rose-500 w-50 text-white h-6"
          >
            <NoSymbolIcon className="h-4" />
          </Button>
        );
      case "detalle":
        return (
          <Button
            className="bg-emerald-500 text-white h-6"
            size="sm"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            onClick={() =>
              navigate(`/admin/personal-embarcado/detalle-trabajador/${id}`)
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
            onClick={() =>
              navigate("/admin/personal-embarcado/crear-trabajador")
            }
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
              className=" text-white text-xs"
              style={{ background: "#7AB6D9" }}
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

export default PersonalEmbarcadoTable;
