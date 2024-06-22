import { useCallback, useRef, useState } from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";
import DotacionMinimaModalDetalle from "../forms/nave/DotacionMinimaModalDetalle";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const DotacionMinimaTable = ({ data }) => {
  const [open, setOpen] = useState(false);
  const columns = [
    { name: "PLAZA", uid: "id_plaza" },
    // { name: "CANTIDAD", uid: "cantidad" },
    { name: "DETALLE", uid: "detalle" },
  ];

  const detalleValue = useRef();

  const handleOpen = (value) => {
    console.log(value);
    if (open) {
      setOpen(!open);
    } else {
      detalleValue.current = value;
      setOpen(!open);
    }
  };

  const renderCell = useCallback((value, columnKey) => {
    const cellValue = value[columnKey];

    switch (columnKey) {
      case "id_plaza":
        return <p className="text-xs ">{cellValue.nombre_plaza}</p>;
      case "detalle":
        return (
          <Button
            className="bg-emerald-500 text-white"
            size="sm"
            startContent={<MagnifyingGlassIcon className="h-4" />}
            onClick={() => handleOpen(value)}
          >
            Detalle
          </Button>
        );
      default:
        return <p className="text-xs ">{cellValue}</p>;
    }
  }, []);

  const type = "Detalle";
  return (
    <>
      {data && (
        <DotacionMinimaModalDetalle
          isOpen={open}
          type={type}
          onOpenChange={handleOpen}
          data={detalleValue.current}
        />
      )}
      <Table isCompact aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              className="bg-sky-500 text-white text-xs"
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No hay datos."} items={data}>
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

export default DotacionMinimaTable;
