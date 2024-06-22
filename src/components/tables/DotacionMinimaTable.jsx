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

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import DotacionMinimaModal from "../../pages/admin/config/naves/DotacionMinimaModal";
import DotacionMinimaModalDetalle from "../forms/nave/DotacionMinimaModalDetalle";

const DotacionMinimaTable = ({
  data,
  plazas,
  titulos,
  cursos,
  setDotacionMinima,
  dotacionMinima,
  cargos,
}) => {
  const [open, setOpen] = useState(false);
  const columns = [
    { name: "PLAZA", uid: "id_plaza" },
    // { name: "CANTIDAD", uid: "cantidad" },
    { name: "DETALLE", uid: "detalle" },
  ];

  const dataWithIndex = data.map((item, index) => ({
    ...item,
    index, // this adds the index based on object position in the array
  }));
  const detalleValue = useRef();

  const handleRemoveDotacionMinima = (index) => {
    setDotacionMinima(dataWithIndex.filter((d) => d.index !== index));
    setOpen(!open);
  };

  const handleOpen = (value) => {
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
        return (
          <p className="text-xs ">
            {plazas.find((d) => d._id === cellValue).nombre_plaza}
          </p>
        );
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

  const type = "Edit";

  return (
    <>
      {data && (
        <DotacionMinimaModalDetalle
          isOpen={open}
          type={type}
          onOpenChange={handleOpen}
          data={detalleValue.current}
          plazas={plazas}
          handleRemoveDotacionMinima={handleRemoveDotacionMinima}
          titulos={titulos}
          cursos={cursos}
          cargos={cargos}
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
        <TableBody emptyContent={"No hay datos."} items={dataWithIndex}>
          {(item) => (
            <TableRow key={item.id_plaza}>
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
