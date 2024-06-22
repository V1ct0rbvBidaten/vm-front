import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import {
  CARGO_SELECTED_NAV,
  CURSO_SELECTED_NAV,
  EMPRESA_SELECTED_NAV,
  ESTADO_SELECTED_NAV,
  HABILITACION_SELECTED_NAV,
  PLAZA_SELECTED_NAV,
  TITULO_SELECTED_NAV,
  ZONA_NAVEGACION_SELECTED_NAV,
} from "./Constantes";
import CargoUpdateForm from "../forms/cargo/CargoUpdateForm";
import CursoUpdateForm from "../forms/curso/CursoUpdateForm";
import EmpresaUpdateForm from "../forms/empresa/EmpresaUpdateForm";
import EstadoUpdateForm from "../forms/estado/EstadoUpdateForm";
import HabilitacionUpdateForm from "../forms/habilitacion/HabilitacionUpdateForm";
import PlazaUpdateform from "../forms/plaza/PlazaUpdateform";
import TituloUpdateForm from "../forms/titulo/TituloUpdateForm";
import ZonaUpdateForm from "../forms/zonaNavegacion/ZonaUpdateForm";

const ModalUpdateForm = ({
  isOpen,
  onOpenChange,
  user,
  seccion,
  resetState,
  data,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 capitalize">
              Actualizar registro
            </ModalHeader>
            <ModalBody>
              {seccion && seccion === CARGO_SELECTED_NAV ? (
                <CargoUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === CURSO_SELECTED_NAV ? (
                <CursoUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === EMPRESA_SELECTED_NAV ? (
                <EmpresaUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === ESTADO_SELECTED_NAV ? (
                <EstadoUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === HABILITACION_SELECTED_NAV ? (
                <HabilitacionUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === PLAZA_SELECTED_NAV ? (
                <PlazaUpdateform
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === TITULO_SELECTED_NAV ? (
                <TituloUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === ZONA_NAVEGACION_SELECTED_NAV ? (
                <ZonaUpdateForm
                  user={user}
                  data={data}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : (
                <>Otro</>
              )}
            </ModalBody>
            <ModalFooter>
              {/* <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button> */}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default ModalUpdateForm;
