import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../utils/ListBoxWrapper";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import {
  CARGO_SELECTED_NAV,
  CURSO_SELECTED_NAV,
  EMPRESA_SELECTED_NAV,
  ESTADO_SELECTED_NAV,
  HABILITACION_SELECTED_NAV,
  PLAZA_SELECTED_NAV,
  TITULO_SELECTED_NAV,
  ZONA_NAVEGACION_SELECTED_NAV,
} from "../utils/Constantes";

const DatosMaestrosSideNav = ({ handlechangeSelectedNav }) => {
  return (
    <ListboxWrapper>
      <Listbox
        variant="solid"
        color="primary"
        aria-label="Actions"
        onAction={(key) => handlechangeSelectedNav(key)}
      >
        <ListboxItem
          description="Configurar cargos personal"
          endContent={<ChevronRightIcon className="h-3" />}
          key={CARGO_SELECTED_NAV}
        >
          Cargo
        </ListboxItem>
        <ListboxItem
          description="Configurar cursos "
          endContent={<ChevronRightIcon className="h-3" />}
          key={CURSO_SELECTED_NAV}
        >
          Cursos
        </ListboxItem>
        <ListboxItem
          description="Configurar empresas "
          endContent={<ChevronRightIcon className="h-3" />}
          key={EMPRESA_SELECTED_NAV}
        >
          Empresas
        </ListboxItem>
        <ListboxItem
          description="Configurar estados de asistencia"
          endContent={<ChevronRightIcon className="h-3" />}
          key={ESTADO_SELECTED_NAV}
        >
          Estado
        </ListboxItem>
        <ListboxItem
          description="Configurar habilitaciones personal"
          endContent={<ChevronRightIcon className="h-3" />}
          key={HABILITACION_SELECTED_NAV}
        >
          Habilitación
        </ListboxItem>
        <ListboxItem
          description="Configurar plazas nave"
          endContent={<ChevronRightIcon className="h-3" />}
          key={PLAZA_SELECTED_NAV}
        >
          Plaza
        </ListboxItem>
        <ListboxItem
          description="Configurar titulos"
          endContent={<ChevronRightIcon className="h-3" />}
          key={TITULO_SELECTED_NAV}
        >
          Título
        </ListboxItem>
        <ListboxItem
          description="Configurar zonas de navegación disponibles para naves"
          endContent={<ChevronRightIcon className="h-3" />}
          key={ZONA_NAVEGACION_SELECTED_NAV}
        >
          Zona de Navegación
        </ListboxItem>
      </Listbox>
    </ListboxWrapper>
  );
};

export default DatosMaestrosSideNav;
