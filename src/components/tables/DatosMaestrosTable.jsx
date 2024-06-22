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
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import { filterObject } from "../../functions/utils";
import ModalUpdateForm from "../utils/ModalUpdateForms";

const DatosMaestrosTable = ({
  seccion,
  resetState,
  data,
  handleDynamicStateChange,
  columnsFilter,
  setDynamicState,
  dynamicState,
  user,
}) => {
  const [open, setOpen] = useState();

  // const columns = useMemo(() => {
  //   if (data && data.items && data.items.length > 0) {
  //     return getColumns(data.items[0]);
  //   }

  //   return [
  //     { name: "ID ", uid: "id" },
  //     { name: "Detalle", uid: "detalle" },
  //   ];
  // }, [data]);

  const columnsDefault = columnsFilter && filterObject(columnsFilter, seccion);

  const { page, per_page } = dynamicState;

  const pages = data.totalPages;

  const registroData = useRef([]);

  const handleModal = (value) => {
    if (open === true) {
      setOpen(!open);
    } else {
      setOpen(!open);
      registroData.current = value;
    }
  };

  const renderCell = useCallback((value, columnKey) => {
    const cellValue = value[columnKey];

    switch (columnKey) {
      case "color":
        return (
          <div
            className="h-4 w-1/3 shadow-md rounded-full"
            style={{ background: `${cellValue}` }}
          ></div>
        );
      case "remunerado":
        return cellValue === true ? (
          <Button
            size="sm"
            rounded="full"
            isIconOnly
            className="bg-emerald-500 w-50 text-white"
          >
            <CurrencyDollarIcon className="h-4" />
          </Button>
        ) : (
          <Button
            size="sm"
            rounded="full"
            isIconOnly
            className="bg-rose-500 w-50 text-white"
          >
            <CurrencyDollarIcon className="h-4" />
          </Button>
        );
      case "muellaje":
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
            onClick={() => handleModal(value)}
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
        <div className="flex justify-end items-center gap-4">
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
      <ModalUpdateForm
        seccion={seccion}
        isOpen={open}
        user={user}
        onOpenChange={handleModal}
        resetState={resetState}
        data={registroData.current}
      />
      <Table
        topContent={topContent}
        bottomContent={bottomContent}
        isCompact
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columnsDefault}>
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

export default DatosMaestrosTable;
