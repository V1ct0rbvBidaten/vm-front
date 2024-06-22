import { useEffect, useState } from "react";
import { getZonaNavegaciones } from "../api/zonaNavegacion";

function useZonasNavegacion(token, body, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    getZonaNavegaciones(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, reload]);

  return { data, loading, error };
}

export default useZonasNavegacion;
