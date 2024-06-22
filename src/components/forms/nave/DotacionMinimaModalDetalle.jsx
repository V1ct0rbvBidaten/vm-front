import { TrashIcon } from "@heroicons/react/24/solid";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
} from "@nextui-org/react";

const DotacionMinimaModalDetalle = ({
  isOpen,
  onOpenChange,
  data,
  plazas,
  titulos,
  cursos,
  type,
  handleRemoveDotacionMinima,
  cargos,
}) => {
  const titulosNombre =
    data &&
    data.titulos &&
    titulos &&
    data.titulos.map((c) => {
      return titulos.find((d) => d._id === c).titulo;
    });

  const cursosNombre =
    data &&
    data.cursos &&
    cursos &&
    data.cursos.map((c) => {
      return {
        nombre: cursos.find((d) => d._id === c).nombre_curso,
        nro: cursos.find((d) => d._id === c).numero_curso,
      };
    });

  const cargosNombre =
    data &&
    data.cargos &&
    cargos &&
    data.cargos.map((c) => {
      return cargos.find((d) => d._id === c).nombre_cargo;
    });

  return (
    <Modal size="5xl" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Detalle de plaza
            </ModalHeader>
            <ModalBody>
              {type === "Edit" ? (
                <>
                  <table className="table-plaza">
                    <thead>
                      <th className="shadow-md">Plaza</th>
                      <td>
                        {data &&
                          plazas &&
                          plazas.find((d) => d._id === data.id_plaza)
                            .nombre_plaza}
                      </td>
                    </thead>
                  </table>
                  <div className="grid grid-cols-3 gap-4">
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Títulos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {titulosNombre &&
                          titulosNombre.map((c) => (
                            <tr key={c}>
                              <td></td>
                              <td>{c}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th>Nro Curso</th>
                          <th>Cursos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cursosNombre &&
                          cursosNombre.map((c) => (
                            <tr key={c}>
                              <td>{c.nro}</td>
                              <td>{c.nombre}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Cargos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cargosNombre &&
                          cargosNombre.map((c) => (
                            <tr key={c}>
                              <td>{}</td>
                              <td>{c}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                  <div>
                    <Button
                      size="sm"
                      className="w-full bg-rose-500 text-white"
                      endContent={<TrashIcon className="h-6" />}
                      onClick={() =>
                        handleRemoveDotacionMinima(data && data.index)
                      }
                    >
                      Borrar plaza
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <table className="table-plaza">
                    <thead>
                      <th className="shadow-md">Plaza</th>
                      <td>{data && data.id_plaza.nombre_plaza}</td>
                    </thead>
                  </table>

                  <div className="grid grid-cols-3 gap-4">
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Títulos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.titulos &&
                          data.titulos.map((c) => (
                            <tr key={c._id}>
                              <td></td>
                              <td>{c.titulo}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th>Nro Curso</th>
                          <th>Cursos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data &&
                          data.cursos &&
                          data.cursos.map((c) => (
                            <tr key={c._id}>
                              <td>{c.numero_curso}</td>
                              <td>{c.nombre_curso}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                    <table className="table-default">
                      <thead>
                        <tr>
                          <th></th>
                          <th>Cargos</th>
                        </tr>
                      </thead>
                      <tbody>
                        {" "}
                        {data &&
                          data.cargos &&
                          data.cargos.map((c) => (
                            <tr key={c._id}>
                              <td>{}</td>
                              <td>{c.nombre_cargo}</td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DotacionMinimaModalDetalle;
