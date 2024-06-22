import { useCallback, useMemo, useRef, useState } from "react";

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
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import UserCreateModal from "../../pages/admin/config/usuarios/UserCreateModal";
import UserUpdateModal from "../../pages/admin/config/usuarios/UserUpdateModal";

const UsuariosTable = ({
  resetState,
  data,
  handleDynamicStateChange,
  setDynamicState,
  dynamicState,
  user,
}) => {
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const columns = [
    { name: "NOMBRE ", uid: "name" },
    { name: "EMAIL", uid: "email" },
    { name: "ROL ", uid: "role" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ];

  const { page, per_page } = dynamicState;

  const pages = data.totalPages;

  const registroData = useRef([]);

  const handleModalUpdate = (value) => {
    console.log(value);
    if (openEdit === true) {
      setOpenEdit(!openEdit);
    } else {
      setOpenEdit(!openEdit);
      registroData.current = value;
    }
  };

  const handleModalCreate = () => {
    if (open === true) {
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };

  const renderCell = useCallback((value, columnKey) => {
    const cellValue = value[columnKey];

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
            onClick={() => handleModalUpdate(value)}
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
            size="sm"
            className="bg-foreground text-white"
            startContent={<PlusCircleIcon className="h-6" />}
            onClick={handleModalCreate}
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
      <UserUpdateModal
        openEdit={openEdit}
        data={registroData.current}
        handleModalUpdate={handleModalUpdate}
        user={user}
        resetState={resetState}
      />
      <UserCreateModal
        open={open}
        handleModalCreate={handleModalCreate}
        user={user}
        resetState={resetState}
      />
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

export default UsuariosTable;
