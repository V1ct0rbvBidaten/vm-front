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
import EmpresaCreateForm from "../forms/empresa/EmpresaCreateForm";
import EstadoCreateForm from "../forms/estado/EstadoCreateForm";
import CargoCreateForm from "../forms/cargo/CargoCreateForm";
import CursoCreateForm from "../forms/curso/CursoCreateForm";
import HabilitacionCreateForm from "../forms/habilitacion/HabilitacionCreateForm";
import PlazaCreateForm from "../forms/plaza/PlazaCreateForm";
import TituloCreateForm from "../forms/titulo/TituloCreateForm";
import ZonaCreateForm from "../forms/zonaNavegacion/ZonaCreateForm";

const ModalCreateForm = ({
  isOpen,
  onOpenChange,
  seccion,
  resetState,
  user,
}) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 capitalize">
              Crear nuevo registro
            </ModalHeader>
            <ModalBody>
              {seccion && seccion === CARGO_SELECTED_NAV ? (
                <CargoCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === CURSO_SELECTED_NAV ? (
                <CursoCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === EMPRESA_SELECTED_NAV ? (
                <EmpresaCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === ESTADO_SELECTED_NAV ? (
                <EstadoCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === HABILITACION_SELECTED_NAV ? (
                <HabilitacionCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === PLAZA_SELECTED_NAV ? (
                <PlazaCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === TITULO_SELECTED_NAV ? (
                <TituloCreateForm
                  user={user}
                  resetState={resetState}
                  onClose={onClose}
                />
              ) : seccion === ZONA_NAVEGACION_SELECTED_NAV ? (
                <ZonaCreateForm
                  user={user}
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

export default ModalCreateForm;
