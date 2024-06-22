import { useEffect, useState } from "react";
import { getMovimientos } from "../api/movimientos";

function useMovimientos(token, body, id, periodo, reload) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  body.nave = id;
  body.month = periodo.mes + 1;
  body.year = periodo.año;

  useEffect(() => {
    setLoading(true);
    getMovimientos(token, body)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [body, id, reload, periodo]);

  return { data, loading, error };
}

export default useMovimientos;
