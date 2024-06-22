//Actions

export const updateTableColumns = (tableId, columns) => {
  return {
    type: "UPDATE_COLUMNS",
    payload: { tableId, columns },
  };
};

const initialState = {
  CARGO_SELECTED_NAV: [
    { name: "NOMBRE CARGO", uid: "nombre_cargo" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  CURSO_SELECTED_NAV: [
    { name: "NÚMERO CURSO", uid: "numero_curso" },
    { name: "NOMBRE CURSO", uid: "nombre_curso" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  EMPRESA_SELECTED_NAV: [
    { name: "RUT", uid: "rut_empresa" },
    { name: "RAZÓN SOCIAL", uid: "nombre_empresa" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  ESTADO_SELECTED_NAV: [
    { name: "ESTADO", uid: "estado" },
    { name: "COLOR", uid: "color" },
    { name: "REMUNERADO", uid: "remunerado" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  HABILITACION_SELECTED_NAV: [
    { name: "RUTA", uid: "ruta" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  PLAZA_SELECTED_NAV: [
    { name: "NOMBRE PLAZA", uid: "nombre_plaza" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  TITULO_SELECTED_NAV: [
    { name: "TITULO", uid: "titulo" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
  ZONA_NAVEGACION_SELECTED_NAV: [
    { name: "NOMBRE ZONA", uid: "nombre_zona" },
    { name: "ACTIVO", uid: "activo" },
    { name: "DETALLE", uid: "detalle" },
  ],
};

// Reducer
const tableColumnsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_DEFAULT_COLUMNS":
      return {
        ...state,
        [action.payload.tableId]: action.payload.columns,
      };
    case "UPDATE_COLUMNS":
      return {
        ...state,
        [action.payload.tableId]: action.payload.columns,
      };
    default:
      return state;
  }
};

export default tableColumnsReducer;
