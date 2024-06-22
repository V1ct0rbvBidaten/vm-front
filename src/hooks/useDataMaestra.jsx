import { useEffect, useState } from "react";
import { getCursos } from "../api/cursos";
import { getCargos } from "../api/cargo";
import { getEmpresas } from "../api/empresa";
import { getEstados } from "../api/estado";
import { getZonaNavegaciones } from "../api/zonaNavegacion";
import { getHabilitaciones } from "../api/habilitacion";
import { getNaves } from "../api/nave";
import { getPlazas } from "../api/plaza";
import { getTitulos } from "../api/titulo";
import {
  CARGO_SELECTED_NAV,
  CURSO_SELECTED_NAV,
  EMPRESA_SELECTED_NAV,
  ESTADO_SELECTED_NAV,
  HABILITACION_SELECTED_NAV,
  PLAZA_SELECTED_NAV,
  TITULO_SELECTED_NAV,
  ZONA_NAVEGACION_SELECTED_NAV,
} from "../components/utils/Constantes";

function useDataMaestra(token, body, reload, selectedNav) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    if (selectedNav === CARGO_SELECTED_NAV) {
      getCargos(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === CURSO_SELECTED_NAV) {
      getCursos(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === EMPRESA_SELECTED_NAV) {
      getEmpresas(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === ESTADO_SELECTED_NAV) {
      getEstados(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === HABILITACION_SELECTED_NAV) {
      getHabilitaciones(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === PLAZA_SELECTED_NAV) {
      getPlazas(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === TITULO_SELECTED_NAV) {
      getTitulos(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else if (selectedNav === ZONA_NAVEGACION_SELECTED_NAV) {
      getZonaNavegaciones(token, body)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [body, reload, selectedNav]);

  return { data, loading, error };
}

export default useDataMaestra;
